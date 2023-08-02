import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../modules/reducer/farmerProductReducer';
import { productData } from '../../modules/selectors/farmerProduct';
import "./view.css";
import CardView from "./cardView";

function View() {
  const allProductData = useSelector(productData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct({}))
  }, [])
  return (
    <div >
      <div className="row">
        {
          allProductData.map((value, index) => <CardView
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
export default View;