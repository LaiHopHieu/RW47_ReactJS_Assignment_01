// Global Scope
var fullName = "Lại Hợp Hiếu";
function hello() {
    console.log(fullName);
}
console.log("--------------------------Global Scope------------------------");
hello();
// Funtion Scope
function helloLocalScope() {
    if (true) {
        var fullName = "Lại Hợp Hiếu";
    }
    console.log(fullName);
}
console.log("--------------------------Funtion Scope------------------------");
helloLocalScope();
// Lexical Scope
function helloStaticScope() {
    var fullName = "Lại Hợp Hiếu";
    console.log(hello());
    function hello() {
        return fullName;
    }
}
console.log("--------------------------Lexical Scope------------------------");
helloStaticScope();
