const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  ratings: [4, 5, 4, 5],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breasts",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  ratings: [4, 5, 5, 5],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

const getAverageRating = (arr) => {
  return (arr[0] + arr[1] + arr[2] + arr[3]) / arr.length;
};

const getTotalIngredients = (arr) => arr.length;

const getDifficultyLevel = (num) => {
  if (num <= 30) {
    return "easy";
  } else if (num <= 60) {
    return "medium";
  } else {
    return "hard";
  }
};

const recipe1Name = recipe1.name;
const recipe2Name = recipe2["name"];
const recipe1CookingTime = recipe1.cookingTime;
const recipe2CookingTime = recipe2["cookingTime"];

console.log(
  `recipe1 name: ${recipe1Name}, cooking time: ${recipe1CookingTime}`
);
console.log(
  `recipe2 name: ${recipe2Name}, cooking time: ${recipe2CookingTime}`
);
console.log("");

// Push the three recipes into the recipes array
recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);

console.log("recipe1 average rating:", getAverageRating(recipe1.ratings));
console.log("recipe2 average rating:", getAverageRating(recipe2.ratings));
console.log("recipe3 average rating:", getAverageRating(recipe3.ratings));
console.log("");

console.log(
  "recipe1 total ingredients:",
  getTotalIngredients(recipe1.ingredients)
);
console.log(
  "recipe2 total ingredients:",
  getTotalIngredients(recipe2.ingredients)
);
console.log(
  "recipe3 total ingredients:",
  getTotalIngredients(recipe3.ingredients)
);
console.log("");

const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.difficultyLevel);

console.log("recipe1 average rating:", recipe1AverageRating);
console.log("recipe1 total ingredients:", recipe1TotalIngredients);
console.log("recipe1 difficulty level:", recipe1DifficultyLevel);
console.log("");

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1["difficultyLevel"] = getDifficultyLevel(recipe1.difficultyLevel);

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2["difficultyLevel"] = getDifficultyLevel(recipe2.cookingTime);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);
