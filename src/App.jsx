import css from './App.module.css'
import Display from './Components/Display';
import ButtonContainer from './Components/ButtonContainer';


function App(){
  return <>
    <center>
      <h1 className={css.heading}>React Calculater</h1>
      <div className={css.cal}>
        <Display></Display>

        <ButtonContainer/>

        
              
      </div>
    </center>
  </>

}

export default App;