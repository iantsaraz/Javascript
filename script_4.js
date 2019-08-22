const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// les entrepreneurs qui sont nés dans les années 70 ;
console.log("les entrepreneurs nées en 1970 sont:")


for( i = 0; i < entrepreneurs.length; i++){
     y = entrepreneurs[i].year;
   
      y = String(y);
  
  if (y[2]==7) {

      console.log(entrepreneurs[i]);
    }
  }


console.log("les prénom et les noms des entrepreneurs:")
  for (i=0; i<entrepreneurs.length; i++){
console.log(entrepreneurs[i].first+ " "+entrepreneurs[i].last);}  


console.log("l'age actuel des entrepreneurs ")
  for( i = 0; i < entrepreneurs.length; i++){
    
      var new_year = 2019 - entrepreneurs[i].year

      console.log(entrepreneurs[i].first+ " "+entrepreneurs[i].last +" "+"a " + new_year +" "+"ans")
  };



console.log("ordre alphabétique")
   for (i=0; i<entrepreneurs.length; i++){
      let nom = entrepreneurs[i].first;

      console.log(nom.sort())};