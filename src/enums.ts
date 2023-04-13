enum FoodVariant {
  FruityMcFruitfaceness = "FruityMcFruitfaceness",
  Fungus = "Fungus",
  Vegetable = "Vegetable",
}

// let myVariant: 'FruityMcFruitfaceness' | 'fungus' | 'vegetable'
let myVariant: FoodVariant;

myVariant = FoodVariant.Fungus;

console.log("first:", FoodVariant.FruityMcFruitfaceness);
console.log("second", FoodVariant[FoodVariant.FruityMcFruitfaceness]);
