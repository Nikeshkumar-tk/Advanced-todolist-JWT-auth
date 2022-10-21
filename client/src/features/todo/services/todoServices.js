import axios from '../../../axios'


export const getMyTodos = async(id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
          }
    }

    const res = await axios.post("/todos",{
        userId:id,
        
    },config)

    return res ? res.data : null
    
}

export const addTodo = async ( userData, token ) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
          }
    }
    const res = await axios.post("/todos/create",userData,config)

    console.log(res.data)
    return res ? res.data : null
}