import { MinusCircle, PlusCircle } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createCart, updateCart } from '../../../../localstorage';
import { SInfos } from '../style';

function CustomerButton({ id, name, price, urlImage }) {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount(count - 1);
    updateCart(
      {
        id,
        name,
        price,
        urlImage,
        qtd: count - 1,
        newPrice: price.toFixed(2) * (count - 1),
      },
    );
  };

  const incrementCount = () => {
    if (count === 0) {
      createCart(
        {
          id,
          name,
          price,
          urlImage,
          qtd: 1,
          newPrice: price.toFixed(2),
        },
      );
    }
    setCount(count + 1);
    updateCart(
      {
        id,
        name,
        price,
        urlImage,
        qtd: count + 1,
        newPrice: price.toFixed(2) * (count + 1),
      },
    );
  };

  return (
    <SInfos>
      <MinusCircle
        size={ 25 }
        onClick={ () => count > 1 && decreaseCount() }
        style={ { cursor: 'pointer' } }
      />
      <span>{ count ?? '0' }</span>
      <PlusCircle
        size={ 25 }
        onClick={ () => incrementCount() }
        style={ { cursor: 'pointer' } }
      />
    </SInfos>
  );
}

export default CustomerButton;

CustomerButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
