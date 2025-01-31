//Write a JavaScript function that reverse a number.

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));
    
//Write a JavaScript function that checks whether a passed string is palindrome or not?
 
function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}

let str1 = "madam";
let str2 = "nurses run";
let str3 = "fox";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

//Write a JavaScript function that generates all combinations of a string.  

let possibleCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}
console.log(possibleCombinations('Dog'));

//Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alpha(str) {
   return str.split('').sort().joint('');
  }

  console.log(alpha("webmaster"));

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function capitalize_First_Letter(text) {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  let text = 'the quick brown fox';
  const result = capitalize_First_Letter(text);
  console.log(result); 


  
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

function find_longest_word(str) {
    const lettersOnly = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const words = str.split(' ');  
    let longest_Word = '';

    for (let i = 0; i < words.length; i++) {

      if (words[i].length > longest_Word.length) {
        longest_Word = words[i];
      }
    }  
    
    return longest_Word;
  }

  const str = "Web Development Tutorial";
  const result = find_longest_word(str);
  console.log(result);
  

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

const cVowels = (s) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const s = "The Quick Brown Fox";
console.log(cVowels(s));

//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 


function test_prime(num) {

  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(test_prime(37));
console.log(test_prime(36)); 


//Write a JavaScript function which accepts an argument and returns the type.

/* typeof nunmber */

function getType(value) {
  const typeString = Object.prototype.toString.call(value);
  return typeString.slice(8, -1).toLowerCase();
}

console.log(getType("Hello")); 
console.log(getType(42));      
console.log(getType(true));    
console.log(getType(undefined));
console.log(getType([]));      
console.log(getType({}));      


//Write a JavaScript function which returns the n rows by n columns identity matrix.

// Define a function named identity_matrix that generates an identity matrix of size n
function identity_matrix(n) {
    
    let imatrix = [];
  
  
    for (let i = 0; i < n; i++) {
      let row = [];
  
    
      for (let j = 0; j < n; j++) {
        if (i === j) {
      
          row.push(1);
        } else {
          
          row.push(0);
        }
      }

      imatrix.push(row);
    }

    return imatrix;
  }
  
  console.log(identity_matrix(4)); 
  

//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

function Second_Greatest_Lowest(arr) {
    
    arr.sort(function(a, b) {
      return a - b;
    });
    
    
    let secondLowest = arr[1];
    
    
    let reversedArr = arr.reverse();
    let secondGreatest = reversedArr[1];
    
    return [secondLowest, secondGreatest];
  }
  console.log(Second_Greatest_Lowest([1,2,3,4,5]));
  


//Write a JavaScript function which says whether a number is perfect. 

function isPerfectNumber(number) {
    if (number <= 0) {
        return false; 
    }

    let sum = 1; 

    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            
            if (i !== number / i) {
                sum += number / i;
            }
        }
    }

    
    return sum === number;
}

console.log(isPerfectNumber(28)); 
console.log(isPerfectNumber(6));  
console.log(isPerfectNumber(12)); 



//Write a JavaScript function to compute the factors of a positive integer. 

function find_Factors(num) {
  let factors = [];

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  factors.push(num);

  return factors;
}

console.log(find_Factors(15));  
console.log(find_Factors(16));  
console.log(find_Factors(17));   
 
//Write a JavaScript function to convert an amount to coins. 

function amountTocoins(amount, coins) {
    
    if (amount === 0) {
     
      return [];
    } else {
      
      if (amount >= coins[0]) {
        
        left = (amount - coins[0]);
        
        
        return [coins[0]].concat(amountTocoins(left, coins));
      } else {
        
        coins.shift();
        return amountTocoins(amount, coins);
      }
    }
  }
  
  console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
  

//Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function calculateExponent(base, exponent) {
    
    const result = Math.pow(base, exponent);
    return result;
}

const userBase = parseFloat(prompt("Enter the base (b):"));
const userExponent = parseInt(prompt("Enter the exponent (n):"));

if (!isNaN(userBase) && !isNaN(userExponent)) {
   
    const result = calculateExponent(userBase, userExponent);

    console.log(`The result of ${userBase}^${userExponent} is: ${result}`);
} else {
    
    console.log("Invalid input. Please enter valid numeric values.");
}


//Write a JavaScript function to extract unique characters from a string. 


