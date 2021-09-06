import { observer } from "mobx-react-lite";
import {FC, useState} from "react";
import { useContext } from "react";
import { Context } from '../../../index'
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import '../login.css'

const LoginForm: FC = () =>{
    const[email, setEmail] = useState<string>('')
    const[password, setPassword] = useState<string>('')
    const [haveAccount, setHaveAccount] = useState(true)
    const {store} = useContext(Context)
    if(!haveAccount){
        return <RegistrationForm/>
    }

    function goBack(){
        store.errorMessage=''
        setHaveAccount(!haveAccount)
    }

    return(
        <div className="login-container container col-md-3">
            <div className='loginText'>
                Войти в систему
            </div>
            <div>
                <label>Login</label>
                <input
                    className ="form-control loginInput"
                    onChange={e=> setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email"
                />
                <label>Passowrd</label>
                <input
                    className ="form-control passwordInput"
                    onChange={e=> setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
            />
            </div>
            <div className="buttonsContainer">
                <button className="btn btn-success buttonLogin" onClick={()=>store.login(email.toLowerCase(), password)}>Войти</button>
                <button className="btn btn-primary buttonRegistration" onClick={()=>goBack()}>Регистрация</button>
            </div>
            <div>{store.errorMessage}</div>
        </div>
    )
}
export default observer(LoginForm)