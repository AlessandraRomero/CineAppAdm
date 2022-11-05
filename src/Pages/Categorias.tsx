import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarCategorias } from "../api";

type Categoria = {
    id: string,
    name: string;
}

export function Categorias() {
    const [categorias, setCategorias] = useState(Array<Categoria>)

    useEffect(() => {
        const getData = async () => {
            setCategorias(await listarCategorias())
        }
        getData()
    }, [])

    return (
        <>
            <h1>categorias</h1>
            <Link to='nova-categoria'>Nova Categoria</Link>
            <div className="Categoria">
                {categorias.map((categoria) => <p>{categoria.name}</p>)}
            </div>
           
        </>
    )
}