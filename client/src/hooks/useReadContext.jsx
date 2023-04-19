import { ReadContext } from "../contexts/ReadContext";
import { useContext } from "react";

export const useReadContext = () => {
    const context = useContext(ReadContext);

    if(!context){
        throw Error("useReadContext must be used inside a ReadContextProvider");
    }

    return context
}