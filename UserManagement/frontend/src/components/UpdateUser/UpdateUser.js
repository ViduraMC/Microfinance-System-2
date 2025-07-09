import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Nav/NavBar';


function UpdateUser() {

    const [ inputs, setInputs ] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(()=>{
        const fetchHandler = async ()=> {
            await axios 
            .get(`http://localhost:5000/users/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.user)); 
        };
        fetchHandler();
    },[id]);

    const sendRequest = async ()=>{
        await axios
        .put(`http://localhost:5000/users/${id}`,{
            name:String (inputs.name),
            gmail:String  (inputs.gmail),
            age:Number (inputs.age),
            address: String (inputs.address),
        })

         .then((res)=>res.data);
    };

    const handleChange =(e)=>{
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() =>
    history("/userdetails"));
  };


    return (
    <div>
    <NavBar />
      <h1>Update User</h1>

      <form onSubmit={handleSubmit}>
        Name : <input type="text" name="name" onChange={handleChange} value ={inputs.name} required></input><br></br>
        Gmail :<input type="text" name="gmail" onChange={handleChange} value ={inputs.gmail} required></input><br></br>
        Age : <input type="number" name="age" onChange={handleChange} value ={inputs.age} required></input><br></br>
        Address : <input type="text" name="address" onChange={handleChange} value ={inputs.address} required></input><br></br> 
        <button>Submit</button>

      </form>
    </div>
  );
};

export default UpdateUser;
