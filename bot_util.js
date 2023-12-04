import { resolve, relative, sep } from 'path';
import { readdir, stat } from 'fs/promises';

async function* getFiles(rootPath) {
  const fileNames = await readdir(rootPath);
  for (const fileName of fileNames) {
    const path = resolve(rootPath, fileName);
    if ((await stat(path)).isDirectory()) {
      yield* getFiles(path);
    } else {
      yield relative('', path).replaceAll(sep, "/");
    }
  }
}

async function reduce(asyncIter, f, init) {
  let res = init;
  for await (const x of asyncIter) {
    res = f(res, x);
  }
  return res;
}

export const getFilesArray = folder => reduce(getFiles(folder), (a, x) => (a.push(x), a), []);