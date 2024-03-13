let personName = "maria khan";

//lowercase
console.log(personName.toLowerCase());

//uppercase
console.log(personName.toUpperCase());

//titlecase
console.log(personName.replace(/\b\w/g, (c) => c.toUpperCase()));