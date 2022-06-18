import { useSelector } from "react-redux";

function Alert(props) {
    const alert = useSelector(state=>state.alert)

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div >
       {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show `} role="alert">
           <strong>{capitalize(alert.type)}</strong>: {alert.msg} 
        </div>}
        </div>
    )
}

export default Alert