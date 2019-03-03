export class CharacterNameGenerator {
  private race: string;
  private characterNames: {race: string, names: string[]}[]
  constructor(race: string) {
    this.race = race;
    this.characterNames = [
      {
        race: "Human",
        names: ["Aegwynn", "Anduin Lothar", "Arthas Menethil", "Bolvar Fordragon", "Kel'Thuzad"]
      },
      {
        race: "Dwarf",
        names: ["Brann Bronzebeard", "Muradin Bronzebeard", "Magni Bronzebeard", "Fenran Thaurissan"]
      },
      {
        race: "Gnome",
        names: ["Gelbin Mekkatorque", "Millhouse Manastorm", "Mekgineer Thermaplugg"]
      },
      {
        race: "Night Elf",
        names: ["Illidan Stormrage", "Malfurion Stormrage", "Tyrande Whisperwind", "Varo'then"]
      },
      {
        race: "Blood Elf",
        names: ["Kael'thas Sunstrider", "Lor'themar Theron", "Halduron Brightwing", "Zendarin Windrunner"]
      },
      {
        race: "Tauren",
        names: ["Baine Bloodhoof", "Cairne Bloodhoof", "Magatha Grimtotem", "Muln Earthfury"]
      },
      {
        race: "Orc",
        names: ["Grommash Hellscream", "Gul'dan", "Ner'zhul", "Orgrim Doomhammer", "Thrall"]
      },
      {
        race: "undead",
        names: ["Sylvanas Windrunner", "Galen Trollbane", "Vincent Godfrey", "Lilian Voss"]
      },
      {
        race: "Troll",
        names: ["Vol'jin", "Rokhan", "King Rastakhan", "Sen'jin"]
      },
      {
        race: "Panderaan",
        names: ["Chen Stormstout", "Taran Zhu", "Shaohao"]
      },
      {
        race: "Draenei",
        names: ["Akama", "Nobundo", "Restalaan", "Iridi"]
      }
    ]
  }

  generateName() {
    const applicableNames = this.characterNames.find(characterName => characterName.race === this.race).names;
    return applicableNames[Math.floor(Math.random() * applicableNames.length)]
  }
}