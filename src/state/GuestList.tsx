import { useState } from "react";



const GuestList: React.FC = () => {

  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  

  const handleClick = () => {
    setGuests([
      ...guests, guestName
    ]);

    setGuestName("");
  }


  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map(guest =>{
          return <li key={guest}>{ guest }</li>
        })
        }
      </ul>
      <input value={guestName} onChange={(evt) => { setGuestName(evt.target.value) }} />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  )
};

export default GuestList;