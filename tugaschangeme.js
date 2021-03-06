function changeMe (arr) {
  // you can only write your code here!

  for (var i = 0; i < arr.length; i++) {
    var myObj = {}
    myObj.firstName = arr[i][0]
    myObj.lastName = arr[i][1]
    myObj.gender = arr[i][2]
    if (arr[i][3] === undefined) {
      myObj.age = 'Invalid Birth Year'
    } else {
      myObj.age = 2018 - arr[i][3]
    }
    console.log(myObj)
  }
}

// TEST CASES
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
]) // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]) // ""
