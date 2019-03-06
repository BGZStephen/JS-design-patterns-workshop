export interface IWeaponStats {
  name: string;
  type: string;
  level: number;
  rarity: string;
  minDamage: number;
  maxDamage: number;
}

export class WeaponFactory {
  private type: string;
  private name: string;
  private level: number;
  private rarity: string;
  private minDamage: number;
  private maxDamage: number;
  private weaponMinimums: {type: string, value: number}[];
  private multipliers: {rarity: string, value: number}[];

  constructor(weaponType: string) {
    this.type = weaponType;

    this.weaponMinimums = [
      {type: "Sword", value: 5},
      {type: "Greataxe", value: 15},
      {type: "Bow", value: 8},
      {type: "Staff", value: 12},
    ];

    this.multipliers = [
      {rarity: "Basic", value: 1},
      {rarity: "Rare", value: 2},
      {rarity: "Epic", value: 5},
      {rarity: "Legendary", value: 10},
    ];

    this.setWeaponRarity();
    this.setWeaponLevel();
    this.setWeaponMinDamage();
    this.setWeaponMaxDamage();
    this.setWeaponName();
  }

  setWeaponRarity() {
    const rarities = [
      "Basic",
      "Rare",
      "Epic",
      "Legendary",
    ]

    this.rarity = rarities[Math.floor(Math.random() * 4)];
  }
  
  setWeaponLevel() {
    this.level = Math.floor(Math.random() * (10 * this.multipliers.find(multiplier => multiplier.rarity === this.rarity).value) + 1);
  }

  setWeaponName() {
    this.name = `${this.rarity} ${this.type}`;
  }

  setWeaponMinDamage() {
    const weaponMinimum = this.weaponMinimums.find((weaponMinimum => weaponMinimum.type === this.type)).value;
    const weaponMinimumMultiplier = this.multipliers.find(multiplier => multiplier.rarity === this.rarity).value

    this.minDamage = Math.floor(Math.random() * (weaponMinimum * weaponMinimumMultiplier) + 1 + (this.level * 2));
  }

  setWeaponMaxDamage() {
    const weaponMaximum = this.weaponMinimums.find((weaponMinimum => weaponMinimum.type === this.type)).value;
    const weaponMaximumMultiplier = (this.multipliers.find(multiplier => multiplier.rarity === this.rarity).value * 2)

    this.maxDamage = Math.floor(Math.random() * (weaponMaximum * weaponMaximumMultiplier)) + this.minDamage + (this.level * 2);
  }

  getWeapon(): Weapon {
    return new Weapon(
      this.name,
      this.type,
      this.level,
      this.rarity,
      this.minDamage,
      this.maxDamage,
    )
  }
}

export class Weapon {
  private name: string;
  private type: string;
  private level: number;
  private rarity: string;
  private minDamage: number;
  private maxDamage: number;
  constructor(name: string, type: string, level: number,rarity: string, minDamage: number, maxDamage: number) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.rarity = rarity;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
  }

  public getStats(): IWeaponStats {
    return {
      name: this.name, 
      type: this.type,
      level: this.level, 
      rarity: this.rarity, 
      minDamage: this.minDamage, 
      maxDamage: this.maxDamage,
    };
  }
}