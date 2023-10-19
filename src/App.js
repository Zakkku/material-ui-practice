import './App.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const OrangeButton = styled(Button)(() => ({
  background: 'orange'
}));

function App() {
  return (
    <div className="App">
      <h1>This is my React app to practice MUI</h1>
      <OrangeButton variant='contained'>Hello</OrangeButton>
    </div>
  );
}

export default App;
