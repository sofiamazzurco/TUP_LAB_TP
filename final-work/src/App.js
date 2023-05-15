
import './App.css';

import Header from './components/Header/Header';
import Books from './components/Books/Books';
const App = () => {
  const books = [
    { 
      id: 1,
      title: 'Padre Rico, Padre Pobre', 
      author: 'Robert',
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      id: 2,
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      id: 3,
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      id: 4,
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    },
  ];
  
  return (
    <div className="App">
      <Header/>
      <Books books = {books}/>
    </div>
  );
}

export default App;

