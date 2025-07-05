import {createContext, useState, useEffect} from "react"

export const Appcontext = createContext()
import { dummyCourses } from "../assets/assets"
import {useNavigate } from "react-router-dom";

export const Appcontextprovider = (props)=>{
    // const navigate = useNavigate();
    const [allcources , setallcources] = useState([]);


    const fetchcources = async ()=>{
        setallcources(dummyCourses);
    }

     useEffect (() => {
      fetchcources();
    
    }, [])
    

const value={
 allcources, 
}

return (
    <Appcontext.Provider value={value}>
        {props.children}
    </Appcontext.Provider>
)
} 