import React, { useEffect } from 'react';
import './singlePage.css';
import LinkViewer from '../components/LinkViewer';
import { Link, useParams, useHistory } from 'react-router-dom';
import { single_product_url as url } from '../constants';
import { useProductsContext } from '../contexts/products_context';
import ProductsImages from '../components/ProductsImages';
import Rating from '../components/Rating';
import AddToCart from '../components/AddToCart';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { formatPrice } from '../helper';
const SinglePage = () => {
  const {
    getSingleProduct,
    isSingleLoading,
    singleProductError,
    singleProduct,
  } = useProductsContext();

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [singleProductError]);

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;

  if (isSingleLoading) {
    return (
      <div className='single-loading'>
        <Loading />;
      </div>
    );
  }
  if (singleProductError) {
    return <Error />;
  }

  return (
    <div className='single'>
      <LinkViewer title={name} check />
      <div className='single-product'>
        <Link to='/products' className='back'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductsImages images={images} />
          <section className='details'>
            <h2>{name}</h2>
            <Rating stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info '>
              <span>available : </span>
              <span className={`${stock < 1 && 'out-of-stock'}`}>
                {stock > 0 ? 'in stock' : 'out of stock'}
              </span>
            </p>
            <p className='info'>
              <span>SKU: </span>
              {sku}
            </p>
            <p className='info'>
              <span>brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
