import "./property.css"
import { useParams } from "react-router-dom"
import UseFetch from "../../utils/customFetch/customFetch";

export default function Property() {
  const { id } = useParams();
  const { data, isPending, error } = UseFetch('http://localhost:8000/data/' + id);
  console.log('id parameter is ', id);
  console.log(data);

  return (
    <div className="property container paddings">
      <div className="property-content">
        <p>{data.title}</p>
      </div>
    </div>
  )
}