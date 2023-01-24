
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getProducts } from '../store/Reducer/Product/ProductSlice';
function App() {

  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getProducts())}, [])

  return (
    <>
      <form>
        <input type="text" />
      </form>
    </>
  );
}

export default App;
