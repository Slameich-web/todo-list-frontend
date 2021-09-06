import { observer } from "mobx-react-lite"
import {FC, useContext, useState} from "react"
import { Context } from "../../../index"
import LoginForm from "../LoginForm/LoginForm"

const RegistrationForm: FC = ()=>{
const[email, setEmail] = useState<string>('')
const[password, setPassword] = useState<string>('')
const[userName, setUserName] = useState<string>('')
const [haveAccount, setHaveAccount] = useState(true)
const {store} = useContext(Context)

if(!haveAccount){
    return <LoginForm/>
}



function goBack(){
    store.errorMessage=''
    setHaveAccount(!haveAccount)
    
}

function registrationFunc(){
    store.registration(email.toLowerCase(), password, userName)
}

return(
    <div className="login-container container col-md-3">
        <div>
            <label>Email</label>
            <input className ="form-control loginInput"
                onChange={e=> setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"/>
            <label>Login</label>
            <input className ="form-control passwordInput"
                onChange={e=> setUserName(e.target.value)}
                value={userName}
                type="text"
                placeholder="userName"/>
            <label>Passowrd</label>
            <input className ="form-control passwordInput"
                onChange={e=> setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"/>
            <button className="btn btn-primary buttonRegistration" onClick={()=>registrationFunc()}>Создать аккаунт</button>
            <button className="btn btn-primary buttonRegistration" onClick={()=>goBack()}>Войти</button>
        </div>
        <div>{store.errorMessage}</div>
    </div>
        
    )
}
export default observer(RegistrationForm)