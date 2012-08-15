/*
 * permute.js 1.0 - Permutation calculator
 * Copyright 2007 Scriptar.com, All Rights Reserved.
 * Author: Scriptar (scriptar@gmail.com)
 * Date: 2007-07-19 11:00:00 -0800 (Thu, 19 Jul 2007)
 * Description: The intent of this permutation generator is to
 * describe in simple terms how to change the order or arrangment of
 * the characters in a string... in other words, it's a teaching tool.
 * It employs a "hold-one-character-constant-while-rearranging-the-remaining-characters-using-a-recursive-function"
 * technique. This is by no means the "best" or "fastest" way of calculating
 * permutations (*is* there a best way?). It's sorta fast, but JavaScript
 * code is not well known for setting speed records. To understand the algorithm,
 * one should be familiar with looping, arrays, pushing, popping, and recursion.
 * If you can say, "I haven't had 'arrays' yet", well -- I haven't had a raise in
 * a while either... so go pick up a book or take a Computer Science class
 * (like CS161) and when you're done this'll all make more sense.
 */

//permArr: Global array which holds the list of permutations
//usedChars: Global utility array which holds a list of "currently-in-use" characters



function permute(input){
	var permArr = [], usedChars = [];
	function __permute(input) {
		//convert input into a char array (one element for each character)
		var i, ch, chars = input.split("");
		for (i = 0; i < chars.length; i++) {
			//get and remove character at index "i" from char array
			ch = chars.splice(i, 1);
			//add removed character to the end of used characters
			usedChars.push(ch);
			//when there are no more characters left in char array to add, add used chars to list of permutations
			if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
			//send characters (minus the removed one from above) from char array to be permuted
			__permute(chars.join(""));
			//add removed character back into char array in original position
			chars.splice(i, 0, ch);
			//remove the last character used off the end of used characters array
			usedChars.pop();
		}
	}
	__permute(input);
	return permArr;
}