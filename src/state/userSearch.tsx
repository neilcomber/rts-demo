import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 22 },
  { name: 'Michael', age: 20 }
];

const UserSearch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<{name: string, age: number} | undefined>();
  
  const handleClick = () => {
    const foundUser = users.find((user) => {
      return user.name === searchTerm;
    });
      setUser(foundUser)
  };
  

  return (
    <div>
      User Search

      <input value={searchTerm} onChange={ (evt)=>{setSearchTerm(evt.target.value)}} />
      <button onClick={handleClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
}

export default UserSearch;