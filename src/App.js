import './App.css';
import {OrangeButton} from './StyledComponents'
import SimpleContainer from './OuterContainer';
import ButtonContainer from './ButtonsContainer';
import Header from './Header';
import TomatoContainer from './TomatoContainer';
import { useState } from 'react';


function App() {

  const [tomatoes, setTomatoes] = useState(0);

  return (
    <div className="App">
      <SimpleContainer>
      <Header />
      <ButtonContainer  tomatoes={tomatoes} setTomatoes={setTomatoes}>
      <OrangeButton variant='contained' onClick={() => setTomatoes(tomatoes - 1)}> - </OrangeButton>
      <OrangeButton variant='contained' onClick={() => setTomatoes(tomatoes + 1)}> + </OrangeButton>
      </ButtonContainer>
      <TomatoContainer  tomatoes={tomatoes}/>
      </SimpleContainer>
      
    </div>
  );
}

export default App;
