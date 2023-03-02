import React ,{useState} from 'react';
import './App.css';
import data, { links, soials } from './data';
import {AiOutlineMenu}from 'react-icons/ai';

function App() {
  const [show,setShow] = useState(false);
  return (<>
       <nav className='nav'>
        <div className='open'><button onClick={()=> setShow(!show)}><AiOutlineMenu color='#00ffffae' fontSize='20px'/></button></div>

         <div className='menu'>
          <ul>
            {links.map((link)=>{
              const {id,url,text}=link;
              return <li key={id}><a href={url}>{text}</a></li>
            })}
          </ul>
         </div>
         <div className='ICONS'>
          <ul>
            {soials.map((iconlink)=>{
              const {id,url,icon} = iconlink;
              return <li key={id}><a href={url}>{icon}</a></li>  
            })}
          </ul>
         </div>
       </nav>
                <div className={`${show ? 'menu1 active' : 'menu1'}`}>
                <ul>
                    {links.map((link)=>{
                      const {id,url,text}=link;
                      return <li key={id}><a href={url}>{text}</a></li>
                    })}
                  </ul>
                </div>
              
               </>

  );
}

export default App;
