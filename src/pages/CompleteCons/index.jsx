import { Link } from "react-router-dom";
import Service4 from "../../assets/images/completecons.png"
import Real from "../../assets/images/real.png"


export function CompleteCons() {
    return <>
    <div>
        <img src={Service4} alt={FotoConsultoria} />
        <p> 
        Identificação do seu estilo pessoal, Análise do closet, Limpeza, ESCOLHAS do que representa você E para finalizar Entrega do dossiê.
        </p>
        <img src={Real} alt={BrazilMoney}/>
        <p>2.500  </p>

        <button> Comprar </button>
    </div>

    </>
}