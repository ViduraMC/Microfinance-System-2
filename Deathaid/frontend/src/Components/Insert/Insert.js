import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Insert = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        member_id: "",
        name: "",
        month: "",
        amount: "",
        Total: "",
    });

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
    }

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/deathaid", inputs).then((res =>res.data));
    }

    //return part
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Add Payment</h1>
            <input type="text" name='member_id' value={inputs.member_id} onChange={handleChange} placeholder='Member ID' />
            <input type="text" name='name' value={inputs.name} onChange={handleChange} placeholder='Name' />
            <input type="text" name='month' value={inputs.month} onChange={handleChange} placeholder='Month' />
            <input type="text" name='amount' value={inputs.amount} onChange={handleChange} placeholder='Amount' />
            <input type="text" name='Total' value={inputs.Total} onChange={handleChange} placeholder='Total' />
            <button>Add</button>
            </form>
        </div>
    )
}

export default Insert;