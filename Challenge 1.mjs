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
// -50000 or 50000
suite
  .add('repeat yourself', function () {
    let sum = 0
    if (reverse) {
      for (let i = arr.length - 1; i > -1; i--) {
        sum = arr[i] - sum
      }
    } else {
      for (let i = 0, len = arr.length; i < len; i++) {
        sum = arr[i] - sum
      }
    }
    assert(sum === -50000)
  })
  .add('magic', function () {
    //your stuff here
    assert(sum === -50000)
  })

  // add listeners
  .on('complete', function () {
    formatBenchmark(this)
  })
  // run async
  .run({
    'async': true
  });

