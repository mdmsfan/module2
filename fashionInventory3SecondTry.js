// This is a variation of the "Fashion Inventory" problem.

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

// Now find all the black shoes. It's the same output as part 1, but filtered to only shoe names that contain "black" in them.

// Brunello Cucinelli,tasselled black low-top lace-up,1000
// Gucci,black leather laced sneakers,900

// Write your own unit tests.

function filterBlackShoes(shoeList) {
  return shoeList.filter(function(shoe){
    return shoe.name.indexOf('black') !== -1;
  });
}

function renderInventoryBlack(inventory) {
  return inventory.map(renderBlackCollection).join('\n'); 
}

function getBlackInventoryArray (designerstr, descriptionArr) {
  var blackItems = filterBlackShoes(descriptionArr); 
  return blackItems.map(function(shoe){
    return [designerstr, shoe.name, shoe.price].join(', ')
  }); 
}

function renderBlackCollection(designerObject){
  return getBlackInventoryArray(designerObject.name, designerObject.shoes).join('\n')
}

console.log (renderInventoryBlack(inventory))