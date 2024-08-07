
import './country.css'
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
const CountryCard = ({countryInfo}) => {
    const { image, country, description} = countryInfo;
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        
        <Link to={`/touristSpots/${country}`} onClick={scrollToTop} className="shadow-md border border-gray-200" >
            <div className="w-full h-[400px] overflow-hidden relative" id="container">
                <img className="w-full object-cover h-full image1" src={image} alt="" />
                <h1 className={ 'text-3xl font-medium absolute top-8 left-4  text-white'}>{country}</h1>
            </div>
            <div className="space-y-1 px-5 py-5 ">
                {/* <h1 className={ 'text-2xl font-medium'}>{country}</h1> */}
                <p className='text-justify'>{description}</p>
                
                {/* <Link to={`/spot/${_id}`}><button className="btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">View Details</button></Link> */}
            </div>
        </Link>
    );
};

CountryCard.propTypes = {
    countryInfo:PropTypes.object
}

export default CountryCard;