let obj = {
  get propName(): number {
    return this.volume;
  },

  set propName(value: number) {
    obj.volume = value;
  },
  volume: 2,
};

console.log(obj.propName + 5);

obj.propName = 4;

console.log(obj.propName);
