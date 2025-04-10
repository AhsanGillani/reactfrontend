import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
const handleClick = () => {
    navigate(-1);
};
    
    return (
        <div>
        <h1>This is an abut page</h1>
    
        <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded">
        Go Back
      </button>
      </div>);
};

export default About;