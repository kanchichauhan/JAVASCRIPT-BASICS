
// DEBOUNCING
/*Debouncing is used to ensure that a function doesn't fire repeatedly as long as an event continues to occur.
It limits the rate at which a function is executed. This is particularly useful for events that can fire many
times over a short period, such as 
scroll events
keypresses
fetch on input search.*/

let timeout;
const debounceFn = (value) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        document.querySelector('.debouncingText').textContent = value
    }, 1000)
}

document.querySelector('.debouncingDemo').addEventListener('input', (e) => {
    debounceFn(e.target.value);
});

// THROTTLING

/*Throttling limits the rate at which a function can fire.
It ensures that the function is not executed more than once in a
specified time frame, regardless of how many times the event is triggered.

    => Use Case: Use throttle when you want to limit the rate at which a function is executed.
        It ensures that the function is not invoked more frequently than a specified time interval, even if
        the triggering event occurs more frequently.

    => Behavior: Throttling ensures a function is executed at regular intervals, for example, once every
        200 milliseconds, regardless of how often the event (like scroll or resize) fires during that interval.*/

let throttleTimeout;
let throttleBool
const throttleFn = (value) => {
    if (!throttleBool) {
        throttleBool = true;
        clearTimeout(throttleTimeout)
        throttleTimeout = setTimeout(() => {
            document.querySelector('.throttleText').textContent = value
            throttleBool = false
        }, 2000)
    }
}

document.querySelector('.debouncingDemo').addEventListener('input', (e) => {
    throttleFn(e.target.value);
});