const root = document.getElementById("root");

const people = [
  {
    name: "bill mahoney",
    img: "photo1",
    role: "product owner",
  },
  {
    name: "saba cabrera",
    img: "photo2",
    role: "art director"
  },
  {
    name: "shae le",
    img: "photo3",
    role: "tech lead"
  },
  {
    name: "skylah lu",
    img: "photo4",
    role: "ux designer"
  },
  {
    name: "griff richards",
    img: "photo5",
    role: "developer"
  },
  {
    name: "stan john",
    img: "photo6",
    role: "developer"
  }  
]

window.onload = generateCards();

function createCard(person) {
  const card = document.createElement("div");
  card.classList.add("card");

  const role = document.createElement("p");
  role.classList.add("role");
  role.innerText = person.role;

  const figure = document.createElement("figure");
  figure.classList.add("img-container");

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = `./img/${person.img}.png`;

  const caption = document.createElement("figcaption");
  caption.classList.add("name");
  caption.innerText = person.name;
  figure.append(img, caption);

  card.append(role, figure);

  return card;
}

function generateCards() {
  for(const person of people) {
    root.appendChild(createCard(person));
  }
}