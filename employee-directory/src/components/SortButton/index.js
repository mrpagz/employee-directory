import "./style.css";

function Sort({ sort }) {
  return (
    <button type="submit" 
    className="btn btn-info" 
    onClick={sort}>
      
    Sort
    </button>
  );
}

export default Sort;
