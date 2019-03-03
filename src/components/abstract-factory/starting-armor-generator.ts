export function getStartingArmor(classType: string): string {
  const armorMappings = [
    {class: "Warrior", armor: "Plate"},
    {class: "Rogue", armor: "Leather"},
    {class: "Paladin", armor: "Plate"},
    {class: "Druid", armor: "Leather"},
    {class: "Shaman", armor: "Mail"},
    {class: "Priest", armor: "Cloth"},
    {class: "Death Knight", armor: "Plate"},
    {class: "Demon Hunter", armor: "Leather"},
    {class: "Hunter", armor: "Leather"},
    {class: "Mage", armor: "Cloth"},
    {class: "Warlock", armor: "Cloth"},
    {class: "Monk", armor: "Leather"},
  ]

  return armorMappings.find(armorMapping => armorMapping.class === classType).armor;
}