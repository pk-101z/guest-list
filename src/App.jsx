import { getList } from "./api/getList";
import { useEffect, useState } from "react";
import { GuestList } from "./components/GuestList";
import { getListById } from "./api/getList";
import { GuestDetails } from "./components/GuestDetails";
export default function App() {
  const [guest, setGuest] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [id, setId] = useState(null);
  // fetch guest list
  useEffect(() => {
    async function loadGuest() {
      try {
        const data = await getList();
        setGuest(data);
      } catch (error) {
        console.error("XRROR", error);
      }
    }
    loadGuest();
  }, []);
  // fetch single recipe
  
useEffect(() => {
  if (!id) return;

  async function singleGuest() {
    try {
      const data = await getListById(id);
      setSelectedGuest(data);
    } catch (error) {
      console.error("error-single", error);
    }
  }

  singleGuest();
}, [id]);


  return (
    <>
      <main className="container">
          <h1>Guests</h1>
        {id ? <GuestDetails guest={selectedGuest} setId={setId} /> : <GuestList setId={setId} guest={guest} />}
        
        
      </main>
    </>
  );
}

