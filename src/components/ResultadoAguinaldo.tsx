import { FormState } from "../reducers/form-reducer"

type ResultadoAguinaldoProps = {
  data: FormState
}

export default function ResultadoAguinaldo({data}: ResultadoAguinaldoProps) {

  return (
    <>
    
    <p className="mb-4 fs-1 text-center fw-bold text-primary mt-5">Los montos de tu aguinaldo son: </p>

        <section className="row d-flex justify-content-between p-3 gap-3">
        <div className="bg-light shadow-sm rounded col">

            <div className="d-flex flex-column text-center py-4">
            <p className="fw-semibold text-primary fs-5">Aguinaldo Bruto</p>
            <span className="fw-bold text-primary fs-3">$<span className="fw-bold text-primary fs-3">{data.aguinaldo}</span></span>
            </div>

        </div>
        
        <div className="bg-light shadow-sm rounded col ">
            
            <div className="d-flex flex-column text-center py-4">
            <p className="fw-semibold text-primary fs-5">ISR Retenido</p>
            <span className="fw-bold text-primary fs-3">$<span className="fw-bold text-primary fs-3">{data.isr}</span></span>
            </div>

        </div>

        <div className="bg-light shadow-sm rounded col ">
            <div className="d-flex flex-column text-center py-4">
            <p className="fw-semibold text-primary fs-5">Aguinaldo Neto</p>
            <span className="fw-bold text-primary fs-3">$<span className="fw-bold text-primary fs-3">{data.total}</span></span>
            </div>
        </div>

        </section>
    
    </>
  )
}
