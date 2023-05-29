
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>UTN</h1>
            <div className='btn'>
                <button className='btn btn-primary'>Log In</button>
                <button className='btn btn-light'>Sign In</button>
            </div>
        </div>
    );
};

export default Header;