function extractUniqueChars(inputString) {
 
    const uniqueChars = {};

  
    for (let char of inputString) {
        
        uniqueChars[char] = true;
    }

    
    const resultString = Object.keys(uniqueChars).join('');

    return resultString;
}


const inputString = "thequickbrownfoxjumpsoverthelazydog";
const result = extractUniqueChars(inputString);


console.log(result);



//Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function countLetterOccurrences(str) {
 
  const letterOccurrences = {};
  const lowercaseStr = str.toLowerCase();


  for (let char of lowercaseStr) {
    
      if (/^[a-z]$/.test(char)) {
        
          letterOccurrences[char] = (letterOccurrences[char] || 0) + 1;
      }
  }

  return letterOccurrences;
}


const inputString = "The quick brown fox jumps over the lazy dog.";
const result = countLetterOccurrences(inputString);


console.log(result); 


//Write a function for searching JavaScript arrays with a binary search. 


function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        
        const mid = Math.floor((low + high) / 2);

        
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
    }

    return -1; 
}


const sortedArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const targetElement = 6;
const resultIndex = binarySearch(sortedArray, targetElement);

console.log(resultIndex);
 


//Write a JavaScript function that returns array elements larger than a number. 


function elementsLargerThan(arr, threshold) {
    
    const largerElements = arr.filter(element => element > threshold);
    return largerElements;
}


const inputArray = [1, 5, 8, 10, 15, 20];
const thresholdNumber = 8;
const resultArray = elementsLargerThan(inputArray, thresholdNumber);

console.log(resultArray);


//Write a JavaScript function that generates a string id (specified length) of random characters. 


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}


const idLength = 10;
const randomID = generateRandomString(idLength);

console.log(randomID);



//Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 


function getSubsetsWithLength(arr, length) {
  const result = [];

  
  function generateSubsets(currentSubset, start) {
      if (currentSubset.length === length) {
          result.push([...currentSubset]); 
          return;
      }

      for (let i = start; i < arr.length; i++) {
          currentSubset.push(arr[i]);
          generateSubsets(currentSubset, i + 1);
          currentSubset.pop();
      }
  }

  generateSubsets([], 0);
  return result;
}

const inputArray = [1, 2, 3];
const subsetLength = 2;
const resultSubsets = getSubsetsWithLength(inputArray, subsetLength);

console.log(resultSubsets);



//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function countOccurrences(str, letter) {

  const charArray = str.split('');


  const occurrencesArray = charArray.filter(char => char === letter);


  return occurrencesArray.length;
}

const inputString = 'microsoft.com';
const targetLetter = 'o';
const resultCount = countOccurrences(inputString, targetLetter);


console.log(resultCount); 

//Write a JavaScript function to find the first not repeated character. 

let str = "abacddbec";
let res = null;
for (let char of str) {
    if (
        str.indexOf(char)
        ===
        str.lastIndexOf(char)
    ) {
        res = char;
        break;
    }
}
console.log("Input: " + str);
console.log("Non-repeating character: " + res);


//Write a JavaScript function to apply Bubble Sort algorithm. 

function bubbleSortDescending(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const sampleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
const resultArray = bubbleSortDescending(sampleArray);
console.log(resultArray);

//Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 

function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


//Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function longest_substring(input) {
    let longestSubstring = "";
    let start = 0;
    let charIndexMap = {};
  
    for (let end = 0; end < input.length; end++) {
      let char = input[end];
  
      if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
        
        start = charIndexMap[char] + 1;
      }
  
      
      charIndexMap[char] = end;
  
      
      let currentSubstring = input.slice(start, end + 1);
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
    }
  
    return longestSubstring;
  }
  
 
  console.log(longest_substring("google.com")); 
  console.log(longest_substring("example.com"));
  


//Write a JavaScript function that returns the longest palindrome in a given string.


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  

  function longest_palindrome(str) {
    let maxLength = 0;         
    let longestPalindrome = ''; 
  

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substring = str.slice(i, j); 
     
        if (isPalindrome(substring) && substring.length > maxLength) {
          maxLength = substring.length;         
          longestPalindrome = substring;        
        }
      }
    }
  
    return longestPalindrome; 
  }
  

  console.log(longest_palindrome("abracadabra")); 
  console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 
  


//Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);


//Write a JavaScript function to get the function name.

function abc() {
    console.log( arguments.callee.name );
}
abc();



