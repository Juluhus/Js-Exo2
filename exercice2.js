let listeCourses = [];

localStorage.setItem("listeCourses", JSON.stringify(listeCourses));
JSON.parse(localStorage.getItem("listeCourses"));

const inptArticle = document.querySelector(".form-input");
const btnUpdate = document.querySelector(".update-btn");
const btnDelete = document.querySelector(".delete-btn");
const btnResearch = document.querySelector(".research-btn");

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  ajouterArticle(inptArticle.value);
  inptArticle.value = "";
  console.log(listeCourses);
});

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  supprimerArticle(inptArticle.value);
  inptArticle.value = "";
  console.log(listeCourses);
});

btnResearch.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(rechercherArticle(inptArticle.value));
  inptArticle.value = "";
});

function ajouterArticle(nom) {
  localStorage.setItem("listeCourses", JSON.stringify(listeCourses));
  let nomEnMinuscule = nom.toLowerCase().trim();
  if (listeCourses.includes(nomEnMinuscule) === true) {
    console.log(`${nom} est deja dans le tableau!!!`);
  } else {
    listeCourses.push(nomEnMinuscule);
    console.log(`"${nom}" a ete ajoute!!!!`);
  }
}

function supprimerArticle(nom) {
  localStorage.setItem("listeCourses", JSON.stringify(listeCourses));
  const positionDansListe = listeCourses.indexOf(nom.toLowerCase().trim());
  if (positionDansListe === -1) {
    console.log(`${nom} n'est pas dans le tableau!!!`);
  } else {
    listeCourses.splice(positionDansListe, 1);
    console.log(`${nom} a ete supprime!!!`);
  }
}

function afficherArticle() {
  for (let i = 0; i < listeCourses.length; i++) {
    console.log(`${listeCourses[i]} : ${i + 1}`);
  }
}

function rechercherArticle(terme) {
  return listeCourses.filter((article) =>
    article.includes(terme.toLowerCase().trim()),
  );
}
