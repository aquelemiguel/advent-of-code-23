const input = (await Bun.file('input/d1.in').text()).split('\n');
const d = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const reg = new RegExp(d.join('|'), 'gi');

const replace = (str: string): string => {
  if (!str.match(reg)) {
    return str;
  }
  return replace(str.replace(reg, (x) => x[0] + (d.indexOf(x) + 1) + x.at(-1)));
};

const calibrate = (str: string) => {
  const x = str
    .split('')
    .map((c) => parseInt(c))
    .filter(Number);
  return parseInt(`${x[0]}${x.at(-1)}`);
};

const p1 = input.map((x) => calibrate(x)).reduce((acc, x) => acc + x);
const p2 = input.map((x) => calibrate(replace(x))).reduce((acc, x) => acc + x);
console.log(p1, p2);
