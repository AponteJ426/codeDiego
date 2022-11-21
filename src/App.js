import React, { useEffect, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';


function App() {
  // if (desicion == 1) {

  const [ladoOne, setladoOne] = useState(0);
  const [ladotwo, setladotwo] = useState(0);
  const [ladoThree, setladoThree] = useState(0);

  const [angOne, setangOne] = useState(0);
  const [angTwo, setangTwo] = useState(0)
  const [angThree, setangThree] = useState(0);

  const [rederOne, setrederOne] = useState(false);
  const [renderTWo, setrenderTWo] = useState(false);
  const [renderThree, setrenderThree] = useState(false)
  const [renderFive, setrenderFive] = useState(false);
  const [renderSix, setrenderSix] = useState(false);
  const [renderSeven, setrenderSeven] = useState(false)
  const [renderEight, setrenderEight] = useState(false);


  useEffect(() => {

    if (ladoOne === ladotwo && ladoOne === ladoThree && ladotwo === ladoThree) {
      setrederOne(true)
    } else {
      setrederOne(false)
    }
    if ((ladoOne === ladotwo && ladoOne !== ladoThree) || (ladotwo === ladoThree && ladotwo !== ladoOne) || (ladoOne === ladoThree && ladoOne !== ladotwo)) {
      setrenderTWo(true)
    } else {
      setrenderTWo(false)
    }

    if (angOne === angTwo && angOne === angThree && angTwo === angThree) {
      setrenderFive(true)
    } else {
      setrenderFive(false)
    }

    if ((angOne === angTwo && angOne !== angThree) || (angTwo === angThree && angTwo !== angOne) || (angOne === angThree && angOne !== angTwo)) {
      setrenderSix(true)
    } else {
      setrenderSix(false)
    }
    if (angOne !== angTwo && angOne !== angThree && angTwo !== angThree) {
      setrenderSeven(true)
    } else { setrenderSeven(false) }

    if (angOne === 90 && angTwo !== 90 && angThree !== 90 || angOne !== 90 && angTwo === 90 && angThree !== 90 || angOne !== 90 && angTwo !== 90 && angThree === 90) {
      setrenderEight(true)

    } else {
      setrenderEight(false)
      if (ladoOne !== ladotwo && ladoOne !== ladoThree && ladotwo !== ladoThree) {
        setrenderThree(true)
      } else {
        setrenderThree(false)
      }
    }


  }, [ladoOne, ladotwo, ladoThree, angOne, angTwo, angThree]);



  const Equilatero = () => {
    return (
      <div className='cards'>
        <h2>
          El triangulo ingresado es equilatero, debido a que todos sus lados son iguales.
        </h2>
        <img src='image1.png' alt='equilatero' width={600} />
      </div>)
  }
  const Isoceles = () => {
    return (
      <div className='cards'>
        <h2>
          El triangulo ingresado es isoceles, debido a que posee dos lados iguales y uno diferente.
        </h2>
        <img src='/image3.png' alt='isoceles' width={600} />
      </div>)
  }
  const Escaleno = () => {
    return (
      <div className='cards'>
        <h2>
          El triangulo ingresado es escaleno, debido a que todos sus lados son distintos.
        </h2>
        <img src='/image2.png' alt='escaleno' width={600} />
      </div>)
  }
  const Rectangulo = () => {
    return (
      <div className='cards'>
        <h2>
          El triangulo ingresado es un triangulo rectangulo, debido a que uno de sus angulos internos es de 90 grados.
        </h2>
        <img src='/image4.png' alt='escaleno' width={600} />
      </div>)
  }


  return (
    <div className="App">
      <div className='navrbar'>
        <h3> Bienvenido , la aplicación con la que podras conocer las clasificaciones de los triangulos </h3>
      </div>
      <h1>Hallar el tipo de triangulo por sus lados</h1>
      <div className='trianguloLados'>

        <TextField
          label="lado 1"
          variant="filled"
          onChange={
            (event) => {
              setladoOne(event.target.value)
            }}
          className='textTriLado' />

        <TextField label="lado 2" variant="filled"
          onChange={
            (event) => {
              setladotwo(event.target.value)
            }}
          className='textTriLado' />

        <TextField label="lado 3 " variant="filled"
          onChange={
            (event) => {
              setladoThree(event.target.value)
            }}
          className='textTriLado' />
      </div>
      {rederOne && Equilatero()}
      {renderTWo && Isoceles()

      }
      {renderThree && Escaleno()
      }

      <h1>Hallar el tipo de triangulo por sus ángulos</h1>
      <div className='trianguloLados'>

        <TextField label="ángulo 1" variant="filled"
          onChange={
            (event) => {
              setangOne(parseInt(event.target.value))
            }}
          className='textTriLado' />

        <TextField label="ángulo 2" variant="filled"
          onChange={
            (event) => {
              setangTwo(parseInt(event.target.value))
            }}
          className='textTriLado' />

        <TextField label="ángulo 3 " variant="filled"
          onChange={
            (event) => {
              setangThree(parseInt(event.target.value))
            }}
          className='textTriLado' />
      </div>

      {renderFive && Equilatero()}
      {renderSix && Isoceles()}
      {renderEight && Rectangulo()}
      {renderSeven && Escaleno()}
    </div>
  );


}

export default App;

