var projectCard = document.querySelectorAll(`.projetCard`);
var slideProjetCardNbr = projectCard.length;
console.log(slideProjetCardNbr);

//for (let index = 0; index < slideProjetCardNbr; index++) {
//    for (const key in data.gif) {
//        if (data.gif.hasOwnProperty.call(key)) {
//            const item = data.gif[key];
//
//        }
//    }
//}       
           

document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://raw.githubusercontent.com/alicanv01/projetmedia/main/media.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Assurez-vous que la clé "gif" existe dans le fichier JSON
      if (data.gif) {
        // Boucle à travers chaque élément dans l'objet "gif"

        for (const key in data.gif) {
          if (data.gif.hasOwnProperty(key)) {
            const item = data.gif[key];

         var slideProjetCardNbr = projectCard.length;
            console.log(slideProjetCardNbr);
            
            projectCard.forEach(function(element, index){
            
         
            var span=document.createElement('span')
            span.className = "slide-content v";
            element.appendChild(span)
            var img =document.createElement('img');
            img.className=("gif");
            img.setAttribute("src",`${item.link}`);
            span.appendChild(img)
            }
              
            );

            // Affichez les informations dans la console (adaptez cela à votre structure HTML)
            console.log(
              `Type: ${item.type}, Titre: ${item.title}, Lien: ${item.link}`
            );
          }
        }
      } else {
        console.error("La clé 'gif' est manquante dans le fichier JSON");
      }
    })
    .catch((error) =>
      console.error("Erreur de chargement du fichier JSON", error)
    );
});
