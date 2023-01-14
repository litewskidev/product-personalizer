import styles from './ProductOptions.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductOptions = props => {

  const addToCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', props.getPrice + ' $');
    console.log('Size: ', props.currentSize);
    console.log('Color: ', props.currentColor);
  };

  return(
    <form onSubmit={addToCart}>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductOptions.propTypes = {
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default ProductOptions;
