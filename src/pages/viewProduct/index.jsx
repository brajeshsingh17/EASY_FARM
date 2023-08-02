import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, deleteProduct } from '../../modules/reducer/productReducer';
import { productData, isProductsLoading, totalPage } from '../../modules/selectors/product';
import { useHistory } from 'react-router-dom';
import "./prod.css"
const ViewProducts = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allProductData = useSelector(productData);
    const totalPages = useSelector(totalPage);
    const isLoading = useSelector(isProductsLoading);
    const [currPage, setCurrPage] = useState(1);
    useEffect(() => {
        dispatch(getAllProduct({ pageNo: currPage }))
    }, [currPage])
    const nextPage = () => {
        setCurrPage(currPage + 1)
    }
    const prePage = () => {
        if (currPage > 1) {
            setCurrPage(currPage - 1)
        }
    }
    const handleDeleteProduct = (id) => {
        if(window.confirm("Are you sure to delete")){
            dispatch(deleteProduct({id}));
        }
    }
    return (
        <>
            <div>
                <div className='flex justify-center my-2'><button onClick={() => history.push('/addProduct')} className='flex p-1 px-2 my-2 text-white bg-blue-500 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>+ Add Product</button></div>
            </div>
            <div  className="container123">
                {
                   
                   
                       allProductData.length ? (allProductData.map((value, index) => {
                        return(
                             <div className='border border-slate-600'><center>{index + 1 + ((currPage - 1) * 10)}</center>
                             <div className="card_item">
                                 <div className="card_inner">
                                     <img className='h-8' src={value.productImage} alt="Product Image"  />
                                     <div className="prodName">{value.productName}</div>
                                     <div className="prodDesc">{value.productDescription}</div>
                                    
                                     <div className="detail-box">
                                         <div className="gitDetail"><span>{value.productPrice}</span></div>                                       
                                     </div>
                                     <button onClick={() => history.push(`/addProduct/${value.id}`)} className="editButton">Edit</button>
                                     <button onClick={() => handleDeleteProduct(value.id)} className="editButton">Delete</button>
                                     
                                 </div>
 
                             </div></div>
                        )
                     })) : "No product found"

              
                }
            </div>


            {/* <button disabled={true} onClick={prePage}>Previous</button>{currPage}
            <button onClick={nextPage}>Next</button> */}
            
            <Button disabled={currPage <= 1} onClick={prePage} variant="contained">Previous</Button>{currPage}
            <Button onClick={nextPage} disabled={currPage >= totalPages} variant="contained">Next</Button>
            {/* onClick={()=>nextPage()} */}
            
        </>
    )
}

export default ViewProducts