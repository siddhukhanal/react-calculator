import {ACTIONS} from './App'
export default function OperationButton({dispatch,operation}){
<button>1</button>
return <button onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})}
>
    {operation}
    </button>

}