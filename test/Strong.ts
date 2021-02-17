import * as U from './util'
import * as R from '../src/Reader'
import { fanout, splitStrong } from '../src/Strong'

describe('Strong', () => {
  it('splitStrong', () => {
    const ab = (s: string) => s.length
    const cd = (n: number) => n >= 2
    // tslint:disable-next-line: deprecation
    U.deepStrictEqual(splitStrong({ ...R.Strong, ...R.Category })(ab, cd)(['foo', 2]), [3, true])
    // tslint:disable-next-line: deprecation
    U.deepStrictEqual(splitStrong({ ...R.Strong, ...R.Category })(ab, cd)(['a', 1]), [1, false])
  })

  it('fanout', () => {
    const ab = (s: string) => s.length
    const ac = (s: string) => s === s.toLowerCase()
    // tslint:disable-next-line: deprecation
    U.deepStrictEqual(fanout({ ...R.Strong, ...R.Category })(ab, ac)('foo'), [3, true])
    // tslint:disable-next-line: deprecation
    U.deepStrictEqual(fanout({ ...R.Strong, ...R.Category })(ab, ac)('A'), [1, false])
  })
})
