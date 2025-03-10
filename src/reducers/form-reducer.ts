import { calcularDias, resultadoTabalaISR, tablaISR2025, typetablaISR2025 } from "../functions"
import { Aguinaldo } from "../types"

export type FormAction = {
    type: "calcular-aguinaldo", payload: { newform : Aguinaldo}
}

type tableISR2025 = {
    itemsisr : typetablaISR2025
}

export type FormState = {
    aguinaldo : number,
    isr: number,
    total: number
}

export const initialState: FormState = {
    aguinaldo : 0,
    isr: 0,
    total: 0  
}

export const formReducer = (state: FormState, action: FormAction) => {

    if (action.type === 'calcular-aguinaldo') {
        const sueldoMensual = Number(action.payload.newform.total);
        const UMA = 113.14;

        //Calcular el salario diario
        let salarioDiario = Number(action.payload.newform.total) / 30

        // Aguinaldo bruto
        const AGUINALDO_BRUTO = salarioDiario * 15
        console.log("AGUINALDO_BRUTO: ", AGUINALDO_BRUTO);

        //Obtener la parte exenta y gravable del aguinaldo
        let montoExento = (30 * UMA).toFixed(2)

        let parteGravable = (AGUINALDO_BRUTO - Number(montoExento)).toFixed(2)
        
        // Calular el ISR retenido

        let ingresoMensual = (sueldoMensual + Number(parteGravable)).toFixed(2) // Ingreso Mensual Total

        var obj = resultadoTabalaISR(Number(ingresoMensual))

        let LI = (Number(ingresoMensual) - obj!.limiteInferior).toFixed(2)//Excedente sobre Límite Inferior
        
        let porcentajeExc = obj!.porcentajeExcedente / 100    

        let impMarg = (Number(LI) * porcentajeExc).toFixed(2) // Impuesto Marginal

        let isrTotal = (obj!.cuotaFija + Number(impMarg)).toFixed(2) // ISR Total


        // Calcular ISR del Salario Mensual

        let objTablaISR = resultadoTabalaISR(sueldoMensual)

        let LIsueldoMen = sueldoMensual - objTablaISR!.limiteInferior //Excedente sobre Límite Inferior con el sueldo mensual

        let porcentaje = objTablaISR!.porcentajeExcedente / 100

        let IM = (LIsueldoMen * porcentaje).toFixed(2)

        let isrTotalSM = (objTablaISR!.cuotaFija + Number(IM)).toFixed(2)

        const ISR_RETENIDOA = Number(isrTotal) - Number(isrTotalSM)

        console.log("ISR_RETENIDOA: ", ISR_RETENIDOA);
        
        //Calcular el Aguinaldo Neto
        const AGUINALDO_NETO = AGUINALDO_BRUTO - ISR_RETENIDOA

        console.log("AGUINALDO_NETO: ", AGUINALDO_NETO);

        return {
            ...state,
            aguinaldo: AGUINALDO_BRUTO,
            isr: ISR_RETENIDOA,
            total: AGUINALDO_NETO
        }
    }

    return state
}


