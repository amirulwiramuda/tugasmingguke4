function urutkanAbjad (str) {
  var deret = 'abcdefghijklmnopqrstuvwxyz'
  var temp = ''
  for (var i = 0; i < deret.length; i++) {
    for (var j = 0; j < str.length; j++) {
      //   temp.push([abjad[i], j])
      if (deret[i] === str[j]) {
        temp += deret[i]
      }
    }
  }
  return temp
}

// TEST CASES
console.log(urutkanAbjad('hello')) // 'ehllo'
console.log(urutkanAbjad('truncate')) // 'acenrttu'
console.log(urutkanAbjad('developer')) // 'deeeloprv'
console.log(urutkanAbjad('software')) // 'aeforstw'
console.log(urutkanAbjad('aegis')) // 'aegis'
