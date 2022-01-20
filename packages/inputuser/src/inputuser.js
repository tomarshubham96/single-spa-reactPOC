import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';

export default function  inputuser(){
  
  const [userInfo,setuserInfo] = React.useState({});


  const handleClick = () => {
    let data = store.users;
    store.addUser(userInfo);    
    console.log('User Info2',userInfo);
    setuserInfo({'name':''});
  }

  const handleUserData = (event) =>{
    setuserInfo({'name': event.target.value})
  }
    
    return ( 
        <>
        <input type="text" value={userInfo.name} onChange={handleUserData} />
        <button type="submit" onClick={handleClick}>Add User</button>
        </>
     );
}

const inputuserLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: inputuser
  });
  
  export const bootstrap = inputuserLifecycles.bootstrap;
  export const mount = inputuserLifecycles.mount;
  export const unmount = inputuserLifecycles.unmount;
  
  