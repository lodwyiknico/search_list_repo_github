export const Api = async(username) => {
    try{
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const resp = await res.json()
    if(Array.isArray(resp)){
        return {stat:0,data:resp}
    }else{
        resp.stat = 1
        resp.data = []
        return resp
    }
    }catch(err){
        return {message:err,stat:2,data:[]}
    }
}