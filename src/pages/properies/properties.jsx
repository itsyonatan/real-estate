
import "./properties.css"
import PropertyCard from "../../components/propertyCard/propertyCard"
import SearchBox from "../../components/searchBox/searchBox"
//import UseFetch from "../../utils/customFetch/customFetch";
//import { PuffLoader } from "react-spinners";
import {data} from "../../data/data"

export default function Properties() {

 // const { isPending, error } = UseFetch("http://localhost:8000/data");
  console.log(data);

  return (
    <div className="properties container paddings flexColCenter">
      <SearchBox />
      {/*error && <span>Error while Fetching data</span>*/}
      {/*isPending && <span className="flexCenter" style={{height: "60vh"}}>
        <PuffLoader
          height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading" 
        />
      </span>*/}
      {data && <div className="properties-content flexCenter">
        {
          data?.map((item) => (
            <PropertyCard item={item} key={item.id} />
          ))
        }
      </div>}
    </div>
  )
}