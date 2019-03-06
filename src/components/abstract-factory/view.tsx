import * as React from 'react';
import { CharacterFactory } from './character-factory';
import { Weapon, WeaponFactory } from '../factory/weapon-factory';

import './view.scss'
import { getClassTypes, getRaces, getClassLimitations } from './wow-helpers';

interface Props {}

interface State {
  classTypes: string[];
  classType: string;
  races: string[];
  race: string;
  classLimitations: {race: string; classes: string[]}[]
  character: any;
}

class AbstractFactory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    
    const classTypes = getClassTypes();
    const races = getRaces();
    const classLimitations = getClassLimitations();

    this.state = {
      race: races[0],
      races,
      classType: classTypes[0],
      classTypes,
      classLimitations,
      character: null,
    }
  }

  private getAvailableClassList = () => {
    const { classLimitations, race } = this.state;
    const availableClasses = classLimitations.find(classLimitation => classLimitation.race === race).classes;
    return availableClasses;
  }

  private generateCharacter = () => {
    this.setState({
      character: new CharacterFactory(this.state.race, this.state.classType).getCharacter(),
    })
  }

  public render() {
    const { races, character } = this.state;
    return (
      <div className="container full-height factory-view">
        <div className="row">
          <div className="col col-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <strong>Character Factory</strong>
              </div>
              <div className="panel-body">
                <form>
                  <div className="row">
                    <div className="col col-6">
                      <div className="input-group">
                        <label className="input-label">Race</label>
                        <select onChange={(e) => this.setState({race: e.currentTarget.value})} value={this.state.race}>
                          {races.map(race => (
                            <option key={race}>{race}</option>
                          ))}
                        </select>
                      </div>
                      <div className="input-group">
                        <label className="input-label">Class</label>
                        <select onChange={(e) => this.setState({classType: e.currentTarget.value})} value={this.state.classType}>
                          {this.getAvailableClassList().map((availableClass: string) => (
                            <option key={availableClass}>{availableClass}</option>
                          ))}
                        </select>
                      </div>
                      <div className="input-group input-group-row">
                        <button type="button" className="btn btn-success" onClick={this.generateCharacter}>Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {character && (
            <div className="col col-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <strong>Character Details</strong>
                </div>
                <div className="panel-body">
                  <p><strong>Name</strong>: {character.name}</p>
                  <p><strong>Race</strong>: {character.race}</p>
                  <p><strong>Class</strong>: {character.classType}</p>
                </div>
              </div>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <strong>Starting Armor</strong>
                </div>
                <div className="panel-body">
                  <p><strong>Name</strong>: {character.armor.getStats().name}</p>
                  <p><strong>Rarity</strong>: {character.armor.getStats().rarity}</p>
                  <p><strong>Level</strong>: {character.armor.getStats().level}</p>
                  <p><strong>Armor Value</strong>: {character.armor.getStats().armorValue}</p>
                </div>
              </div>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <strong>Starting Weapon</strong>
                </div>
                <div className="panel-body">
                  <p><strong>Name</strong>: {character.weapon.getStats().name}</p>
                  <p><strong>Rarity</strong>: {character.weapon.getStats().rarity}</p>
                  <p><strong>Level</strong>: {character.weapon.getStats().level}</p>
                  <p><strong>Min Damage</strong>: {character.weapon.getStats().minDamage}</p>
                  <p><strong>Max Damage</strong>: {character.weapon.getStats().maxDamage}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AbstractFactory;
