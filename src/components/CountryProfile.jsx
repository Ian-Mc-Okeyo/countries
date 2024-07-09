import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const CountryProfile = () =>{
    const location = useLocation()
    const country = location.state
    console.log(country)
    return(
        <>
            <NavBar/>
            <div className="country-profile">
                <h1 style={{color: '#0dcaf0'}}>{country.name.common}</h1>
                <br/>
                <div className="row justify-content-center image-section">
                    <div className="col-6 mb-2 image-subsection">
                        <img src={country.flags.png} className="flag"/>
                    </div>
                    <div className="col-6 mb-2">
                        <img src={country.coatOfArms.png} className="coatOfArms"/>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6" style={{textAlign: "left"}}>
                            
                            <h3>Capital: {country.capital}</h3>
                            <h3>Population: {country.population}</h3>
                    </div>
                    <div className="row col-6 justify-content-right">
                        <h4>Borders</h4>
                        {
                            country.borders.map((border)=>{
                                return(
                                    <div className="col-md-6">
                                        <h4>{border}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default CountryProfile