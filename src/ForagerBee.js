class ForagerBee extends Bee {
  constructor (age, job, treasureChest, canFly) {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.treasureChest = [];
    this.canFly = true;
  }

  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
