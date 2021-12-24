import logo from './logo.svg';
import './App.css';
import Employee from './Employee';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Company Directory</h1>
      <Employee firstName="John" lastName="Smith" hobby="tennis" />
      <Employee firstName="Dave" lastName="Brown"  hobby="archery" />
      <Employee firstName="Mary" lastName="James"  hobby="bowling" />
      <Employee firstName="Anne" lastName="Jones"  hobby="running" />
      </header>
    </div>
  );
}

export default App;
