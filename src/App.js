import logo from './logo.svg';
import './App.css';
import Employee from './Employee';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Company Directory</h1>
      <Employee firstName="John" lastName="Smith" />
      <Employee firstName="Dave" lastName="Brown"  />
      <Employee firstName="Mary" lastName="James"  />
      <Employee firstName="Anne" lastName="Jones"  />
      </header>
    </div>
  );
}

export default App;
