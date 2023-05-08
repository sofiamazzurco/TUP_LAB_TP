
import './App.css';
import BookItems from './components/BookItems/BookItems';
import Header from './components/Header/Header';

const App = () => {
  const books = [
    { title: 'Padre Rico, Padre Pobre', 
      author: 'Robert',
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    },
  ];
  
  return (
    <div className="App">
      <Header/>
  

      <BookItems 
        title={books[0].title}
        author={books[0].author}
        dateRead={books[0].dateRead}
        pageCount={books[0].pageCount}
      />
      <BookItems 
        title={books[1].title}
        author={books[1].author}
        dateRead={books[1].dateRead}
        pageCount={books[1].pageCount}
      />
      <BookItems 
        title={books[2].title}
        author={books[2].author}
        dateRead={books[2].dateRead}
        pageCount={books[2].pageCount}
      />
      <BookItems 
        title={books[3].title}
        author={books[3].author}
        dateRead={books[3].dateRead}
        pageCount={books[3].pageCount}
      />
    </div>
  );
}

export default App;

