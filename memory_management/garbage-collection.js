/*
// ******** GARBAGE COLLECTION ********** //
    In JavaScript, garbage collection is an automated memory management process that helps identify
    and free up memory that is no longer in use by the program. Here's a breakdown of what garbage collection
    entails and its limitations:

    - automatic memory management => JavaScript uses automatic garbage collection to handle memory allocation
        and deallocation. This means developers do not need to explicitly allocate or deallocate memory,
        unlike lower-level languages like C or C++.
    - Mark-and-Sweep Algorithm: => The most common garbage collection algorithm used in JavaScript is the
        "Mark-and-Sweep" algorithm:
        Mark: The garbage collector traverses the entire object graph starting from known roots (global objects, variables, etc.) and marks all objects that are reachable.
        Sweep: It then sweeps through the entire memory, deallocating memory that was not marked (i.e., unreachable objects).
    - Generational Collection: => Modern JavaScript engines like V8 (used in Chrome and Node.js) employ generational
        garbage collection, which divides objects into different generations based on their age. This optimizes
        garbage collection by focusing efforts on younger objects that tend to have shorter lifetimes.

// ********* Limitations of Garbage Collection ***********

    Performance Impact: While garbage collection is efficient in many cases, it can still introduce occasional
        pauses during execution ("stop-the-world" events) when it runs. These pauses can affect the responsiveness
        of real-time applications or games.

    Memory Leaks: Although JavaScript handles memory management automatically, developers can still unintentionally
        create memory leaks by holding onto references to objects they no longer need. For example,
        forgetting to unregister event listeners or holding references in closures can prevent objects from
        being garbage collected.

    Implicit and Cyclic References: Objects that hold references to each other in a cycle can prevent each other
        from being garbage collected even if they are no longer reachable from the rest of the program.
        Modern garbage collectors have techniques to detect and handle some cyclic references, but they can
        still be a source of memory leaks in some scenarios.

    Not Suitable for Real-Time Systems: Garbage collection mechanisms are designed for general-purpose
        applications. Real-time systems or applications with strict timing requirements may find the
        unpredictability of garbage collection pauses problematic.
*/