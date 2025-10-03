export function GuestList ({ guest, setId }) {
    return(
    <>
        <h1 className="title">Guest List</h1>
    { guest.length === 0 ? (
       <p>Guest List Empty</p>
    ) : (
        <ul className="list">
            {guest.map((guest) => {
            return (
                <li onClick={() => setId(guest.id)} key={guest.id} className="list-item">
                <span>{guest.name}</span>
                </li>
            )
            })}
        </ul>
    )}
    </>
)}