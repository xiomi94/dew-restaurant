import './Spinner.css';

function Spinner({ loading = false }) {
  
  if (!loading) return null;

  return (
    <div className="spinner-overlay">
      <div className="spinner" />
    </div>
  );
}

export default Spinner;