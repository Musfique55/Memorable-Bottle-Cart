import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle , handleBottles}) => {
    const {name,img,price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h4>{price}$</h4>
            <button onClick={()=>{handleBottles(bottle)}}>Add to Cart</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.array.isRequired,
    handleBottles : PropTypes.func.isRequired
}
export default Bottle;