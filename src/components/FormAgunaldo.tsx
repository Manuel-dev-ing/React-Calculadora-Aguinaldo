import { Dispatch, useState } from "react"
import { FormAction } from "../reducers/form-reducer"

type tipProps = {
  dispatch: Dispatch<FormAction>
}

const initialState = {
  aguinaldo: 15,
  total: 0,
  isr: "ISR"
}

export default function FormAgunaldo({dispatch}: tipProps) {

  const [form, setForm] = useState(initialState)
  console.log("FORM: ", form);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
    
  }
  
  const isValidForm = () => {

    const {total} = form

    return total !== 0 && total > 0

  }


  console.log("is valid form: ", isValidForm());
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit...");
    
    dispatch({type: "calcular-aguinaldo", payload: {newform: form}})

  }

  return (
    
    <>

      <form className="row g-3" onSubmit={handleSubmit}>
         
          <div className="col-md-6">
            <label htmlFor="aguinaldo" className="form-label fw-semibold">Dias de Aguinaldo</label>
            <input type="number" className="form-control" id="aguinaldo" min={15} value={form.aguinaldo} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="total" className="form-label fw-semibold">Salario Mensual</label>
            <input type="number" className="form-control" id="total" min={0} value={form.total} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="isr" className="form-label fw-semibold">Impuesto</label>
            <input type="text" className="form-control" id="isr" value={form.isr} readOnly/>
          </div>
      
          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary" disabled={!isValidForm()}>Calcular</button>
          </div>

      </form>
    
    </>


  )
}
