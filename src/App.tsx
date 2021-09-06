import { useContext } from 'react';
import { Context } from './index';
import LoginForm from './components/LoginWindow/LoginForm/LoginForm';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { IUser } from './models/IUser';
import UserService from './services/UserService';
import RegistrationForm from './components/LoginWindow/RegistrationForm/RegistrationForm';


function App() {
  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  }, [])

   async function getUsers(){
    try{
      const response = await UserService.fetchUsers()
      setUsers(response.data)
      console.log(response.data)
    }catch(e){
      console.log(e)
    }
  }

  if(store.isLoading){
    return(
      <div>Загрузка....</div>
    )
  }

  if(!store.isAuth){
    return(
      <div>
         <LoginForm/>
      </div>
     
    )
  }

  return (
    <div className="App">
      <h1>{store.isAuth ? `Пользователь авторизирован ${store.user.userName}` : 'АВТОРИЗИРУЙТЕСЬ'}</h1>
      <button onClick={()=>store.logout()}>Выйти</button>
      <div>
        <button onClick={()=>{getUsers()}}>Полчучить</button>
      </div>
      <div>
        {users.map(user=><div key={user.email}>{user.email}</div>
        )}
      </div>
    </div>
  );
}

export default observer(App);
