import { useQuery } from '@apollo/client';
import { GET_PRODUCT_LIST } from '../graphql/queries';
import { useAddItemToOrder } from '../hooks/updateOrder';
import { iProduct, iProductList } from '../interfaces/product.interface';
import { ChangeEvent, useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { Pagination, Paper, Grid } from '@mui/material';
import './style.css'

interface iProductsMutation {
  products: iProductList;
}
export function ProductList() {
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { loading, error, data } = useQuery<iProductsMutation>(
    GET_PRODUCT_LIST,
    {
      variables: {
        options: {
          skip: skip,
          take: 10,
        },
      },
    }
  );

  const products: iProduct[] = data?.products.items || [];
  const totalItems = data?.products.totalItems || 0;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setSkip((value - 1) * pageSize);
  };

  const count = Math.ceil(totalItems / pageSize);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='margin-1'>
      {products.length ? (
        <Grid container spacing={1}>
          {products.map((prod) => {
            return (
              <Grid item xs={12}>
                <Paper>
                  <ProductCard key={prod.id} product={prod} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <></>
      )}
      <Pagination count={count} page={page} onChange={handlePageChange} />
    </div>
  );
}
