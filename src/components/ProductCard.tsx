import { useState } from 'react';
import { iProduct } from '../interfaces/product.interface';
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useAddItemToOrder } from '../hooks/updateOrder';
import useStateWithStorage from '../hooks/useStateWithStorage';


import './style.css';

interface props {
  product: iProduct;
}
export const ProductCard = (props: props) => {
  const { product } = props;
  const { variants, featuredAsset } = product;
  const [variantSelected, setVariantSelected] = useState(variants[0]);
  const [subtotal, setSubtotal] = useStateWithStorage('subtotal', 0);

  const formatPrice = (number: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number);
  };

  const addItemToOrder = useAddItemToOrder();

  const handleChange = (event: SelectChangeEvent) => {
    const variant = variants.find((v) => v.id == Number(event.target.value));
    setVariantSelected(variant || variants[0]);
  };

  const handleAddToCart = () => {
    addItemToOrder(variantSelected.id, 1).then((response) => {
      return response && setSubtotal(response.subTotal);
    });
  };

  const select = () => {
    return (
      <Select
        style={{ width: '250px' }}
        value={variantSelected.id.toString()}
        onChange={handleChange}
      >
        {variants.map((v: any, index: number) => {
          return (
            <MenuItem key={index} value={v.id.toString()}>
              {v.name}
            </MenuItem>
          );
        })}
      </Select>
    );
  };

  return (
    <div className="flex-container" style={{width: "100%"}}>
      <img
        className="image"
        src={featuredAsset.preview}
      ></img>
      <div className="card-body">
        <div>
          <div className="card-title">
            {variantSelected.name || product.name}
          </div>
          <div className="card-description">{product.description || ''}</div>          
        </div>
        <div>
          <div className="card-price">{formatPrice(variantSelected.price)}</div>
          <div className="flex-container card-actions">
            {variants.length > 1 && select()}
            <Button
            className="button-size"
              variant="contained"
              startIcon={<ShoppingCart />}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
