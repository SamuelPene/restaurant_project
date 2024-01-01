import { Nav, Footer } from './Website/Components/index';
import Website from './Website/Website';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* < Website /> */}
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
