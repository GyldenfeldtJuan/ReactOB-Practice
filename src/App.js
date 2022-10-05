import logo from './logo.svg';
import './App.css';
import ContactFather from './components/container/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactFather></ContactFather>
      </header>
    </div>
  );
}

export default App;
