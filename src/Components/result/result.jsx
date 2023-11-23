import { useEffect, useState } from "react";

const Result = ({ imc }) => {
    const [categoria, setCategoria] = useState('');

    const exibeResultado = () => {
        switch (true) {
            case imc < 18.5:
                return 'Abaixo do Peso';
            case imc >= 18.5 && imc < 25:
                return 'Normal';
            case imc >= 25 && imc < 30:
                return 'Sobrepeso';
            case imc >= 30 && imc < 35:
                return 'Obesidade Grau 1';
            case imc >= 35 && imc < 40:
                return 'Obesidade Grau 2';
            case imc >= 40:
                return 'Obesidade Grau 3';
            default:
                return 'Não classificado';
        }
    }

    useEffect(() => {
        setCategoria(exibeResultado())
    }, [imc])

    return (
        <>
            <div className="container bg-dark p-3 mb-2 text-center">
                {imc != '' ? (
                    <>
                        <h3 className="text-light">{categoria}</h3>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>IMC</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&lt; 18.5</td>
                                    <td>Abaixo do Peso</td>
                                </tr>
                                <tr>
                                    <td>18.5 - 24.9</td>
                                    <td>Normal</td>
                                </tr>
                                <tr>
                                    <td>25 - 29.9</td>
                                    <td>Sobrepeso</td>
                                </tr>
                                <tr>
                                    <td>30 - 34.9</td>
                                    <td>Obesidade Grau 1</td>
                                </tr>
                                <tr>
                                    <td>35 - 39.9</td>
                                    <td>Obesidade Grau 2</td>
                                </tr>
                                <tr>
                                    <td>&gt;= 40</td>
                                    <td>Obesidade Grau 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ):<p className="text-light h5">Preencha os campos e clique em ver resultado para exibir sua classificação na tabela</p>
                }
            </div>
        </>
    )
}


export default Result