export function GuestDetails({ guest, setId }) {
  return (
    <article className="card"> 
      <button className="btn" onClick={() => setId(null)}>Back</button>
      <h1 className="items">{guest?.name}</h1>
      <h2 className="items">{guest?.job}</h2>
      <h3 className="items">{guest?.email}</h3>
      <h3 className="items">{guest?.phone}</h3>
      <p className="items">{guest?.bio}</p>
      <p className="items">Cohort - {guest?.cohortId}</p>
    </article>
  );
}