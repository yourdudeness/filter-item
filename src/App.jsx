import { useMemo, useState } from "react";
import Monsters from "./Monsters/Monsters";

function App() {
  const [searchUsers, setSearchUsers] = useState("");
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

  const filteredMonsters = useMemo(
    () => {
      if( searchUsers === ""){
        return monsters
      }else{
        return monsters.filter(item=> item.name.includes(searchUsers) === true)
      }
    },
    [searchUsers],
  )

  return (
    <>
      <div className="input-search">
        <input type="text" onChange={handleFindUsers} value={searchUsers}/>
      </div>
      {filteredMonsters.map((item) => {
        return <Monsters id={item.id} data={item} />;
      })}
    </>
  );
}

export default App;
