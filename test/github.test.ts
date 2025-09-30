import test from 'ava';
import State from '../000.mythos/99.core/state';
import { ListGithub, ReadGithub } from '../000.mythos/85.github.unit/github.action';
import GithubBit from '../000.mythos/85.github.unit/fce/github.bit';

/*
test.cb('listGithub action should fetch a list of files', t => {
  const state = new State();

  const bit: GithubBit = {
    idx: "list-github",
    slv: (res: any) => {
      t.true(Array.isArray(res.gitBit.lst));
      t.end();
    }
  };

  state.dispatch(new ListGithub(bit));
});
*/

test('readGithub action should fetch file content', async t => {
  const state = new State();

  return new Promise((resolve, reject) => {
    const bit: GithubBit = {
      idx: "read-github",
      src: "https://github.com/elliotbradly/mythos.tattoo/blob/main/src/data/post/cihli.md",
      slv: (res: any) => {
        t.is(res.gitBit.idx, "read-github");
        t.true(typeof res.gitBit.dat === 'string');
        t.true(res.gitBit.dat.length > 0);
        resolve();
      }
    };

    state.dispatch(new ReadGithub(bit));
  });
});
