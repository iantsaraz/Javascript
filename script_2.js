console.log("Bonjour !!");

var n = prompt("De quel nombre veut tu calculer la factorielle??")

function factorielle(n) {
  if(n==0) return 1;
  else return n*factorielle(n-1);
}

var p = factorielle(n);
console.log("La factorielle de" +" "+ n +" " + "est"+" " +p)
