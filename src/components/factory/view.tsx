import * as React from 'react';
import { Weapon, WeaponFactory } from './weapon-factory';

import './view.scss'

interface Props {}

interface State {
  weaponType: string;
  weaponTypes: string[];
  weapon: Weapon;
}

class Factory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    
    const weaponTypes = [
      "Sword",
      "Greataxe",
      "Bow",
      "Staff",
    ];

    this.state = {
      weaponType: weaponTypes[0],
      weaponTypes,
      weapon: null,
    }
  }

  render() {
    const { weapon, weaponTypes } = this.state;
    return (
      <div className="container full-height factory-view">
        <div className="row">
          <div className="col col-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <strong>Factory</strong>
              </div>
              <div className="panel-body">
                <form>
                  <div className="row">
                    <div className="col col-6">
                      <div className="input-group">
                        <label className="input-label">Weapon type</label>
                        <select onChange={(e) => this.setState({weaponType: e.currentTarget.value})} value={this.state.weaponType}>
                          {weaponTypes.map(weaponType => {
                            return (
                              <option key={weaponType}>{weaponType}</option>    
                            )
                          })}
                        </select>
                      </div>
                      <div className="input-group input-group-row">
                        <button type="button" className="btn btn-success" onClick={this.generateWeapon}>Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <strong>Factory Output</strong>
              </div>
              <div className="panel-body">
                {weapon && (
                  <div>
                    <p><strong>Name</strong>: {weapon.getStats().name}</p>
                    <p><strong>Rarity</strong>: {weapon.getStats().rarity}</p>
                    <p><strong>Level</strong>: {weapon.getStats().level}</p>
                    <p><strong>Min Damage</strong>: {weapon.getStats().minDamage}</p>
                    <p><strong>Max Damage</strong>: {weapon.getStats().maxDamage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private generateWeapon = () => {
    this.setState({
      weapon: new WeaponFactory(this.state.weaponType).getWeapon(),
    })
  }
}

export default Factory;
