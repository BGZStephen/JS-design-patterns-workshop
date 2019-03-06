interface IArmorStats {
  name: string;
  type: string;
  level: number;
  rarity: string;
  armorValue: number;
}

export class ArmorFactory {
  private type: string;
  private name: string;
  private level: number;
  private rarity: string;
  private armorValue: number;
  private armorMinimums: {type: string, value: number}[];
  private multipliers: {rarity: string, value: number}[];

  constructor(armorType: string) {
    this.type = armorType;

    this.armorMinimums = [
      {type: "Cloth", value: 5},
      {type: "Leather", value: 15},
      {type: "Mail", value: 8},
      {type: "Plate", value: 12},
    ];

    this.multipliers = [
      {rarity: "Basic", value: 1},
      {rarity: "Rare", value: 2},
      {rarity: "Epic", value: 5},
      {rarity: "Legendary", value: 10},
    ];

    this.setArmorRarity();
    this.setArmorLevel();
    this.setArmorValue();
    this.setArmorName();
  }

  setArmorRarity() {
    const rarities = [
      "Basic",
      "Rare",
      "Epic",
      "Legendary",
    ]

    this.rarity = rarities[Math.floor(Math.random() * 4)];
  }
  
  setArmorLevel() {
    this.level = Math.floor(Math.random() * (10 * this.multipliers.find(multiplier => multiplier.rarity === this.rarity).value) + 1);
  }

  setArmorName() {
    this.name = `${this.rarity} ${this.type} armor`;
  }

  setArmorValue() {
    const armorMinimum = this.armorMinimums.find((armorMinimum => armorMinimum.type === this.type)).value;
    const armorMinimumMultiplier = this.multipliers.find(multiplier => multiplier.rarity === this.rarity).value

    this.armorValue = Math.floor(Math.random() * (armorMinimum * armorMinimumMultiplier) + 1 + (this.level * 2));
  }

  getArmor(): Armor {
    return new Armor(
      this.name,
      this.type,
      this.level,
      this.rarity,
      this.armorValue,
    )
  }
}

export class Armor {
  private name: string;
  private type: string;
  private level: number;
  private rarity: string;
  private armorValue: number;
  constructor(name: string, type: string, level: number,rarity: string, armorValue: number) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.rarity = rarity;
    this.armorValue = armorValue;
  }

  public getStats(): IArmorStats {
    return {
      name: this.name, 
      type: this.type,
      level: this.level, 
      rarity: this.rarity, 
      armorValue: this.armorValue,
    };
  }
}