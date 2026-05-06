const employId = 1001
let employEmail = "rishu@anyone.com"
var emmployPassword = "653214"
employCity = "Mirzapur"
let employState;


// do not prefer to use var in js because of its block scope and functional scope

console.log(employId);

employEmail = "milu@anyone.com"
emmployPassword = "654321"
employCity = "prayagraj"

// to call multiple values we use....

console.table([employId, employEmail, emmployPassword, employCity, employState])
