import { CharacterNameGenerator } from "./character-name-factory";

export class CharacterFactory {
  private classType: string;
  private race: string;
  private name: string;
  constructor(race: string, classType: string) {
    this.race = race;
    this.classType = classType;
    this.setCharacterName()
  }


  setCharacterName() {
    this.name = new CharacterNameGenerator(this.race).generateName();
  }

  getCharacter() {
    return {
      race: this.race,
      classType: this.classType,
      name: this.name,
    }
  }
}