import * as React from 'react';
import { CharacterFactory } from './character-factory';
import Weapon, { WeaponFactory } from '../factory/weapon-factory';

import './view.scss'

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
    
    const classTypes = [
      "Warrior",
      "Rogue",
      "Paladin",
      "Druid",
      "Shaman",
      "Priest",
      "Death Knight",
      "Demon Hunter",
      "Hunter",
      "Mage",
      "Warlock",
      "Monk",
    ];

    const races = [
      "Dwarf",
      "Human",
      "Gnome",
      "Night Elf",
      "Tauren",
      "Orc",
      "Undead",
      "Troll",
      "Panderaan",
      "Draenei"
    ]

    const classLimitations = [
      {
        race: "Human",
        classes: ["Warrior", "Rogue", "Paladin", "Priest", "Death Knight", "Hunter", "Mage", "Warlock", "Monk"]
      },
      {
        race: "Dwarf",
        classes: ["Warrior", "Rogue", "Paladin", "Shaman", "Priest", "Death Knight", "Hunter", "Mage", "Monk"]
      },
      {
        race: "Gnome",
        classes: ["Warrior", "Rogue", "Priest", "Death Knight", "Hunter", "Mage", "Warlock", "Monk"]
      },
      {
        race: "Night Elf",
        classes: ["Warrior", "Rogue", "Priest", "Death Knight", "Hunter", "Mage", "Monk"]
      },
      {
        race: "Tauren",
        classes: ["Warrior", "Rogue", "Paladin", "Priest", "Death Knight", "Hunter", "Monk"]
      },
      {
        race: "Orc",
        classes: ["Warrior", "Rogue", "Shaman", "Priest", "Death Knight", "Hunter", "Warlock", "Monk"]
      },
      {
        race: "undead",
        classes: ["Warrior", "Rogue", "Priest", "Death Knight", "Hunter", "Mage", "Warlock", "Monk"]
      },
      {
        race: "Troll",
        classes: ["Warrior", "Rogue", "Shaman", "Priest", "Death Knight", "Hunter", "Warlock", "Monk"]
      },
      {
        race: "Panderaan",
        classes: ["Warrior", "Rogue", "Priest", "Death Knight", "Hunter", "Mage", "Warlock", "Monk"]
      },
      {
        race: "Draenei",
        classes: ["Warrior", "Rogue", "Paladin", "Priest", "Death Knight", "Mage", "Warlock", "Hunter", "Monk"]
      }
    ]

    this.state = {
      race: races[0],
      races,
      classType: classTypes[0],
      classTypes,
      classLimitations,
      character: null,
    }
  }

  render() {
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
              </div>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <strong>Starting Weapon</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  private getAvailableClassList = () => {
    const { classLimitations, race } = this.state;
    const availableClasses = classLimitations.find(classLimitation => classLimitation.race === race).classes;
    return availableClasses;
  }

  private generateCharacter = () => {
    this.setState({
      character: new CharacterFactory(this.state.race, this.state.classType).getCharacter(),
    }, () => {
      console.log(this.state.character)
    })
  }
}

export default AbstractFactory;
