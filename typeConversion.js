/*
    In programming, type conversion is the process of converting data of one type to another.
    For example, converting string data to number.

    There are two types of type conversion in JavaScript:

    Implicit Conversion - Automatic type conversion.
    Explicit Conversion - Manual type conversion.
*/


/* ===== IMPLICIT TYPE (Coersion) ========*/

// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result)); // Converts the number 2 to string and joins it to "3", resulting in the string

result = "3" + true; 
console.log(result, "-", typeof(result)); // Converts the boolean true to string and joins it to "3", resulting in the string "3true"

result = "3" + null; 
console.log(result, "-", typeof(result)); // Converts null to string and joins it to "3", resulting in the string "3null"

// Output

// 32 - string
// 3true - string
// 3null - string


/* ===== EXPLICIT TYPE (type casting)========*/

let result1;

// convert string to number
result1 = Number("5");
console.log(result1, "-", typeof(result1));

// convert boolean to string
result1 = String(true);
console.log(result1, "-", typeof(result1));

// convert number to boolean
result1 = Boolean(0);
console.log(result1, "-", typeof(result1));

// Output

// 5 - number
// true - string
// false - boolean


//**************** TYPE COERSION VS TYPE CONVERSION ************** */

/*Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers)

Type conversion is similar to type coercion because they both convert values from one data type
to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
*/
