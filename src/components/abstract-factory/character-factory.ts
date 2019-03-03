import { CharacterNameGenerator } from "./character-name-factory";
import { getStartingWeapon } from "./starting-weapon-generator";
import { getStartingArmor } from "./starting-armor-generator";
import { WeaponFactory, Weapon } from "../factory/weapon-factory";
import { ArmorFactory, Armor } from "./armor-factory";

export class CharacterFactory {
  private classType: string;
  private race: string;
  private name: string;
  private classStartingWeapon: string;
  private classStartingArmor: string;
  private weapon: Weapon;
  private armor: Armor;
  constructor(race: string, classType: string) {
    this.race = race;
    this.classType = classType;
    this.setCharacterName();
    this.setClassStartingWeaponType();
    this.setClassStartingArmorType();
    this.setWeapon();
    this.setArmor();
  }

  setCharacterName() {
    this.name = new CharacterNameGenerator(this.race).generateName();
  }

  setClassStartingWeaponType() {
    this.classStartingWeapon = getStartingWeapon(this.classType);
  }

  setClassStartingArmorType() {
    this.classStartingArmor = getStartingArmor(this.classType);
  }

  setWeapon() {
    this.weapon = new WeaponFactory(this.classStartingWeapon).getWeapon()
  }

  setArmor() {
    this.armor = new ArmorFactory(this.classStartingArmor).getArmor()
  }

  getCharacter() {
    return {
      race: this.race,
      classType: this.classType,
      name: this.name,
      weapon: this.weapon,
      armor: this.armor,
    }
  }
}