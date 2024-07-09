import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";


const CountryCard = ({country}) => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const viewMore = () =>{
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
            navigate("/country-profile", {state: country})
        }, 2500)
        
    }
    return (
        <>
            <div className="card mb-3">
                <img className="card-img-top" src={country.flags.png} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a role="button" className="btn btn-outline-info" onClick={viewMore}>
                        {
                            isLoading ? <ThreeDot color="#0dcaf0" size="small" text="" textColor="" /> : "View More" 
                        }
                    </a>
                </div>
            </div>
        </>
    )
}

export default CountryCard;