console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/

//let mytraits = ['Rohit', 'Repu', 'Yes','2','Biryani','Sambar','Kheer'];
const me = {
  // TODO - add properties here
  firstName: 'Rohit',
  lastName: 'Repu',
  hasSiblings: true,
  shoeCount: 2,
  favThreeFoods: [
    ["FirstfavFood",'Biryani'],
    ["SecondfavFood",'Sambar'],
    ["ThirdfavFood",'Kheer']
  ]
};
console.log('%c A little about me:','font-weight:bold');
console.log('My First Name is: '+me.firstName.toUpperCase());
console.log('My Last Name is: '+me.lastName.toUpperCase());
console.log('Do I have Sibilings: '+me.hasSiblings);
console.log('My Shoe Count is: '+me.shoeCount);
console.log('My Three Favorite foods are:');
console.log(me.favThreeFoods[0][1]);
console.log(me.favThreeFoods[1][1]);
console.log(me.favThreeFoods[2][1]);
console.log('\n');

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName;
fullName = me.firstName + ' ' + me.lastName;
console.log('My Full Name is: ',fullName);
console.log('\n');

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('My First Favotite Food is:');
console.log(me.favThreeFoods[0][1]);
console.log('My Last Favotite Food is:');
console.log(me.favThreeFoods[2][1]);
console.log('\n');


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('My shoe count:', me.shoeCount);
let newShoeCount = me.shoeCount + 1;
me.shoeCount = newShoeCount;
console.log('My new shoe count:', me.shoeCount);
console.log('\n');

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

console.log('My attributes with my Favorite Color:');
let favColor = "Red";
me['favoriteColor'] =  favColor;
console.log(me);
