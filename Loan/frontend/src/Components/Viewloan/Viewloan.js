import React, {useState, useEffect} from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Displayloan from "../Displayloan/Displayloan";

const URL ="http://localhost:5000/loans"

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Viewloan() {

    const [loans, setLoans] = useState();
    useEffect(()=>{
        fetchHandler().then((data) => setLoans(data.loans))
    },[])
  
    return (
    <div>
      <Nav />
      <h1>Viewloan</h1>
      <div>
        {loans && loans.map((loans,i) => (
            <div key={i}>
            <Displayloan loans={loans}/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Viewloan;
