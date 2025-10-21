/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
];




const table = document.getElementById("bhangra");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const columns = Object.keys(artists[0]);
for (let col of columns) {
  const th = document.createElement("th");
  th.innerText = col;
  headerRow.appendChild(th);
}
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

function renderTable(data) {
  tbody.innerHTML = "";
  for (let artist of data) {
    const row = document.createElement("tr");
    for (let website of columns) {
      const cell = document.createElement("td");
      if (website === "link") {
        cell.innerHTML = `<a href="${artist[website]}" target="_blank">${artist[website]}</a>`;
      } else {
        cell.innerText = artist[website];
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}

renderTable(artists);




const NameButton = document.querySelector("#NameButton");
const BirthButton = document.querySelector("#BirthButton");
const RandomButton = document.querySelector("#RandomButton");

NameButton.addEventListener("click", () => {
  const sortedByName = [...artists].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  renderTable(sortedByName);
});

BirthButton.addEventListener("click", () => {
  const sortedByBirth = [...artists].sort((a, b) => a.birthYear - b.birthYear);
  renderTable(sortedByBirth);
});

RandomButton.addEventListener("click", () => {
  const shuffled = [...artists];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  renderTable(shuffled);
});




//for fun i made a way you could spin to get names of artist if you want play til you win

const spinButton = document.getElementById("spinButton");
const spinTable = document.getElementById("spinTable");
const spinResult = document.getElementById("spinResult");

function spin() {
  const spins = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * artists.length);
    spins.push(artists[randomIndex].name);
  }
  spinTable.innerHTML = "";

  const row = document.createElement("tr");
  for (let name of spins) {
    const cell = document.createElement("td");
    cell.innerText = name;
    row.appendChild(cell);
  }
  spinTable.appendChild(row);
  if (spins[0] === spins[1] && spins[1] === spins[2]) {
    spinResult.innerText = "You win!";
  } else {
    spinResult.innerText = "Sorry, roll again.";
  }
}

spinButton.addEventListener("click", spin);
