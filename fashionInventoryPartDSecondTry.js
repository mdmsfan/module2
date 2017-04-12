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

//filter laces shoes
function filterLaced(shoeList) {
  return shoeList.name.filter(function(shoe){
    return shoe.indexOf('lace') !== -1
    })
  }

//transform one designer object to include only laces shoes
  function filterLacedForDesigner(designerObject) {
    return designerObject.shoes.map(filterLaced)
  }
}


  
  console.log (filterLacedForDesigner(item))