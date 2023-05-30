import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';
import BooksHome from './components/Home/BooksHome';
import ForgotPass from './components/Routes/ForgotPass/ForgotPass';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/Routes/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksHome />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
