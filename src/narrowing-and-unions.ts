interface Fruit {
  juicy: boolean;
  variant: "fruit"; // discriminant
}

interface Fungi {
  poisonous: boolean;
  variant: "fungi";
}

interface Vegetable {
  dirty: boolean;
  variant: "vegetable"; // discriminant
}

type Food = Fruit | Fungi | Vegetable;

function logFood(food: Food) {
  food.variant;
  //   ^?

  switch (food.variant) {
    case "fruit":
      //
      food.variant;
      //   ^?
      break;
    case "fungi":
      food.variant;
      //   ^?
      // ...
      break;
    case "vegetable":
      // ...
      food.variant;
      //   ^?
      break;
  }

  if (food.variant === "fruit") {
    food;
    // ^?

    console.log("My fruit is", food.juicy);
  } else if (food.variant === "fungi") {
    // ...
  } else {
    food.variant;
    //    ^?
    console.log("My vegetable is", food.variant);
  }
}

let myFruit: Fruit;

myFruit = { juicy: true, variant: "fruit" };

logFood({ juicy: true, variant: "fruit" });
logFood({ name: "apple", variant: "fruit" });
