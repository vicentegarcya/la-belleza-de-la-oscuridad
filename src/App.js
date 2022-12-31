import './App.css';
import darkness from './darkness_home.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={darkness} alt="sky darkness with lightnings"></img>
        <p>
          We are currently working on this website.
        </p>
        <p className='link'>
          In the meantime, you can check <a href="https://www.instagram.com/soygigigonz/" target="_blank" rel="noreferrer">my Instagram</a>
        </p>
      </header>
    </div>
  );
}

export default App;
