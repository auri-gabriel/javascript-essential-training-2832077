/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

let colors = [
    '#802392',
    '#995FA3',
    '#9A98B5',
    '#A0B9C6',
    '#A5F8D3',
];

let getRandomColorFromList = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};

const gridContainer = document.querySelector('.grid');

gridContainer.style.outline = '1px solid rgba(0, 0, 0, 0.2)';

gridContainer.addEventListener('mouseenter', () => {
    gridContainer.style.outline = "6px solid rgba(0, 0, 0, 0.2)";
});

gridContainer.addEventListener('mouseleave', () => {
    gridContainer.style.outline = '1px solid rgba(0, 0, 0, 0.2)';
});

const gridCells = document.querySelectorAll('.cell');

gridCells.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.outline = '3px solid rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.outline = '';
    })

    item.addEventListener("click", () => {
        if (item.style.backgroundColor) {
            item.style.backgroundColor = "";
        } else {
            item.style.backgroundColor = `${getRandomColorFromList(colors)}`;
        }
    });
});

const body = document.body;

let resetAll = () => {
    gridCells.forEach(item => {
        item.style.backgroundColor = "";
    });
    body.style.backgroundColor = '';
}

body.addEventListener('keydown', (event) => {
    console.log(event.code);
    switch (event.code) {
        case 'KeyR':
            resetAll();
            break;

        case 'KeyD':
            body.style.backgroundColor = `${getRandomColorFromList(colors)}`;
        default:
            break;
    }
});