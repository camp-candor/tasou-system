import test from 'ava';

const asyncFunction = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('hello');
    }, 100);
  });
};

test('asynchronous test', async t => {
  const result = await asyncFunction();
  t.is(result, 'hello');
});
