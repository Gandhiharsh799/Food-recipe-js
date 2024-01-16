// import readline from 'readline'
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const recipes = [];

const display = () => {
  console.log("Food Recipe App");
  console.log("1. Add Recipe: ");
  console.log("2. Update Recipe:");
  console.log("3. Delete Recipe:");
  console.log("4. View Recipes");
  console.log("5. Exit App");
};

const addRecipe = () => {
  const name = prompt("Enter the recipe Name");
  const type = prompt("Enter the recipe type");
  const description = prompt("Enter the recipe description");

  const id = recipes.length + 1;
  const recipe = { id, name, type, description };
  recipes.push(recipe);
  console.log(`Recipe with ${id} ID added successfully...`);
};

const updateRecipe = () => {
  const idUpdate = prompt("Enter the ID of the recipe to update: ");
  const recipeUpdate = recipes.find((recipe) => recipe.id == idUpdate);

  if (recipeUpdate) {
    const newName = prompt("Enter new name for recipe: ");
    const newType = prompt("Enter new type for recipe: ");
    const newDescription = prompt("Enter new description for recipe: ");

    recipeUpdate.name = newName;
    recipeUpdate.type = newType;
    recipeUpdate.description = newDescription;

    console.log(`Recipe with ${recipeUpdate.id} ID updated successfully...`);
  } else {
    console.log(`Recipe with ${idUpdate} ID not found...`);
  }
};

const deleteRecipe = () => {
  const idToDelete = prompt("Enter the ID of the recipe to delete:");
  const recipeIndex = recipes.findIndex((recipe) => recipe.id == idToDelete);
  console.log(recipeIndex);

  if (recipeIndex !== -1) {
    recipes.splice(recipeIndex, 1);

    console.log(`Recipe with ${idToDelete} ID is deleted successfully...`);
  } else {
    console.log(`Recipe with ${idToDelete} ID not found...`);
  }
};

const viewRecipe = () => {
  console.clear();
  let count = 1;
  if (recipes.length === 0) {
    console.log("No recipes available");
  } else {
    console.log("\nALl Recipes: ");
    recipes.forEach((recipe) => {
      recipe.id = count;
      count++;
      console.log(
        `ID: ${recipe.id}, Name: ${recipe.name}, Type: ${recipe.type}, Description: ${recipe.description}`
      );
    });
  }
};

const userChoice = () => {
  const choice = prompt("Enter your choice (1-5):");

  switch (choice) {
    case "1":
      addRecipe();
      break;
    case "2":
      updateRecipe();
      break;
    case "3":
      deleteRecipe();
      break;
    case "4":
      viewRecipe();
      break;
    case "5":
      console.log("Exiting the Food Recipe app...");
      return false;
    default:
      console.log("Invalid choice... Write a number between 1 - 5 ?");
  }
  return true;
};
let flag = 1;

while (flag) {
  display();
  flag = userChoice();
  //   if (prompt("Do you want to continue? (yes/no)") !== "yes") {
  //     break;
  //   }
}

// console.log(display());
// console.log(userChoice());
