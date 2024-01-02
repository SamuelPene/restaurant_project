import { useState } from 'react';
import { Nav, Footer } from './Website/Components/index';
import Website from './Website/Website';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [isDashboardActive, setIsDashboardActive] = useState();
  const [isWebsiteActive, setIsWebsiteActive] = useState(true);

  return (
    <div className="App">
      <Nav
        setIsDashboardActive={setIsDashboardActive}
        isDashboardActive={isDashboardActive}
        setIsWebsiteActive={setIsWebsiteActive}
      />
      {isWebsiteActive && <Website />}
      {isDashboardActive && <Dashboard />}
      <Footer
        setIsDashboardActive={setIsDashboardActive}
        isDashboardActive={isDashboardActive}
        setIsWebsiteActive={setIsWebsiteActive}
      />
    </div>
  );
}

export default App;
