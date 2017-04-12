// This is a variation of the "Fashion Inventory" problem.

// Please DO NOT paste code from before, however. Tackle each problem on its own.

// It's the same inventory data structure:

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

// The task now is to find all the laced shoes. Output shoe names that contain "lace" in them, and indicate which word contains "lace".

// The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

// function filterLaced(designerObject) {
//   designerObject.shoes
// }

function filter(str) {
  var array = str.split(' '); 
  var obj = {}
  var filteredArray = []
  var indexPosition
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf('lace') !== -1) {
      filteredArray = array; 
      indexPosition = i; 
      }
      obj = {
      nameWords: filteredArray, 
      targetWordIndex: indexPosition
    }
  }
  return obj
}


function applyFilter(inventory) {
  var filteredInventory = []; 
  for (var i = 0; i < inventory.length; i++) {
    for (var k = 0; k < inventory[i].shoes.length; k++) {
        filteredInventory.push(filter(inventory[i].shoes[k].name))
    }
  }
  for (var i = 0; i < filteredInventory.length; i++) {
      if (filteredInventory[i].nameWords.length === 0) {
        filteredInventory.splice(i, 1);
        i = i - 1; 
      }
    }
    return filteredInventory; 
  }

  console.log(applyFilter(inventory));
 
 