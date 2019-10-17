const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let fibo=[];

rl.question('A quelle rang voulez vous la suite de Fibonacci : ', (rang) => {
  fibo[0]=0;
  fibo[1]=1;
  for(i=1;i<=rang;i++){
    fibo[fibo.length]=fibo[i-1]+fibo[i];

  }
  console.log(Au rang ${rang} la suite de fibonacci vaut ${fibo[rang]})
  rl.close();
});