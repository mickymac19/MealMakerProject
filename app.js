const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
},
    get appetizers() {
      return this._courses.appetizers;
      
},
    get mains() {
      return this._courses.mains;
},
    get desserts() {
      return this._courses.desserts;
},
    set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
},
    set mains(mains) {
    this._courses.mains = mains;
},
    set desserts(desserts) {
    this._courses.desserts = desserts;
 },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
addDishToCourse(courseName, dishName, dishPrice) {
   const dish = {
     name: dishName,
     price: dishPrice,
   };
   return this._courses[courseName].push(dish);
  },
 getRandomDishFromCourse(courseName) {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random()* dishes.length);
   return dishes[randomIndex];
 },
generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price
  return `Your meal is ${appetizer.name}, ${main.name}, and 
  ${dessert.name}, and the total price is ${totalPrice}`;

  }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Potato Salad', 5.25);
menu.addDishToCourse('appetizers', 'Shrimp Salad', 6.25);

menu.addDishToCourse('mains', 'Spareribs', 15.25);
menu.addDishToCourse('mains', 'Lobster', 25.25);
menu.addDishToCourse('mains', 'Tenderloin', 17.25);

menu.addDishToCourse('desserts', 'Chocolate icecream', 3.25);
menu.addDishToCourse('desserts', 'Tiramisu', 6.25);
menu.addDishToCourse('desserts', 'Cheesecake', 5.25);

const meal = menu.generateRandomMeal();
console.log(meal);

