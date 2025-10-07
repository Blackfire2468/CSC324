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
for (let artist of artists) {
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
table.appendChild(tbody);
