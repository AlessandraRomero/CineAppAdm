import axios from 'axios'

export const api = axios.create(
    {
        baseURL:'http://10.10.32.8:8087'
    }
)

export const listarCategorias = async () =>{
   let response = await api.get('categories')
   return response.data
}