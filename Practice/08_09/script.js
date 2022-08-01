/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${frogpack.volume
  }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${frogpack.color
  }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${frogpack.pocketNum
  }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${frogpack.strapLength.left
  } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${frogpack.strapLength.right
  } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${frogpack.lidOpen ? "open" : "closed"
  }</span></li>
    </ul>  
`;

const mainFunction = (object) => {
  let article = document.createElement('article');

  article.style.display = 'grid';
  article.style.gridTemplateColumns = '1fr 1fr';
  article.style.gridTemplateRows = 'auto 1fr';
  article.style.gap = '0 3rem';

  const content = `
    <h1 class="backpack__name">${object.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${object.volume
    }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${object.color
    }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${object.pocketNum
    }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${object.strapLength.left
    } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${object.strapLength.right
    } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${object.lidOpen ? "open" : "closed"
    }</span></li>
    </ul>  
`;
  article.innerHTML = content;

  let figure = helperFunction(object);
  figure.style.gridRow = 'span 2';
  article.prepend(figure);

  return article
}

const helperFunction = (content) => {
  let figure = document.createElement('figure');

  let image = document.createElement('img');
  image.setAttribute('src', frogpack.image);
  figure.append(image);

  let imageCaption = document.createElement('figcaption');
  imageCaption.innerHTML = content.name;
  figure.append(imageCaption);

  return figure
}

let main = document.querySelector("main");
main.style.margin = '0 auto';
main.style.padding = '0 auto';
main.style.maxWidth = '60 rem';


let backPackArticle = mainFunction(frogpack);

main.append(backPackArticle);
