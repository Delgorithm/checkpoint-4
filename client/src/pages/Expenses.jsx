import TrackExpenses from "../components/TrackExpenses";

function Expenses() {
  return (
    <>
      <p>Expenses</p>
      <TrackExpenses
        method="POST"
        action="http://localhost:3310/api/expenses/add"
      />
    </>
  );
}

export default Expenses;
