import { observer } from 'mobx-react-lite'
import {FC, useContext, useState} from 'react'
import { Context } from '../../..'
import UserService from '../../../services/UserService'

const Avatar:FC =()=>{
    const {store} = useContext(Context)
    const [NewUserName, setUserName] = useState(store.user.userName)

    async function changeUserName(userName:string){
        try{
          const response = await UserService.changeUserName(userName)
          console.log(response.data)
        }catch(e){
          console.log(e)
        }
      }


    return(
        <div>
            <div>
                <h3>{store.user.userName}<button onClick={()=>{changeUserName(NewUserName)}} className="btn btn-primary">Change</button></h3>
                <input className ="form-control"
                onChange={e=> setUserName(e.target.value)}
                type="text"
                placeholder="New User Name"/>
                <img/>
                <div>
                    {store.user.email}
                </div>
            </div>
        </div>
    )
}

export default observer(Avatar)