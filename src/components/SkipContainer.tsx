import { useEffect, useState } from "react";
import apiService from "../apiService";

function SkipContainer() {
    const[skipDetails,setSkipDetails]=useState([]);

    useEffect(()=>{
       ( async ()=>{
            const out=await apiService.getSkipDetails();
            console.log("out from skipcontainer: ",out);
            setSkipDetails(out);
        })();
    },[])



    return (
      <>
      <h1>hi, i am skip container</h1>
      {
        skipDetails.map((skipItem:Skip)=>{
           return  <div>
                <h1>{skipItem.size}</h1>
                <h1>{skipItem.id}</h1>
                <h1>{skipItem.price_before_vat}</h1>
            </div>


        })
      }
  
      </>
    )
  }
  
  export default SkipContainer
  