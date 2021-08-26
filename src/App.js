import './css/App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

var defaultImg = "https://images.unsplash.com/photo-1619366893681-aba1722f56d3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMDkwNTY2MA&ixlib=rb-1.2.1&q=85";

function App() {
  return (
    <div className="App">
      <Navbar placeholderImg={defaultImg}/>
      <HomePage placeholderImg={defaultImg}/>
    </div>
  );
}

export default App;
