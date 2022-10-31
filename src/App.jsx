import { useMemo, useState } from "react";
import Monster from "./Monsters/Monster";

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
        return monsters.filter(item=> item.name.includes(searchUsers))
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
        return <Monster key={item.id} data={item} />;
      })}
    </>
  );
}

export default App;
