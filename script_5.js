const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("livre empruntés plus d'une fois")
  for (var i=0;i<books.length; i++){
    if (books[i].rented>0){
      console.log("le livre:"+""+books[i].title+""+ "a été emprunté:"+books[i].rented+" "+"fois")}
    };

 console.log ("------------------------------------------------------------------------------------------")
 
moreRented = books[0];

 for (let i = 1; i < books.length; i++) {
    if (moreRented.rented < books[i].rented ){
      moreRented = books[i];
    }
  }
  console.log(`Le livre le plus emprunté ${moreRented.title}`);



 console.log ("------------------------------------------------------------------------------------------")


 lessRented = books[0];

  for (let i = 1; i < books.length; i++) {
    if (lessRented.rented > books[i].rented ){
      lessRented = books[i];
    }
  }
  console.log(`Le livre le moins emprunté: ${lessRented.title}`);

 console.log ("------------------------------------------------------------------------------------------")


 console.log ("le livre avec l'ID: 873495 est:")


 for (let i = 0; i < books.length; i++) {
    if (books[i].id === 873495 ) {
      book = books[i];
    }
  }
console.log(`${book.title}`)


 console.log ("------------------------------------------------------------------------------------------")



function deleteBook(books,id) {
  let newBooks;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id ) {
      books.splice(i,1);
    }
  }
  return books
}

newBooks = deleteBook(books,133712);




console.log ("------------------------------------------------------------------------------------------")




function triageBook(books) {
  for (var i = 0; i < books.length; i++) {
    for (var j = 0; j < books.length - 1; j++) {
      if (books[j].title > books[j+1].title){
        temp = books[j];
        books[j] = books[j+1];
        books[j+1] = temp;
      }
    }
  }
}

triageBook(newBooks);