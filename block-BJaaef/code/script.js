let peopleGOT = [];
for (let elem of got['houses']) {
    for (let elem2 of elem[`people`]) {
        peopleGOT.push(elem2);
    }
}


let h1 = document.createElement("h1");
h1.innerText = "People of GOT";
h1.setAttribute("class", "heading");

document.body.append(h1);

let mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "container");

document.body.append(mainContainer);


function peopleOfGOTCard(obj) {
  let card = document.createElement("div");
  card.setAttribute('class', 'box')

  let divTitle = document.createElement(`div`);
  divTitle.setAttribute("class", "title");

  let nameChar = document.createElement("h2");
  nameChar.innerText = obj['name'];
  let image = document.createElement("img");
  image.setAttribute('src', `${obj["image"]}`);

 

  divTitle.append(image, nameChar);

  let description = document.createElement("p");
  description.innerText = obj['description'];
  description.setAttribute('class', 'description');

  let btnLearnMore = document.createElement("button");
  btnLearnMore.innerText = "Learn More!";

  card.append(divTitle, description, btnLearnMore);

  return card;
}


for (let elem of peopleGOT) {
    let card = peopleOfGOTCard(elem);
    document.querySelector('div.container').append(card);
}
