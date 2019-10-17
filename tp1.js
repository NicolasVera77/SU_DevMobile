console.log(" Application Opérateurs ");



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});
rl.question('Veuillez saisir le premier nombre…', (answer) => {
  if (answer != "")
  {
    rl.question('Veuillez saisir le second nombre…', (answer2) => {
        if (answer2 !="")
        {
            addition = parseInt(answer)+parseInt(answer2);
            soustraction = parseInt(answer)-parseInt(answer2);
            multiplication = parseInt(answer)*parseInt(answer2);
            division = parseInt(answer)/parseInt(answer2);
            modulus = parseInt(answer)%parseInt(answer2);
            console.log(answer+ " + "+ answer2 + " = " +addition);
            console.log(answer+ " - "+ answer2 + " = " +soustraction);
            console.log(answer+ " * "+ answer2 + " = " +multiplication);
            console.log(answer+ " / "+ answer2 + " = " +division);
            console.log(answer+ " % "+ answer2 + " = " +modulus);
        }
	rl.close();
    });
  }
});