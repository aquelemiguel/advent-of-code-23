import _ from 'lodash';
const input = (await Bun.file('input/d4.in').text()).split('\n').map((r) =>
  r
    .split(':')[1]
    .split('|')
    .map((n) => n.match(/(\d+)/g)?.map((n) => parseInt(n)))
);

const ixs = input.map((card) => _.intersection(card[0], card[1]).length);

const p1 = (ixs: number[]): number => {
  return ixs
    .map((ix) => Math.floor(Math.pow(2, ix - 1)))
    .reduce((a, b) => a + b);
};

const p2 = (cards: number[]): number => {
  const occs = Array(cards.length).fill(1);

  cards.forEach((cur, i) =>
    _.range(i + 1, i + 1 + cur).forEach(
      (j) => (occs[j] = occs[j] + 1 * occs[i])
    )
  );
  return occs.reduce((a, b) => a + b);
};

console.log(p1(ixs), p2(ixs));
