import { Nav, Footer } from './Website/Components/index';
import Website from './Website/Website';
import Dashboard from './Dashboard/Dashboard';
import { useSelector } from 'react-redux';

function App() {
  const isWebsiteActive = useSelector((state) => state.isWebsiteActive.value);
  const isDashboardActive = useSelector(
    (state) => state.isDashBoardActive.value
  );

  return (
    <div className="App">
      <Nav />
      {isWebsiteActive && <Website />}
      {isDashboardActive && <Dashboard />}
      <Footer />
    </div>
  );
}

export default App;
