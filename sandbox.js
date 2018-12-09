// function bingkai(panjang, lebar) {
//   var temp = []
//   for (var i = 0; i < panjang; i++) {
//     temp = []
//     for (var j = 0; j < lebar; j++) {
//       if (i === 0 || i === panjang - 1) {
//         temp.push('x')
//       } else if (j === 0 || j === lebar - 1) {
//         temp.push('x')
//       } else {
//         temp.push('o')
//       }
//     }
//     console.log(temp)
//   }
// }

function bingkai (panjang, lebar) {
  var temp = [];
  for (var i = 0; i < panjang; i++) {
    temp = [];
    for (var j = 0; j < lebar; j++) {
      temp.push ([i, j]);
    }
    console.log (temp);
  }
}

// function bingkai (panjang, lebar) {
//   var temp = [];
//   var panjang = panjang + 2;
//   var lebar = lebar + 2;
//   for (var i = 0; i < panjang; i++) {
//     temp = [];
//     for (var j = 0; j < lebar; j++) {
//       temp.push (['*']);
//     }
//     console.log (temp);
//   }
// }
console.log (bingkai (5, 5));
