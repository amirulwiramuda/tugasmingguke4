function shoppingTime (memberId, money) {
  // you can only write your code here!
  var message = 'Mohon maaf, toko X hanya berlaku untuk member saja'
  var secondMessage = 'Mohon maaf, uang tidak cukup'
  var listHarga = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000
  }

  var myObj = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: money
  }
  if (memberId === '' || memberId === undefined) {
    return message
  } else if (money < 50000) {
    return secondMessage
  } else {
    for (var key in listHarga) {
      if (myObj.changeMoney >= listHarga[key]) {
        myObj.listPurchased.push(key)
        myObj.changeMoney -= listHarga[key]
      }
    }
    return myObj
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000))
// { memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000))
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)) // Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)) // Mohon maaf, uang tidak cukup
console.log(shoppingTime()) /// /Mohon maaf, toko X hanya berlaku untuk member saja
