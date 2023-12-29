

const DarkModeToggle = () => {
  useEffect(() => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const handleDarkModeToggle = () => {
      if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    };

    const initializeDarkMode = () => {
      const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
      if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
      }
    };

    darkModeToggle.addEventListener('change', handleDarkModeToggle);
    initializeDarkMode();

    return () => {
      darkModeToggle.removeEventListener('change', handleDarkModeToggle);
    };
  }, []);

  return (
    <input type="checkbox" id="darkModeToggle" />
  );
};

export default DarkModeToggle;
