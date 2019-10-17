var tableau = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function moyTab(tab){
	var moy=0;
	for(var i=0; i<tab.length; i++){
		moy+=tab[i];
	}
	return moy = moy/tab.length
}

function indexNombreTab(tab,nb){
	for(var i=0; i<tab.length; i++){
		if(tab[i]==nb)
			return i;
	}
}

function nbPairTableau(tab){
	var compteurDoublon = 0;
	var doublon;
	for(var i=0; i<tab.length; i++){
		for(var j=i+1; j<tab.length; j++){
			if(tab[i]==tab[j] && tab[i]!=doublon){
				compteurDoublon ++;
				doublon = tab[i];
			}			
		}
	}
	return compteurDoublon;
}

console.log("Afficher la moyenne des éléments du tableau ?");
console.log(moyTab(tableau));

console.log("Afficher l’index dans le tableau de l’entier 15 ?");
console.log(indexNombreTab(tableau,15));

console.log("Écrire un algorithme pour trouver le nombre d’entiers en doublon dans le tableau");
console.log(nbPairTableau(tableau));