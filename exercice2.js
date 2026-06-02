let listeCourses = [];

localStorage.setItem("listeCourses", JSON.stringify(listeCourses));
const recuperation = localStorage.getItem("liste");

function ajouterArticle(nom) {
  let nomEnMinuscule = nom.toLowerCase().trim();
  if (listeCourses.includes(nomEnMinuscule) === true) {
    console.log(`${nom} est deja dans le tableau!!!`);
  } else {
    listeCourses.push(nomEnMinuscule);
    console.log(`"${nom}" a ete ajoute!!!!`);
  }
}

function supprimerArticle(nom) {
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
    article.includes(terme.toLowerCase())
  );
}
ajouterArticle("Jus");
ajouterArticle("Amnde");
ajouterArticle("Muscade");
ajouterArticle("Pate");
ajouterArticle("Epice");
ajouterArticle("Conserve");
ajouterArticle("Huile");
ajouterArticle("Loc");
console.log(listeCourses);
afficherArticle();
console.log(rechercherArticle('mus'))
