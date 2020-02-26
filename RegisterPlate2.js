const RegisterPlate = function (registerNumber) { this.rnumber=registerNumber;};
const display = function(platenumber) { console.log(platenumber) };
let MyRegisterPlate = new RegisterPlate("abc123");
display(MyRegisterPlate.rnumber);