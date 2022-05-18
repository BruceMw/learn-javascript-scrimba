// Create a person object that contains three keys: name, age, and county.
let personObject = {
    name: "Bruce Wayne",
    age: 30,
    country: "Gotham City"
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData(){
    console.log(personObject.name + " is " + personObject.age + " old and lives in " + personObject.country)
}
// Call the logData() function to verify that it works
logData()