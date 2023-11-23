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
                                    <td className={categoria === "Abaixo do Peso" ? "bg-primary fw-bold" : ""}>&lt; 18.5</td>
                                    <td className={categoria === "Abaixo do Peso" ? "bg-primary fw-bold" : ""}>Abaixo do Peso</td>
                                </tr>
                                <tr >
                                    <td className={categoria === "Normal" ? "bg-primary fw-bold" : ""}>18.5 - 24.9</td>
                                    <td className={categoria === "Normal" ? "bg-primary fw-bold" : ""}>Normal</td>
                                </tr>
                                <tr>
                                    <td className={categoria === "Sobrepeso" ? "bg-primary fw-bold" : ""}>25 - 29.9</td>
                                    <td className={categoria === "Sobrepeso" ? "bg-primary fw-bold" : ""}>Sobrepeso</td>
                                </tr>
                                <tr >
                                    <td className={categoria === "Obesidade Grau 1" ? "bg-primary fw-bold" : ""}>30 - 34.9</td>
                                    <td className={categoria === "Obesidade Grau 1" ? "bg-primary fw-bold" : ""}>Obesidade Grau 1</td>
                                </tr>
                                <tr>
                                    <td className={categoria === "Obesidade Grau 2" ? "bg-primary fw-bold" : ""}>35 - 39.9</td>
                                    <td className={categoria === "Obesidade Grau 2" ? "bg-primary fw-bold" : ""}>Obesidade Grau 2</td>
                                </tr>
                                <tr>
                                    <td className={categoria === "Obesidade Grau 3" ? "bg-primary fw-bold" : ""}>&gt;= 40</td>
                                    <td className={categoria === "Obesidade Grau 3" ? "bg-primary fw-bold" : ""}>Obesidade Grau 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : <p className="text-light h5">Preencha os campos e clique em ver resultado para exibir sua classificação na tabela</p>
                }
            </div>
        </>
    )
}


export default Result