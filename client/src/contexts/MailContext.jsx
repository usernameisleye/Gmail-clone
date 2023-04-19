import { createContext } from "react";

export const MailContext = createContext();

const MailContextProvider = (props) => {
    return ( 
        <MailContext.Provider>
            { props.children }
        </MailContext.Provider>
     );
}
 
export default MailContextProvider;