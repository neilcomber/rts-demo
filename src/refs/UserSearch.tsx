import { useState, useRef, useEffect } from 'react';


const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 22 },
  { name: 'Michael', age: 20 }
];

const UserSearch = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();
  
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus()
  }, [])
  
  const handleClick = () => {
    const foundUser = users.find((user) => {
      return user.name === searchTerm;
    });
      setUser(foundUser)
  };
  

  return (
    <div>
      User Search

      <input ref={inputRef}  value={searchTerm} onChange={ (evt)=>{setSearchTerm(evt.target.value)}} />
      <button onClick={handleClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
}

export default UserSearch;