/*
    This means that micro-tasks, like promises and mutation observations, are given priority
    over regular callback queue tasks. Even if both queues have tasks waiting, the event loop will
    always finish processing all micro-tasks before it starts working on tasks from the Callback Queue.

    Understanding Task Starvation:

    Now, imagine this: if micro tasks keep popping up without allowing other tasks a chance to
    run, what happens next? Well, in this scenario, the Callback Queue won’t get an opportunity
    to execute its tasks. This situation is what we call the starvation of tasks in the Callback Queue.
*/