import { useEffect, useState } from "react";
import SearchCom from "./molecules/SearchCom";
import ListRepo from "./molecules/ListRepo";
import { Api } from "./utils/Helper";

const App = () => {
  const [username,setUsername] = useState('lodwyiknico')
  const [repo, setRepo] = useState([])
  const [mssg,setMssg] = useState('')
  useEffect(()=>{
    searching()
  },[])
  const searching = async() => {
    const resp = await Api(username)
    if(resp.stat === 0){
      setRepo(resp.data)
      if(resp.data.length > 0){
        setMssg('')
      }else{
        setMssg('No Data Repo')
      }
    }else{
      setRepo(resp.data)
      setMssg(resp.message)
    }
  }
  return (
    <div className="container mx-auto px-20">
      <div className="flex justify-center ">
        <h1 className="text-3xl my-4 font-bold text-white">
          Search Repo Users Github
        </h1>
      </div>
     <SearchCom username={username} setUsername={setUsername} searching={searching}/>  
     {repo.length > 0 ?
        <ListRepo />
        :
        <div className="flex justify-center">
          {mssg}
        </div>
      }
    </div>
  );
}

export default App;
