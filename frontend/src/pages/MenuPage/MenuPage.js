import { React, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import menuimg from '../../imgs/menu.jpg';
import { getProducts } from '../../WebAPIs';
import { device } from '../../constants/devices';
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #333 url(${menuimg}) center/cover no-repeat;
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const ProductOptions = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  z-index: 1;
  margin-bottom: 20px;

  @media ${device.mobileXS} {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductOption = styled.div`
  width: 200px;
  height: 60px;
  background: #fece35;
  border-radius: 8px;
  text-align: center;
  line-height: 3.5;
  font-weight: bold;
  color: #fefff8;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media ${device.mobileXS} {
    width: 80%;
  }
`;

const Products = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  z-index: 1;
  padding: 20px 0;

  @media ${device.mobileXS} {
    grid-template-columns: 1fr;
  }
`;

const ProductContainer = styled.section`
  width: 100%;
  max-width: 330px;
  height: auto;
  min-height: 480px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const fadeIn = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Overlay = styled.div`
  width: 100%;
  height: 60%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 10px;
  z-index: 1;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0;
  }
`;

const ProductImg = styled.img`
  width: 90%;
  height: 60%;
  object-fit: cover;
  position: relative;
  border-radius: 5px;

  @media ${device.mobileXS} {
    height: 50%;
  }
`;

const ProductName = styled.h4`
  margin: 10px 0;
  font-family: 'Permanent Marker', cursive;
  text-align: center;
`;

const ProductDesc = styled.p`
  height: 100px;
  text-align: center;
  overflow: auto;
  font-family: 'Permanent Marker', cursive;
  padding: 0 10px;
`;

const ProductPrice = styled.h6`
  font-family: 'Permanent Marker', cursive;
  margin-top: auto;
  padding-bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  z-index: 1;
`;

export default function MenuPage() {
  const [filter, setFilter] = useState('Main');
  const [initProducts, setInitProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(9);

  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      setIsLoading(true);
      getProducts(filter)
        .then((data) => {
          if (!data.ok) throw new Error(data.message);
          setInitProducts(data.message || []);
          setErrorMessage('');
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setInitProducts([]);
        })
        .finally(() => setIsLoading(false));
    }, 300);

    return () => clearTimeout(fetchTimer);
  }, [filter]);

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = initProducts?.slice(indexOfFirstBooking, indexOfLastBooking) || [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Root>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <ProductOptions>
        {['Appetiser', 'Main', 'Dessert', 'Beverage', 'Alchohol'].map((item) => (
          <ProductOption key={item} onClick={() => setFilter(item)}>
            {item === 'Main' ? 'Main Course' : item}
          </ProductOption>
        ))}
      </ProductOptions>

      <Products>
        {currentBookings.map((product) => (
          <ProductContainer key={product.id}>
            <Overlay />
            <ProductImg src={product.url} alt={product.product} />
            <ProductName>{product.product}</ProductName>
            <ProductDesc>{product.description}</ProductDesc>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductContainer>
        ))}
      </Products>

      {initProducts.length > 0 && (
        <Pagination
          bookingsPerPage={bookingsPerPage}
          totalBookings={initProducts.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
      {isLoading && <Loader isLoad={isLoading} />}
    </Root>
  );
}
