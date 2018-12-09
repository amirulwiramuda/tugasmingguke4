function cariMedian (arr) {
  // you can only write your code here!
  var tengah = (arr.length - 1) / 2
  var tengahtengah = Math.floor(tengah)
  var tengahtengahtengah = tengahtengah + 1
  if (tengah % 2 === 0) {
    return arr[tengah]
  } else {
    return (arr[tengahtengah] + arr[tengahtengahtengah]) / 2
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])) // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])) // 7
console.log(cariMedian([3, 4, 7, 6, 10])) // 7
console.log(cariMedian([1, 3, 3])) // 3
console.log(cariMedian([7, 7, 8, 8])) // 7.5
