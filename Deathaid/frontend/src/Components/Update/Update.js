import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import {useParams} from 'react-router';



export const Update = () => {
    
    const [inputs, setInputs] = useState({
        member_id: "",
        name: "",
        month: "",
        amount: "",
        Total: ""
    });
    const history = useNavigate();
    const id = useParams().id;


    useEffect(() => {
        const fetchHandlerthen= async () => {
            return await axios.get(`http://localhost:5000/deathaid/${id}`).then((res) => res.data).then((data) => setInputs(data.deathaid));
        }
        fetchHandlerthen();
    }, [id]);

        const sendRequest = async () => {
        await axios.put(`http://localhost:5000/deathaid/${id}`, inputs).then((res) => res.data).then(() => history("/DeathaidHomePage"));
}

 //handleChange function
 const handleChange = (e) => {
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }));
};

//handleSubmit function
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/DeathaidHomePage"));
};



  return (
    <div>
        <h1>Update</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='member_id' value={inputs.member_id} onChange={handleChange} placeholder='Member ID' />
            <input type="text" name='name' value={inputs.name} onChange={handleChange} placeholder='Name' />
            <input type="text" name='month' value={inputs.month} onChange={handleChange} placeholder='Month' />
            <input type="text" name='amount' value={inputs.amount} onChange={handleChange} placeholder='Amount' />
            <input type="text" name='Total' value={inputs.Total} onChange={handleChange} placeholder='Total' />
            <button>Update</button>
        </form>
    </div>
  )
}
