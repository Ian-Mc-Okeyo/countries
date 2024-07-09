import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import axios from "axios";
import CountryCard from "./CountryCard";
import { Atom } from "react-loading-indicators";
import { Commet } from "react-loading-indicators";

const CountriesContainer = () =>{
    const [countries, setCountries] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((resp)=>{
            console.log(resp)
            setCountries(resp.data)
            setIsLoaded(true)
           
        }).catch((err)=>{
            console.error(err)
            setIsLoaded(true)
        })
    }, [])


    return(
        <>
            <NavBar/>
            <h1>{isLoaded ? "Countries": null}</h1>
            <div className="row justify-content-around">
                {
                    isLoaded ? countries.map((country, index)=>{
                        return(
                            <>
                               
                                <div className="col-md-3" key={index}>
                                    <CountryCard country={country}/>
                                </div>
                            </>
                           
                        )
                    })
                    :
                    <Commet color="#0dcaf0" size="large" text="" textColor="" />
                }
                
            </div>
        </>
    )
}

export default CountriesContainer;