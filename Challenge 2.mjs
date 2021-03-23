import formatBenchmark from './utils/sort by fastest formatBenchmark().mjs'

import Benchmark from 'benchmark'
import assert from 'assert'

var suite = new Benchmark.Suite;

const arr = Array.from(Array(100000).keys())
const reverse = true
// const reverse = false

// console.log(sum)
// process.exit(0)

// add tests
// 77727777 or 77877777
suite
  .add('repeat yourself', function () {
    let sum = 0
    if (reverse) {
      sum += sum + 77777777
      for (let i = arr.length - 1; i > -1; i--) {
        sum = arr[i] - sum
      }
    } else {
      for (let i = 0, len = arr.length; i < len; i++) {
        sum = arr[i] - sum
      }
      sum += sum + 77777777
    }
    assert(sum === 77727777)
  })
  .add('magic', function () {
    //your stuff here
    assert(sum === 77727777)
  })

  // add listeners
  .on('complete', function () {
    formatBenchmark(this)
  })
  // run async
  .run({
    'async': true
  });

