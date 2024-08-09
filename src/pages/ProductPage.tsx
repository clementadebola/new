import React from 'react';
import styled from 'styled-components';

const ProductPageContainer = styled.div`
  padding: 4rem 2rem;
`;

const ProductPage: React.FC = () => {
  return (
    <ProductPageContainer>
      <h1>Our Products</h1>
      {/* Add product details here */}
    </ProductPageContainer>
  );
};

export default ProductPage;