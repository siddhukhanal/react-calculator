import {ACTIONS} from './App'
export default function DigitButton({dispatch,digit}){
<button>1</button>
return <button onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit}})}
>
    {digit}
    </button>

}