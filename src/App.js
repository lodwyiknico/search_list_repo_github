import SearchCom from "./molecules/SearchCom";
import ListRepo from "./molecules/ListRepo";

const App = () => {
  return (
    <div className="container mx-auto px-20">
      <div className="flex justify-center ">
        <h1 className="text-3xl my-4 font-bold text-white">
          Search Repo Users Github
        </h1>
      </div>
     <SearchCom/>  
     <ListRepo/>
    </div>
  );
}

export default App;
