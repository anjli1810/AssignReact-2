// import logo from './logo.svg';
import './App.css';
// import {Components} from './component/Components'
import react,{ useState } from 'react'

const App = () => {
  const [result,setResult] = useState(""); 
  const handlClick = (e)=>{
       setResult(result.concat(e.target.name));
  }

  const clear = ()=>{
    setResult("");
  }
  const backspace =()=>{
     setResult(result.slice(0,result.length-1));
  }
  const calculate =()=>{
    try{
      setResult(eval(result.toString()));
    }
   catch(err){
        setResult("Error")
   }
    

  }
  return (
     <>
     <div className='container'>
        <form>
          <input type="text" value={result}></input>
        </form>
        <div className='keypad'>
          <button onClick={clear} id='clear' className="highlight">Clear</button>
          <button onClick={backspace} id='backspace' className="highlight">C</button>
          <button name='/' onClick={handlClick} className="highlight">&divide;</button>
          <button name="7" onClick={handlClick}>7</button>
          <button name="8" onClick={handlClick}>8</button>
          <button name="9" onClick={handlClick}>9</button>
          <button name="*" onClick={handlClick} className="highlight">&times;</button>
          <button name="4" onClick={handlClick}>4</button>
          <button name="5" onClick={handlClick}>5</button>
          <button name="6" onClick={handlClick}>6</button>
          <button name="-" onClick={handlClick} className="highlight">&ndash;</button>
          <button name="1" onClick={handlClick}>1</button>
          <button name="2" onClick={handlClick}>2</button>
          <button name="3" onClick={handlClick}>3</button>
          <button name="+" onClick={handlClick} className="highlight">+</button>
          <button name="0" onClick={handlClick}>0</button>
          <button name="." onClick={handlClick} className="highlight">.</button>
           <button onClick={calculate} id='result' className="highlight">=</button>
        </div>
      </div>
     </>
  );
}

export default App;
