const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
        age: 43,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
        age: 62,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
        age: 31,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
        age: 45,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
        age: 39,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
        age: 38,
      },
      releaseYear: 1928,
    },
  ];


  let formatedBookNames = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

  console.log(formatedBookNames);


  let authorsByAge = books.map((book) => {
      return {age: book.author.age,
        author: book.author.name,
    }
  }).sort((authorA,authorB) => authorA.age - authorB.age)

  console.log(authorsByAge)

  let sciFiFAn = books.filter((book) => (book.genre === 'Fantasia' || book.genre === "Ficção Científica"));


  console.log(sciFiFAn);


  let arrayByReleaseYear = books.filter((book) => book.releaseYear <= 1954).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);


  console.log('Olha aqui',arrayByReleaseYear);