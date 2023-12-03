const input = (await Bun.file('input/d2.in').text()).split('\n');
const colors: { [key: string]: number } = { red: 12, green: 13, blue: 14 };

const isPullInvalid = (pull: [number, string]): boolean => {
  return pull[0] > colors[pull[1]];
};

const games: [number, string][][] = input.map((x) =>
  [...x.matchAll(/(\d+)\s(red|green|blue)/g)].map((x) => [parseInt(x[1]), x[2]])
);

const p1 = () => {
  const valids = games
    .map((g, i) => (g.some((p) => isPullInvalid(p)) ? NaN : i + 1))
    .filter(Number);
  return valids.reduce((a, b) => a + b, 0);
};

const p2 = () => {
  const maxes = games.map((g) =>
    ['red', 'green', 'blue'].map((color) =>
      Math.max(...g.filter((p) => p[1] === color).map((p) => p[0]))
    )
  );
  return maxes.reduce((a, b) => a + b.reduce((c, d) => c * d, 1), 0);
};

console.log(p1(), p2());
