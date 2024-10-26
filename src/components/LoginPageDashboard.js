
import { Link } from 'react-router-dom'; // Import Link to use it for navigation
import './LoginPageDashboard.css';

const LoginPageDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Welcome to Your Dashboard!</h2>
      <p className="dashboard-text">
        From here, you can manage your profile, create meetings, view the meeting list, and more.
      </p>

      <nav className="dashboard-nav">
        <ul className="nav-links">
          <li>
            <Link to="/user" className="dashboard-link">User Profile</Link>
          </li>
          <li>
            <Link to="/create-meeting" className="dashboard-link">Create Meeting</Link>
          </li>
          {/* <li>
            <Link to="/meeting-list" className="dashboard-link">Meeting List</Link>
          </li> */}
          <li>
            <Link to="/" className="dashboard-link">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoginPageDashboard;

