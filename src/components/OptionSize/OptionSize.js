import styles from '../ProductOptions/ProductOptions.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size =><li key={size.name}>
          <button type="button" onClick={() => {props.setCurrentSize(size.name)}} className={clsx(styles.sizes, props.currentSize === size.name && styles.active)}>{size.name}</button>
        </li>)}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
