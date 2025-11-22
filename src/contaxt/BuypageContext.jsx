import { createContext, useState } from "react";
export const BuypageContext = createContext();
const BuyProvider = ({children})=> {
const [OpenBuy , setOpenBuy]=useState(false);
 const [ BuyItem, setBuyItem] = useState([""]);

return(
    <BuypageContext.Provider value={{OpenBuy,setOpenBuy,BuyItem,setBuyItem}} >
        {children}
    </BuypageContext.Provider>
    )
}


export default BuyProvider;