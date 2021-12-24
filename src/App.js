import logo from './logo.svg';
import './App.css';
import Employee from './Employee';




function App() {
  const employeeInfo = [
    {
      firstName: "John",
      lastName:"Smith",
      hobby: "Tennis",
      id: 1
    },
    {
      firstName: "Dave",
      lastName:"Brown",
      hobby: "Snooker",
      id: 2
    },
    {
      firstName: "Mary",
      lastName:"James",
      hobby: "Jogging",
      id: 3
    },
    {
      firstName: "Anna",
      lastName:"Jones",
      hobby: "Swimming",
      id: 4
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
      <h1>Company Directory</h1>
      {employeeInfo.map(employee => {
        const { firstName, lastName, hobby, id } = employee;
        return (
          <Employee key={id} firstName={firstName} lastName={lastName} hobby={hobby} />
        )
      })}
      </header>
    </div>
  );
}

export default App;
