import React, { useEffect } from 'react'
import Banner from './Banner'
import HighlightFilter from './HighlightFilter'
import OurProduct from './OurProduct'
import { useParams } from 'react-router-dom';
import { useFashionShoes, useFashionByGender } from './useProduct';
import Footer from '../../ui/Footer';

function Product() {

  const { gender } = useParams();

  const { product = [], refetch } = useFashionByGender(gender)

  useEffect(() => {
    refetch();
  }, [gender, refetch]);

  const { productShoes = [] } = useFashionShoes('Shoes')

  return (
    <div className=''>
      <Banner />
      <OurProduct product={product} title = "Our New Product" />
      <HighlightFilter gender={gender} />
      <OurProduct product={productShoes} title = "Products You May Like" />
      <Footer />
    </div>
  )
}

export default Product