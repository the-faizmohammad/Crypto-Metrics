import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchCoins, setShowCoin, getCoinsStatus, getCoinsError, getSelectedCoin,
} from '../redux/Crypto/CryptoSlice';
import '../styles/CryptoDetails.css';

function CryptoDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const coinsStatus = useSelector(getCoinsStatus);
  const coinsError = useSelector(getCoinsError);
  const selectedCoin = useSelector(getSelectedCoin);

  useEffect(() => {
    if (id) {
      dispatch(setShowCoin(id));
    }
  }, [id, dispatch]);

  if (coinsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (coinsStatus === 'failed') {
    return (
      <div>
        Error:
        {coinsError}
      </div>
    );
  }

  const renderInfo = (label, value) => (
    <div className="info">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );

  const renderInfoLink = (label, url) => (
    <div className="infoLink">
      <p>{label}</p>
      <li>
        <a href={url}>
          Visit
          {label}
        </a>
      </li>
    </div>
  );

  return (
    <Container>
      <div className="detailsContainer">
        {selectedCoin && (
          <>
            <div className="imageContainer">
              <img src={selectedCoin.img} alt="coin logo" className="indiImg" />
              <div className="cont">
                <h2>
                  Coin:
                  {' '}
                  {selectedCoin.name}
                </h2>
                <h2>
                  Ranked at: #
                  {selectedCoin.rank}
                </h2>
              </div>
            </div>

            <h2 className="detailTitle">
              More Information about
              {' '}
              {selectedCoin.name}
            </h2>

            {renderInfo('Coin Name', selectedCoin.name)}
            {renderInfo('Ranking', `No. ${selectedCoin.rank}`)}
            {renderInfo('Current Price', `$${selectedCoin.price}`)}
            {renderInfo('Symbol', selectedCoin.symbol)}
            {renderInfo('Market Cap', `$${selectedCoin.marketCap}`)}
            {renderInfo('Available Supply', selectedCoin.availableSupply)}
            {renderInfo('Contract Address', selectedCoin.contractAddress)}
            {renderInfo('Decimals', selectedCoin.decimals)}
            {renderInfo('Price Btc', `$${selectedCoin.priceBtc}`)}
            {renderInfo('Price Change/1 Day Ago', `$${selectedCoin.priceChange1d}`)}
            {renderInfo('Price Change/Hour', `$${selectedCoin.priceChange1h}`)}
            {renderInfo('Price Change/Week', `$${selectedCoin.priceChange1w}`)}
            {renderInfo('Total Supply', `$${selectedCoin.totalSupply}`)}
            {renderInfo('Volume', selectedCoin.volume)}
            {renderInfoLink('Twitter', selectedCoin.twitterUrl)}
            {renderInfoLink('Website', selectedCoin.websiteUrl)}
          </>
        )}
      </div>
    </Container>
  );
}

export default CryptoDetails;
