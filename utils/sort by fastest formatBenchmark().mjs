var d = console.debug.bind(console)
export default (that) => {
  const arrOfObj = []
  iterateObjectAsArray(that, (value) => {
    arrOfObj.push({
      name: value.name,
      hz: value.hz,
      rme: value.stats.rme,
      samples: value.stats.sample.length,
    })
  })

  arrOfObj.sort(dynamicSort('-hz'))

  const genStrArr = []
    , nameLenghts = []
    , hzLenghts = []
    , rmeLenghts = []
  let nameMaxLen = 0
    , hzMaxLen = 0
    , rmeMaxLen = 0

  for (let i = 0, len = arrOfObj.length; i < len; i++) {
    const obj = arrOfObj[i]
      , name = obj.name
      , hz = Math.round(obj.hz)
      , commaHz = hz.toLocaleString()
      , rme = obj.rme.toFixed(2)
      , samples = obj.samples
      , nameLenght = name.length
      , hzLenght = commaHz.length
      , rmeLenght = rme.length

    nameMaxLen = Math.max(nameLenght, nameMaxLen)
    hzMaxLen = Math.max(hzLenght, hzMaxLen)
    rmeMaxLen = Math.max(rmeLenght, rmeMaxLen)

    nameLenghts.push(nameLenght)
    hzLenghts.push(hzLenght)
    rmeLenghts.push(rmeLenght)
    
    genStrArr.push((nameLenght, hzLenght, rmeLenght) => {
      return name + ' '.repeat(nameLenght) + ' x ' + ' '.repeat(hzLenght) + hz.toLocaleString() + ' ops/sec ±' + rme + '% '+ ' '.repeat(rmeLenght) + '(' + samples + ' runs sampled)'
    })

  }

  // let retArr = []

  for (let i = 0, len = arrOfObj.length; i < len; i++) {
    let genStr = genStrArr[i]
    d(genStr(nameMaxLen - nameLenghts[i], hzMaxLen - hzLenghts[i], rmeMaxLen - rmeLenghts[i]))
    // retArr.push(genStr(nameMaxLen - nameLenghts[i], hzMaxLen - hzLenghts[i]))
  }
  // return retArr
}

function dynamicSort(property) {
  var sortOrder = 1
  if (property[0] === "-") {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a, b) {
    /* next line works with strings and numbers, 
     * and you may want to customize it to your needs
     */
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result * sortOrder
  }
}

function iterateObjectAsArray(obj, callback) {
  let i = 0
  while (i in obj) {
    callback(obj[i])
    i++
  }
  return
}