import { useContext } from 'react';
import { Context } from './index';
import LoginForm from './components/LoginWindow/LoginForm/LoginForm';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { IUser } from './models/IUser';
import UserService from './services/UserService';
import RegistrationForm from './components/LoginWindow/RegistrationForm/RegistrationForm';
import MainPage from './components/MainPage/MainPage';


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
      <MainPage/>
    </div>
  );
}

export default observer(App);
