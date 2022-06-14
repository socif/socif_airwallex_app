import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Succeed = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/redirect",{ replace: true });
        }, 2000)
    }, [])
    return (
        <div>
            Payment Succeed!
        </div>
    );
}
 
export default Succeed;