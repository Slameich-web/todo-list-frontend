import {FC, useContext} from "react";
import { Context } from "../..";
import Avatar from "./Avatar/Avatar";
import './mainPage.css'

const MainPage:FC = ()=>{
    const {store} = useContext(Context)

    return(
        <div className="container">
            <div className="logout">
                <button className="btn btn-info" onClick={()=>store.logout()}>Выйти</button>
            </div>
            <Avatar/>
        </div>
    )
}
export default MainPage