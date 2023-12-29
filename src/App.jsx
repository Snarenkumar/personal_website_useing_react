
import DarkModeToggle from './DarkModeToggle';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="page-header">
          <div className="logo"><a href="#">Your Logo</a></div>
          <nav>
            <DarkModeToggle />
            {/* Add other navigation links here */}
          </nav>
        </div>
      </header>

      {/* Section 1 */}
      <div className="container2">
        {/* Add your Section 1 content here */}
      </div>
    </div>
  );
};

export default App;
