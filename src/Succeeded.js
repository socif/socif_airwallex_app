import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Succeeded = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/redirect",{ replace: true });
        }, 3000)
    }, [])
    return (
        <div>
            Payment Succeeded!
        </div>
    );
}
 
export default Succeeded;