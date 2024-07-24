/*
=====>>  use strict ????

1. Eliminates Silent Errors: Converts many silent errors into throw errors. For instance, assigning
    to an undeclared variable will throw an error in strict mode.

    "use strict";
    x = 3.14;  // ReferenceError: x is not defined

2. Prevents Accidental Globals: In non-strict mode, assigning a value to an undeclared variable creates
    a global variable. Strict mode prevents this.

    "use strict";
    function myFunction() {
        y = 3.14;  // ReferenceError: y is not defined
    }

3. Fixes this in Functions: In strict mode, this remains undefined in functions that are called without
    an explicit receiver, instead of defaulting to the global object.

    "use strict";
    function myFunction() {
        console.log(this);  // undefined, not the global object
    }
    myFunction();

4. Disallows Duplicates: Disallows duplicate parameter names in functions.

    "use strict";
    function myFunction(a, a, b) {
        // SyntaxError: Duplicate parameter name not allowed in this context
    }

5. Makes Eval Safer: eval does not introduce new variables into the surrounding scope.
    Variables and functions declared inside eval are not accessible outside of eval.

    "use strict";
    eval("var x = 2;");
    console.log(x);  // ReferenceError: x is not defined

6. Throws Error on Invalid Deletions: It throws an error when trying to delete non-deletable properties.

    "use strict";
    delete Object.prototype;  // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

7. Prevents Using Reserved Words: Strict mode reserves certain words for future versions
    of ECMAScript. Using these reserved words as variable names or function names will throw an error.

    "use strict";
    var let = 1;  // SyntaxError: Unexpected strict mode reserved word

8. Disallows Octal Syntax: Octal syntax is not allowed in strict mode.

    "use strict";
    var x = 010; 


=====>>  Why use strict ?????

The "use strict" directive in JavaScript is used to enable strict mode, a way to opt
into a restricted variant of JavaScript that improves performance and helps catch common coding errors.
Here are the main reasons for using "use strict":

1. Error Prevention: Strict mode catches common coding mistakes and throws errors.
    For example, it prevents the use of undeclared variables, which can help avoid bugs that are difficult to debug.

2. Safer Code: It disables features that are considered unsafe or poorly designed. For instance,
    strict mode does not allow the use of with statements, which can make code difficult to understand and debug.

3. Enhanced Performance: Some JavaScript engines can optimize strict mode code better than non-strict mode code.
    This can lead to better performance of the code.

4. Preventing Global Variables: In non-strict mode, assigning a value to an undeclared variable
    automatically creates a global variable. Strict mode prevents this, helping to avoid accidental
    global variable creation.

5. Reserved Keywords: Strict mode reserves certain keywords for future use in ECMAScript standards,
    which helps future-proof the code.

6. Secure JavaScript: Strict mode can prevent certain actions that are considered problematic,
    like deleting properties that are not deletable.
*/