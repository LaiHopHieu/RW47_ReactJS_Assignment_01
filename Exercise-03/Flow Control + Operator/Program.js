var chars = ["a", "b", "c", "d", "e"];
for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
    var char = chars_1[_i];
    console.log(char);
}
console.log("--------------------Index-------------------");
for (var i = 0; i < chars.length; i++) {
    console.log("Element at index ".concat(i, " is ").concat(chars[i]));
}
console.log("--------------------Value-------------------");
chars.forEach(function (course, index) {
    console.log("index:  " + index + " - value: " + course);
});
