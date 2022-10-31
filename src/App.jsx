import { useMemo } from "react";
import { useCallback, useState } from "react";
import Monsters from "./Monsters/Monsters";

function App() {
  let [searchUsers, setSearchUsers] = useState("");
  const monsters = [
    { id: 0, name: "Jhon" },
    { id: 1, name: "Mickel" },
    { id: 2, name: "Maxim" },
    { id: 3, name: "Benedict" },
    { id: 4, name: "Peter" },
  ];

  const handleFindUsers = (e) =>{
    setSearchUsers(e.target.value)
  }

  let filteredMonsters = useMemo(
    () => {
      if( searchUsers === ""){
        return monsters
      }else{
        return [...monsters].filter(item=> item.name.indexOf(searchUsers) > -1)
      }
    },
    [searchUsers],
  )

  return (
    <div>
      <div className="input-search">
        <input type="text" onChange={(e)=>handleFindUsers(e)} value={searchUsers}/>
      </div>
      {filteredMonsters.map((item) => {
        return <Monsters id={item.id} data={item} />;
      })}
    </div>
  );
}

export default App;
