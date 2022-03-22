import './App.css';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import BlueCard from './BlueCard';

function App() {
  return (
    <div className="App">
      <Card2 title="CSS">CSS Style로 만들었습니다.</Card2>
      <Card3 title="SCSS">SCSS Style로 만들었습니다.</Card3>
      <Card4 title="CSS Module">CSS Module Style로 만들었습니다.</Card4>
      <BlueCard title="CSS in JS">CSS IN JS Style로 만들었습니다.</BlueCard>
    </div>
  );
}

export default App;
