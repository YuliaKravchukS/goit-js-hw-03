'use strict';


function slugify(title) {
  let title1 = title;
  title1 = title1.replaceAll('  ', ' ');
  title1 = title1.replaceAll('  ', ' ');
  title1 = title1.replaceAll('  ', ' ');
  title1 = title1.replaceAll('  ', ' ');
  title1 = title1.replaceAll('  ', ' ');
   const argumentsToLower = title1.trim().toLowerCase();

    const args = argumentsToLower.split(' ');
   return  args.join('-');
  
}

console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 

