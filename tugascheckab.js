function checkAB(num) {
  // you can only write your code here!

  var tampstr = []
  var jarak = 3
  var counter = 0
  var tampungcounter = 0
  var flag = false

  for (var i = 0; i < num.length; i++) {
    tampstr.push(num[i])
    counter += 1
    if (num[i] === 'a') {
      tampungcounter = counter
      counter = 0
      if (num[tampungcounter + jarak] === 'b' || num[tampungcounter - jarak] === 'b') {
        flag = true
      } else {
        flag = false
      }
    }
  }
  return flag
}

// TEST CASES
console.log(checkAB('lane borrowed')) // true
console.log(checkAB('i am sick')) // false
console.log(checkAB('you are boring')) // true
console.log(checkAB('barbarian')) // true
console.log(checkAB('bacon and meat')) // false