export type typetablaISR2025 = {
    limiteInferior: number,
    limiteSuperior: number,
    cuotaFija: number,
    porcentajeExcedente: number
}


export const tablaISR2025: typetablaISR2025[] = [
    { limiteInferior: 0.01, limiteSuperior: 746.04, cuotaFija: 0.00, porcentajeExcedente: 1.92 },
    { limiteInferior: 746.05, limiteSuperior: 6332.05, cuotaFija: 14.32, porcentajeExcedente: 6.40 },
    { limiteInferior: 6332.06, limiteSuperior: 11128.01, cuotaFija: 371.83, porcentajeExcedente: 10.88 },
    { limiteInferior: 11128.02, limiteSuperior: 12935.82, cuotaFija: 893.63, porcentajeExcedente: 16.00 },
    { limiteInferior: 12935.83, limiteSuperior: 15487.71, cuotaFija: 1182.88, porcentajeExcedente: 17.92 },
    { limiteInferior: 15487.72, limiteSuperior: 31236.49, cuotaFija: 1640.18, porcentajeExcedente: 21.36 },
    { limiteInferior: 31236.50, limiteSuperior: 49233.00, cuotaFija: 5004.12, porcentajeExcedente: 23.52 },
    { limiteInferior: 49233.01, limiteSuperior: 93993.90, cuotaFija: 9236.89, porcentajeExcedente: 30.00 },
    { limiteInferior: 93993.91, limiteSuperior: 125325.20, cuotaFija: 22665.17, porcentajeExcedente: 32.00 },
    { limiteInferior: 125325.21, limiteSuperior: 375975.61, cuotaFija: 32691.18, porcentajeExcedente: 34.00 },
    { limiteInferior: 375975.62, limiteSuperior: 475975.61, cuotaFija: 117912.32, porcentajeExcedente: 35.00 }
];



    export function calcularDias(fecha2 : string){
        let date = new Date()
        let day = `${(date.getDate())}`.padStart(2,'0');
        let month = `${(date.getMonth()+1)}`.padStart(2,'0');
        let year = date.getFullYear();

        var fecha1 = year+"-"+month+"-"+day 

        var date_1 = new Date(fecha1);
        var date_2 = new Date(fecha2);

        var day_as_milliseconds = 86400000;
        var diff_in_millisenconds = Number(date_1) - Number(date_2);
        var diff_in_days = diff_in_millisenconds / day_as_milliseconds;


        return diff_in_days;
    }

    export function resultadoTabalaISR(cantidad:number) {

        var obj = tablaISR2025.find( tramo => cantidad >= tramo.limiteInferior && cantidad <= tramo.limiteSuperior)

        return obj;
    }

  