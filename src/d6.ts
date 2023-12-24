import _ from 'lodash';

const input = (await Bun.file('input/d6.in').text()).match(/(\d+)/g)!;

const attempt = (races: number[][]): number => {
  const valid = races.map(([time, record]) =>
    _.range(time)
      .map((t) => (time - t - 1) * (t + 1))
      .filter((x) => x > record)
  );
  return valid.map((x) => x.length).reduce((a, b) => a * b);
};

const p1 = () => {
  const arr = input.map((v) => parseInt(v));
  const races = _.zip(..._.chunk(arr, arr.length / 2)) as number[][];
  return attempt(races);
};

const p2 = () => {
  const races = _.chunk(input, input.length / 2).map((c) =>
    parseInt(c.join(''))
  );
  return attempt([races]);
};

console.log(p1(), p2());
