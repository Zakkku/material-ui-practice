import './App.css';
import {OrangeButton} from './StyledComponents'
import SimpleContainer from './OuterContainer';
import ButtonContainer from './ButtonsContainer';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <SimpleContainer>
      <Header />
      <ButtonContainer>
      <OrangeButton variant='contained'> - </OrangeButton>
      <OrangeButton variant='contained'> + </OrangeButton>

      </ButtonContainer>
      
      </SimpleContainer>
      
    </div>
  );
}

export default App;
