var tableau = [1, 8, 4, 0];
			
				
function trierBrutforce(tableau) 
{
    let changement=true, temp;
    while(changement){
        changement =false;
        for(i=0;i<tableau.length-1;i++){
            if (tableau[i]>tableau[i+1]) {
                temp = tableau[i+1];
                tableau[i+1]=tableau[i];
                tableau[i] =temp;
                changement = true;
            }
        }
    }
}

function afficheTableau(tab){
	for (var i=0; i<tab.length; i++){
		console.log(tab[i]);
	}
}

console.log("Créer une fonction permettant de trier ce tableau");
triCroissant(tableau);
afficheTableau(tableau);