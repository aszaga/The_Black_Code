import React from 'react';
import Cabecera from './CabeceraCalculo';
import Cuerpo from './cuerpocalculo';
function micomponente(){
    return (
        <section className="panel">
            <Cabecera titulo="Calculadora" 
                      nombre_clase="cabecera_calculo"
            />
            <Cuerpo/>
        </section>
    );
}
 
export default micomponente;