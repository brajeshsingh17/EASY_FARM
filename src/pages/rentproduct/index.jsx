import React, {useEffect} from 'react';
import "./rentpage.css";
import Rent_Card from "./rent_card";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../modules/reducer/farmerProductReducer';
import { productData } from '../../modules/selectors/farmerProduct';

function Rentproduct() {
  const allProductData = useSelector(productData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct({}))
  },[])
    return (
      <div>
        <div className="rowR">
          {
            allProductData.map((value,index) => <Rent_Card
            key={index}
            title={value.productName}
            images={value.productImage}
            Price={value.productPrice}
            rupess="&#x20B9;"
            alt="a"
           
          />)
          }
        </div>
      </div>
    );
  }
  export default Rentproduct;