//is is a variation of the "Fashion Inventory" problem.

// Please DO NOT paste code from before, however. Tackle each problem on its own.

// It's the same inventory data structure as earlier:

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

//Now output the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };

function calcAveragePrice(prices) {
  var total = 0
  prices.forEach(function(price) {
    total += price; 
  }); 
  return total / prices.length; 
}

function renderAveragePrice(inventory) {
  return {
    designers: inventory.map(renderAveragePerDesigner)
  }

function renderAveragePerDesigner(designerObject) {
  return {
    name: designerObject.name, 
    averagePrice: calcAveragePrice(getShoePrices(designerObject)) 
    }
  }
}

function getShoePrices(designerObject) {
  return designerObject.shoes.map(function(shoe){
    return shoe.price; 
  });
}
console.log(renderAveragePrice(inventory))


