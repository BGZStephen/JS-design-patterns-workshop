export function getClassTypes() {
  return [
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
  ]
}

export function getRaces() {
  return [
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
  ]; 
}

export function getClassLimitations() {
  return [
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
}