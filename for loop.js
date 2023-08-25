const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

//  for...in loop
console.log("Using for...in loop:");
for (let key in jsonObject) {
  console.log(key + ": " + jsonObject[key]);
}

// Using a for...of loop 
console.log("\nUsing for...of loop:");
try {
  for (let value of jsonObject) {
    console.log(value);
  }
} catch (error) {
  console.log("Error: " + error.message);
}

// Using Object.entries()
console.log("\nUsing Object.entries():");
for (let [key, value] of Object.entries(jsonObject)) {
  console.log(key + ": " + value);
}

// Using Object.keys()
console.log("\nUsing Object.keys():");
Object.keys(jsonObject).forEach(key => {
  console.log(key + ": " + jsonObject[key]);
});
