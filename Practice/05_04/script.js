/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */


// Identify specific elements you want to target

const titles = document.querySelectorAll('h1');
titles.forEach(item => { item.style.fontWeight = 400 });


/**
 * Target specific elements nested inside other elements
 * Try advanced CSS queries to get specific targets
 * Experiment with querySelector and querySelectorAll
 */

const rightLengthButtons = document.querySelectorAll('.rightlength  button');
rightLengthButtons.forEach(item => { item.style.color = 'red' });

const leftLengthButtons = document.querySelectorAll('.leftlength  button');
leftLengthButtons.forEach(item => { item.style.color = 'blue' });