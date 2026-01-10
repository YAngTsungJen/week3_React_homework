import { useEffect } from 'react';
import axios from 'axios';
  
function App() {
  useEffect(() => {
    (async() => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      console.log(res);
    })()
  }, [])
  return (
    <>
    </>
  )
}

export default App
