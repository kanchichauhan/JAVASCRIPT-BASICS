/*
Event delegation in JavaScript is a pattern that efficiently handles
events. Events can be added to a parent element instead of adding to
every single element. It refers to the process of using event
propagation (bubbling) to handle events at a higher level in the DOMthan the element on which the event originated.
*/
// Event delegation is basically if the listerner is bind to the parent then
// it will automatically delegated the event to the clild elements
/* Event delegation in javascript is a technique
where you attach a single event handler to a
parent element to handle events on its child
elements */


document.querySelector('.parent').addEventListener('click', ({target}) => {
    console.log(target); // child elements as well
});

// With this code, when you click the button, the event bubbles up to the div which handles the event.
// Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.

/* ---------- EVENT LOOP ------------ */

/* ---------- EVENT CAPTURING --------- */