
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    }

useEffect(() => {
axios.get("http://localhost:3000/api/products/getall")
.then((response)=>{
    // setMessage(JSON.stringify(response.data, null, 2)); // Pretty print JSON
    setMessage(response.data.message)
    console.log(response);
}).catch((e)=> {
    console.log(e);
    setMessage(e);
});
  
}, [])

    const [message, setMessage] = useState("nice");
    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600">hello</h1>
            <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded">
                Go to About
            </button>

            <h2>Product API Repsonse Is</h2>
            <p>{message}</p>
        </div>);
}

export default Home;
