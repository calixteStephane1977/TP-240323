// voici 5 exercices en javascript sur les objets:
 
// 1. Créez un objet "personne" avec les propriétés "nom", "âge" et "ville". Puis, affichez ces propriétés dans la console.
 
const personne ={
    nom:"Calixte",
    age:"Stéphane",
    ville:"Cergy"

}
console.log(personne)
// 2. Créez un objet "voiture" avec les propriétés "marque", "modèle" et "année". Ajoutez une méthode "afficherDetails" qui affiche ces propriétés dans la console.

const voiture ={
    marque:"volwagen" ,
    modèle:"Xmind",
    année:"2023",
    afficherDetails:function (){
        // console.log(voiture)
        console.log(this.marque)
        console.log(this.modèle)
        console.log(this.année)
    }

}
 voiture.afficherDetails()
//  ===================================
// 3. Créez un objet "étudiant" avec les propriétés "nom", "âge" et "notes". Les "notes" seront un tableau de nombres. Ajoutez une méthode "calculerMoyenne" qui calcule et affiche la moyenne de ces notes.

const etudiant ={
    nom:"calixte",
    age:"37 ans",
    notes:[12,13,17,18,11],
    calculerMoyenne:function (){
        let longueur=etudiant.notes.length;

        let moy  =etudiant.notes.reduce((acc,curr)=>acc+curr)/longueur;
      console.log(moy)
    }
}
etudiant.calculerMoyenne()
// etudiant();
//  ====================================================================================================
// 4. Créez un objet "animal" avec les propriétés "espèce", "poids" et "cri". 
// Ajoutez une méthode "crier" qui affiche le cri de cet animal dans la console.

const animal={
    espèce:"agneau"  ,
    poids:"40 kl",
    cri:"bêle",
    crier:function (){
        console.log(this.cri)
    }
}
animal.crier();



 
// 5. Créez deux objets "rectangle" avec les propriétés "longueur" et "largeur". Ajoutez une méthode "calculerPerimetre" qui calcule et affiche le périmètre de ce rectangle.

const rectangle ={
        longueur:13,
        largeur:20,
  
    calculerPerimetre:()=>{

    let addition= rectangle.longueur + rectangle.largeur
    const perimetre =addition*2;
    console.log(perimetre)
    }
}
rectangle.calculerPerimetre()