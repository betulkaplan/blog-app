import { createContext, useState, useEffect } from 'react';
import { userObserver } from '../firebase/auth';

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    userObserver(setCurrentUser);
    console.log('CUREENT USER', currentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
