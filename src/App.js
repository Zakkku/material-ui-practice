import './App.css';
import {OrangeButton} from './StyledComponents'
import SimpleContainer from './OuterContainer';
import ButtonContainer from './ButtonsContainer';


function App() {
  return (
    <div className="App">
      < SimpleContainer>
      <h1>Pomodoro Tomato Counter</h1>
      <h4>(Made with Material UI this time)</h4>
      <ButtonContainer>
      <OrangeButton variant='contained'> - </OrangeButton>
      <OrangeButton variant='contained'> + </OrangeButton>

      </ButtonContainer>
      
      </SimpleContainer>
      
    </div>
  );
}

export default App;
