import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = useMemo(() => {
    return(
      props.basePrice + props.sizes.find((size) => currentSize === size.name).additionalPrice
    )}, [props.basePrice, props.sizes, currentSize]
  );

  const addToCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice + ' $');
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return(
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button type="button" onClick={() => {setCurrentSize(size.name)}} className={clsx(styles.sizes, currentSize === size.name && styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={color}><button type="button" onClick={() => {setCurrentColor(color)}} className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} /></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;
