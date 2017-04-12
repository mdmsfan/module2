// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// function renderShoeProperty(designer, shoeProperty) {
//   return shoeProperty.map(function(shoe){
//     return [designer, shoe.name, shoe.price].join(', '); 
//   }); 
// }

// function renderGoodsStringforDesigner(designerObject) {
//   return renderShoeProperty(designerObject.name, designerObject.shoes).join('\n')

//   function renderInventory(inventory) {
//   // your code here
//   // hint: before you just dive into coding...
//   // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
//   return inventory.map(function(designerObject){
//     return renderDesignerCollection(designerObject); 
//   }).join('/n')
// }
// function getShoeDescription(brandName, shoeDescription) {
//   return shoeDescription.map(function(shoe){
//     return [brandName, shoe.name, shoe.price].join(',' ); 
//   }); 
// }

// function renderDesignerCollection(designerObject) {
//   return getShoeDescription(designerObject.name, designerObject.shoe).join('\n');
// }
// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// console.log(renderInventory(currentInventory)); 
// }

// function renderInventory(inventory) {
//   return inventory.map(function(designerObject){
//     return renderGoodsStringforDesigner(designerObject)
//   }).join('\n')
// }


// function assertEqual (actual, expected, testName) {
//   if (actual === expected) {
//     console.log ("Passed [" + testName + "]")
//   }
//   else {
//     console.log ("Failed [" + testName + "]" + " expected " + expected + " but got " + actual)
//   }
// }

// var designerObject = currentInventory[0]
// var shoesForDesigner = renderShoeProperty(designerObject.name, designerObject.shoes);
// var actualShoeString = shoesForDesigner[0]
// console.log(shoesForDesigner)
// var expectedShoeString = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000'
// assertEqual (actualShoeString, expectedShoeString, "test to return one type of shoe string")

// function renderInventory(inventory) {
//   // your code here
//   // hint: before you just dive into coding...
//   // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
//   //input is an object; 
//   //output is a string; 
//   //you iterate through each object and output its values. 
//   //iterate through name - iterate through an array of shoes - next line - move onto next object
//   var brandDescription = ""
//   var brandParticulars = []
//   inventory.forEach(function(item){
//     for (var key in item){
//       if (Array.isArray(item[key]) === false) {
//         var brand = item[key]
//       } 
//       else if (Array.isArray(item[key]) === true){
//         var description = item[key] // description is an array consisting of objects
//         description.forEach(function(type){
//           for (var key in type) {
//             brandParticulars.push()
//           }
//         })
//       }
//     }
//   })
//   return  brandDescription; 
// } 

// var shoes = [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
    
// function getObjCont(arr) {
//   var arrOfContents = []; 

//   arr.forEach(function(element){
//     var itemContent = []
//     for (var key in element) {
//       for (var i = 0; i < arr.length; i++){
//         itemContent[i] = element[key]
//       }
//     }
//   })
// }


function renderInventory(inventory) {
  // your code here
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  return inventory.map(function(designerObject){
    return renderDesignerCollection(designerObject); 
  }).join('\n')
}

function getShoeDescription(brandName, shoeDescription) {
  return shoeDescription.map(function(shoe){
    return [brandName, shoe.name, shoe.price].join(', '); 
  });
}

function renderDesignerCollection(designerObject) {
  return getShoeDescription(designerObject.name, designerObject.shoes).join('\n')
}
var currentInventory = [
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
//console.log(renderInventory(currentInventory)); 
console.log (getShoeDescription(currentInventory[0].name, currentInventory[0].shoes))