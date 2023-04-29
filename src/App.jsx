import './App.css';
import { useState } from 'react'
import { getRandomNumber } from './utils/getRandom'
import phrases from "./assets/phrases.json";
import Phrase from './components/Phrase/Phrase.jsx'
import Button from './components/Button/Button.jsx';
import space1 from "./assets/space1.jpg"
import space2 from "./assets/space2.jpg"
/*
  Manejo de imagenes en vite
  
  1. Lo recomendado es siempre usar url
  
  2. Guardar imagen en alguna carpeta src
    - Al guardar en src las imagenes se deben importar explicitamente, y usarse la variable que se entrega, sino, vite asume que el proyecto no las requiere

  3. Guardar en la carpeta public
    - Estas no se deben importar y deben hacerse referencia a ellas asumiendo la raiz "/" como la carpeta public
*/
const backgrounds = [space1, space2, "./space3.jpg", "./space4.jpg"];
function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length - 1)]
  
  const [phraseObj, setPhraseObj] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground)
  
  const changePhrase = () => {
    let newPhrase = getRandomPhrase()
    
    while(newPhrase.phrase === phraseObj.phrase){
      newPhrase = getRandomPhrase();
    }

    setPhraseObj(newPhrase);
  }

  const changeBackground = () => {
    let newBackground = getRandomBackground()
    
    while(newBackground === background){
      newBackground = getRandomBackground();
    }

    setBackground(newBackground);
  }

  function handlerClick() {
      changePhrase();
      changeBackground();
  }
  
  return (
    <div className='container_app' style={{backgroundImage: `url("${background}")`}}>
      <h1>INFOGALAX</h1>
      <Phrase phrase={phraseObj.phrase}/>
      <div className='btn_container'>
        <Button handlerClick={handlerClick}/>
      </div>
      <p>
        Author: <b>{phraseObj.author}</b>
      </p>
      {/* <div className='planet'></div> */}
    </div>
  )
}

export default App
