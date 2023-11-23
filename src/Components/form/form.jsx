import { useEffect, useState } from "react"
import Resultado from '../result/result'

const Form = () => {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc,setImc] = useState('')

    const calculaImc = (e) => {
        e.preventDefault()
        setImc((peso / (altura ** 2))* 10000)  
    }
    
    return (
        <form onSubmit={calculaImc} className="container d-flex align-items-center flex-column bg-warning">
            <input required className="p-2 form-control" type="text" placeholder="Digite seu peso em kg" onChange={e => setPeso(parseInt(e.target.value))} />
            <input required  className="my-2 form-control" type="text" placeholder="Digite sua altura em cm" onChange={e => setAltura(parseInt(e.target.value))} />
            <button className="btn btn-dark w-50" type="submit">Ver resultado</button>
            <h3>{imc}</h3>
            <Resultado imc={imc}/>
        </form>
    )
}

export default Form