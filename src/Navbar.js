import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Daily Forecast</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weekcontainer">5-Day Forecast</Link>
            </li>
          </ul>
    </div>
  );
}

export default Navbar;