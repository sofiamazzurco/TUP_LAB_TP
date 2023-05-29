
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>UTN</h1>
            <div className='btn'>
                <button className='btn btn-primary'>Log in</button>
                <button className='btn btn-light'>Sing in</button>
            </div>
        </div>
    );
};

export default Header;

