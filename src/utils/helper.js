const setAuthToken = (value)=>{
    const token = `Bearer ${value}`
    localStorage.setItem("authorization",token)

}

const getAuthToken  = ()=>{
    const token = localStorage.getItem("authorization")
    return token
}


export {setAuthToken, getAuthToken}