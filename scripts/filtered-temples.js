const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Bacolod Philippines Temple",
    location: "Bacolod, Philippines",
    dedicated: "2026, May, 31",
    area: 27895,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-76238-main.jpg"
  },
  {
    templeName: "Orem Utah Temple",
    location: "Orem, Utah, United States",
    dedicated: "2024, January, 21",
    area: 71998,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-69929-main.jpg"
  },
  {
    templeName: "Fort Worth Texas Temple",
    location: "Fort Worth, Texas, United States",
    dedicated: "2027, January, 10",
    area: 30000,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/fort-worth-texas-temple/fort-worth-texas-temple-76080.jpg"
  }
];

const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const container = document.querySelector("#figures");
const heading = document.querySelector("#current_page");

// Build a card for each temple in the list
function createTempleCard(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    let card = document.createElement("figure");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

createTempleCard(temples);

// Filters
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

function getYear(temple) {
  return parseInt(temple.dedicated);
}

homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  heading.textContent = "Home";
  createTempleCard(temples);
});

oldLink.addEventListener("click", (event) => {
  event.preventDefault();
  heading.textContent = "Old";
  let oldTemples = temples.filter(temple => getYear(temple) < 1900);
  createTempleCard(oldTemples);
});

newLink.addEventListener("click", (event) => {
  event.preventDefault();
  heading.textContent = "New";
  let newTemples = temples.filter(temple => getYear(temple) > 2000);
  createTempleCard(newTemples);
});

largeLink.addEventListener("click", (event) => {
  event.preventDefault();
  heading.textContent = "Large";
  let largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});

smallLink.addEventListener("click", (event) => {
  event.preventDefault();
  heading.textContent = "Small";
  let smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
});