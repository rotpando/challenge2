import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let data = require("./component/data/db.json");
console.log(data)
function App() {
  return (
    <div className='App'>
      <h1>Challenge: Rodrigo de Sarasqueta</h1>
      <hr/>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<h2>Ruta inexistente.</h2>} />
        {data.map((item, i)=>{
          let transcripcion = item.transcripcion.replaceAll("<br>","\n")
          return (<Route path={item.idVideo} element={
          <><div><h2>Nombre del cliente: {item.cliente}</h2></div>
          <br/>
          <div><h2>Test: Test de usabilidad en el sitio web</h2></div>
          <br/>
          <div><h2>Testeador: # {i+1}</h2></div>
          <br/>
          <iframe width="560" height="315" src={item.linkVideo} frameBorder="0" allowFullScreen></iframe>
          <br/>
          <div><h2>Transcipción</h2>
            <br/>
            <div className='textBoxContainer'><div className="textBox">{transcripcion}</div></div>
          </div>
          <div>
            <h2>Tareas</h2>
            <p>{item.escenario}</p>
            <hr/>
            {item.preguntas.map((itemData,index)=>{
              console.log(itemData)
              return (<><p>Tarea {index+1}:</p><br/><p>{itemData.texto}</p><br/><p>{itemData.respuesta}</p><p className='rojo'>Duración de la tarea: {itemData.tiempo}</p><hr/></>)
            })}
          </div>
          </>
          } />)
        })}
        
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
