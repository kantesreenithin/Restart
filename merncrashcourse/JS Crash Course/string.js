let s = "hello";
let ts = `hello'world`;
console.log(s);
console.log(ts);

console.log(s.length);
//methods
// charAt , charCodeAt ,at , [-], -- access string char at pos
//  slice substring substring  --extract a part from string
//tolowercase,touppercase,
// concat,
// trim,trimStart,trimend,
// padstart,padend,
// repeat,replace,replaceall,split

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

// slice(start, end). - not include end
//if only one para slice rest from that para
//if two not include end para
console.log(s.slice(2));
// console.log(s)

// substring(start, end)
//not take neg values
console.log(s.substring(3));

// substr(start, length)
//same as slice but scd para will length
// console.log(s.substr(3,1))

//tolowercase touppercase
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//concat
console.log(s + ts);

// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.

// trim,trimStart,trimend, - remove whitespace

// padstart,padend,
// To pad a number, convert the number to a string first.

//repeat

// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.
console.log(s.repeat(2));

//replace
// The replace() method replaces a specified value with another value in a string:
//replace only first match
console.log(s.replace("l", "y"));
console.log(s);

//replace all
console.log(s.replaceAll("l", "y"));
console.log(s);

// can user egex with replace for other cases
//   /.../i,/.../g,

//convert string to array
//split
console.log(s.split(" "));
console.log(s.split(","));
console.log(s.split("|"));
//split in single char
console.log(s.split(""));

//reverse a string
console.log(s.split("").reverse().join(""));

//search methods
//indeof lastindexof search
//match matchall includes startswith endswith

//indexOf
// method returns the index (position) of the
// first occurrence of a string in a string,
// or it returns -1 if the string is not found:
console.log(s.indexOf("l"));

//lastIndexOf
//return last index
//if scd para then start from it
console.log(s.lastIndexOf("l"));

// Both methods accept a second parameter as the starting position for the search:

console.log(s.indexOf("l", 3));
console.log(s.lastIndexOf("l", 3));

//search methods search a str or regex
let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));
console.log(text.search(/locate/));

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

//match- return array containing res of string aga a str or regex
let txt = "The rain in SPAIN stays mainly in the plain";
console.log(txt.match("ain"));
console.log(txt.match(/ain/));
console.log(txt.match(/ain/g));
console.log(txt.match(/ain/gi));

// matchAll - return an iterator containing res of matching a str
let t = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(t.matchAll("Cats")); //rtn iteratorC
console.log(t.matchAll(/Cats/g)); //rtn iterator
console.log(t.matchAll(/Cats/gi)); //rtn iterator

//includes - rtn true if a str contain a specified val(case sensitive)
console.log(t.includes("Cats"));
console.log(t.includes("Cats", 50));

//case sensitive
//startswith
console.log(t.startsWith("I"));
console.log(t.startsWith("l"));

//scd para start from

//endswith
console.log(t.endsWith("."))
console.log(t.endsWith(","))
//


//template str -  use `` allow single double quotes and multi lines

//str interpolatin - can interpolate var and exp in string using ``strimg templates

// Automatic replacing of variables and exp with real values is called string interpolation.