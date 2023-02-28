import React ,{useState} from 'react';
import './App.css';
import Icon from 'react-icons-kit';
import Qustion from './question';
import data from './data';

function App() {
  const [question , setQusetion]  = useState(data);
  return (
       <>
       <div className='box'>
         <h1>سوالی پیش اومده؟</h1>
         {
          question.map((index)=>{
            return <Qustion key={index.id} {...index}/>
          })
         }
       </div>
       </>

  );
}

export default App;
