var chars: string[] = ["a","b","c","d","e"];

console.log("--------------------Index-------------------");
for(let i=0; i<chars.length; i++) {
    console.log(`Element at index ${i} is ${chars[i]}`);
  }

console.log("--------------------Value-------------------");
  chars.forEach((course, index) => {
	console.log("index:  " + index + " - value: " + course)
});
