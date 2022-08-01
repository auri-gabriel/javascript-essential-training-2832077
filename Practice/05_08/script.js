/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

/**
 * PRACTICE
 * [*] Find an element and add two different classes
 * [*] Remove only one of the new classes
 * [*] Add a new attribute to an element
 * 
 * ADDITIONAL PRACTICE
 * [*] Request the value of the attribute
 * [] Change the value of the attribute
 * [*] Add some inline CSS to an element by specifying the style property and setting its value
 * [*] Query the style property of an element in the console to get a list of all the style properties available
 */

const features = document.querySelectorAll('li.feature:nth-child(odd)');

features.forEach(item => {
    item.classList.add('important', 'dark-blue');
});

features.forEach(item => {
    item.classList.remove('dark-blue');
});

const images = document.querySelectorAll('img');

images.forEach(item => {
    item.setAttribute('alt', 'an image, most likely of a backpack');
})

images.forEach(item => {
    console.log(item.getAttribute('src'));
})

document.querySelector('.site-title').style.backgroundColor = 'lightsalmon';
document.querySelector('.site-title').style.padding = '20px';
console.log(document.querySelector('button').style)