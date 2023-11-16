import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CryptoItem from './CryptoItem';
import { fetchCoins } from '../redux/Crypto/CryptoSlice';

const CryptoList = () => {
  const cryptos = useSelector((state) => state.crypto.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const filteredCryptos = cryptos.filter((crypto) => crypto.rank <= 100);

  return (
    <ul className="homeList">
      {filteredCryptos.map((crypto) => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </ul>
  );
};

export default CryptoList;
