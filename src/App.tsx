import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FormAgunaldo from "./components/FormAgunaldo";
import { useReducer, useState } from "react";
import ResultadoAguinaldo from "./components/ResultadoAguinaldo";
import { formReducer, initialState } from "./reducers/form-reducer";

function App() {

  const [data, dispatch] = useReducer(formReducer, initialState)

  console.log("data useReducer: ", data);
  
  return (
    <>
      <nav className="navbar navbar-dark bg-body shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-primary fw-bold">CalculaTuAguinaldo</span>
        </div>
      </nav>
        <div className="mt-5 col-md-12 d-flex justify-content-center">
          <div className="col-7  d-flex flex-column justify-content-center">
            <p className="mb-4 fs-1 text-center fw-bold text-primary">Calcula tu Aguinaldo Fácil y Rápido</p>
            <p className="text-center fs-5">Ingresa tus datos y descubre cuánto te corresponde de aguinaldo en segundos. ¡Sin complicaciones!</p>
          </div> 
        
        </div>

      <section className="container mt-3 border border-2 rounded d-flex flex-column justify-content-center p-3">

        <div className="row g-3">
    
          <FormAgunaldo
            dispatch={dispatch}
          />
        
        </div>        
      </section> 


      <section className="container-fluid border mt-4 bg-primary bg-opacity-10 ">

        <ResultadoAguinaldo
          data={data}
        
        />

      </section>

    
    </>

  )

}

export default App
