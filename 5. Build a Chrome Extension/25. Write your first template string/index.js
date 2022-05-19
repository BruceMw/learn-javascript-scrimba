// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
var email = "Hey " + recipient + "! How is it going? Cheers Per"
var email = `Hey ${recipient}! how is it going cheers Per`

console.log(email)