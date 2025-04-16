import './App.css';
import Text from './components/Text';
import DarkMode from './components/DarkMode';

function App() {
  return (
    <div>
      <h1>Text Manipulation</h1>
      <Text heading="Enter Text"/>
      <DarkMode/>
    </div>
  );
}

export default App;
