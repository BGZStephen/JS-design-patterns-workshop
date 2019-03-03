export function getStartingWeapon(classType: string): string {
  console.log(classType)
  const weaponMappings = [
    {class: "Warrior", weapon: "Greataxe"},
    {class: "Rogue", weapon: "Sword"},
    {class: "Paladin", weapon: "Sword"},
    {class: "Druid", weapon: "Staff"},
    {class: "Shaman", weapon: "Staff"},
    {class: "Priest", weapon: "Staff"},
    {class: "Death Knight", weapon: "Greataxe"},
    {class: "Demon Hunter", weapon: "Sword"},
    {class: "Hunter", weapon: "Bow"},
    {class: "Mage", weapon: "Staff"},
    {class: "Warlock", weapon: "Staff"},
    {class: "Monk", weapon: "Staff"},
  ]

  return weaponMappings.find(weaponMapping => weaponMapping.class === classType).weapon;
}