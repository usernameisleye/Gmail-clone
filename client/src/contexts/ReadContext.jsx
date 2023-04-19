import { createContext, useReducer } from "react";

export const ReadContext = createContext();

export const readReducer = (state, action) =>{
    switch(action.type){
        case "READ":
            return{
                isRead: action.payload
            }
        case "UNREAD":
            return{
                isRead: action.payload
            }
        default:
            return state
    }
}

const ReadContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(readReducer, { isRead: false })

    return ( 
        <ReadContext.Provider value={{ ...state, dispatch }}>
            { children }
        </ReadContext.Provider>
     );
}
 
export default ReadContextProvider;