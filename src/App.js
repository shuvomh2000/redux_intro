
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch()
  const data = useSelector((item)=>item.plusminus)
  
  let handlePlus = ()=>{
    dispatch({type:"PLUS_NUMBER",payload: 2})
  }
  let handleMinus = ()=>{
    dispatch({type:"MINUS_NUMBER",payload: 3})
  }

  return (
    <>
    <div className="text-center">
      <button onClick={handlePlus}>+</button>
      <h1>{data}</h1>
      <button onClick={handleMinus}>-</button>
    </div>
    </>
  );
}

export default App;
