var tableau = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function afficheTableau(tab){
	for (var i=0; i<tab.length; i++){
		console.log(tab[i]);
	}
}

function afficheTableauInverse(tab){
	for (var i=tab.length-1; i>=0; i--){
		console.log(tab[i]);
	}
}


function afficheTableauSup3(tab){
	for (var i=0; i<tab.length; i++){
		if(tab[i]>3)
			console.log(tab[i]);
	}	
}


function afficheTableauNbPaire(tab){
	for (var i=0; i<tab.length; i++){
		if(tab[i]%2==0)
		console.log(tab[i]);
	}
}


function afficheTableauNbMax(tab){
	var max = tab[0];
	for (var i=0; i<tab.length; i++){
		if(tab[i]>max)
			max = tab[i];
	}
	return max;
}


function afficheTableauNbMin(tab){
	var min = tab[0];
	for (var i=0; i<tab.length; i++){
		if(tab[i]<min)
			min = tab[i];
	}
	return min;
}

console.log("Afficher l’ensemble des éléments du tableau grâce à une boucle ");
afficheTableau(tableau);

console.log("Afficher l’ensemble des éléments dans l’ordre inverse du tableau ");
afficheTableauInverse(tableau);

console.log("Faire une boucle et un test de manière à n’afficher que les entiers supérieurs à 3 ");
afficheTableauSup3(tableau);

console.log("Faire une boucle qui affiche uniquement les entiers pairs");
afficheTableauNbPaire(tableau);

console.log("Afficher le plus grand élément du tableau ");
console.log(afficheTableauNbMax(tableau));

console.log("Afficher le plus petit élément du tableau ");
console.log(afficheTableauNbMin(tableau));










