import React,{useState} from 'react';
import store from 'store/store';

export default function inputuser(){

  const [userInfo,setuserInfo] = useState({});

  const handleClick = () => {
    let data = store.users;
    store.addUser(userInfo);    
    console.log('User Info2',userInfo);
    setuserInfo({'name':''});
  }

  const handleUserData = (event) =>{
    console.log('Name',event.target.value);
    setuserInfo({'name': event.target.value})
  }
    
    return ( 
        <div>
          <p style={{margin: '5px 0'}}>Add Names:</p>
          <input type="text" value={userInfo.name} onChange={handleUserData} />
          <button style={{margin: '4px'}} type="submit" onClick={handleClick}>Add User</button>          
          <hr />
        </div>
     );
}
