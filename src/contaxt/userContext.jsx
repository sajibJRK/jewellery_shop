import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 const [ gest , setgest] = useState(false);
  const userdata ={
            correctUserName : "admin",
            correctPassword : "admin",
            name :"Sajib kumar",
            image : "https://i.ibb.co.com/0V2ccDBB/Picsart-25-10-14-00-14-37-274-1.jpg",
  }
  const gestdata ={
    name: gest,
    image : "https://i.ibb.co.com/xqPV97s1/Guest-user.png"
  }
  

  const login = (userName, password) => {
    if (userdata.correctUserName === userName && userdata.correctPassword === password) {
      setUser({ userName });
      return { success: true };
    } else {
      return {
        success: false,
        message: "Invalid username or password",
      };
    }
  };
  
  const logout = () => setUser(null);
 //tost
const [toast, setToast] = useState({ text: "", type: "", visible: false });

  return (
    <UserContext.Provider value={{ user,setUser, login, logout, userdata, gest, setgest, gestdata,toast,setToast }}>
      {children}
    </UserContext.Provider>
  );
};
