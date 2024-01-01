import { useState } from 'react';
import { Nav, Footer } from './Website/Components/index';
import Website from './Website/Website';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [isDashboardActive, setIsDashboardActive] = useState();

  return (
    <div className="App">
      <Nav
        setIsDashboardActive={setIsDashboardActive}
        isDashboardActive={isDashboardActive}
      />
      {/* < Website /> */}
      {isDashboardActive && <Dashboard />}
      <Footer
        setIsDashboardActive={setIsDashboardActive}
        isDashboardActive={isDashboardActive}
      />
    </div>
  );
}

export default App;
