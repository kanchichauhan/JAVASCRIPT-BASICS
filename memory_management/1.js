//  Everything in javascript happens inside the `execution context`
//  Js IS SINGLE THREADED LANGUAGE


/*
1. there are 2 components in execution context, memory and code component
    - memory component contains values in key value pair
    - code is executed (one by one line) in code component

(variable env)  (thread of execution)
__________________________________
|    Memory     | Code Component |
|_______________|________________|
|  key: value   | :------------: |
|  a: 10        | :------------: |
|  Fn: {...}    | :------------: |
|               | :------------: |
|_______________|________________|


*/

/* whe we run our JS program an EXECUTION CONTEXT is created
    in copy
*/