import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { addProduct, getProductById, updateProduct } from '../../modules/reducer/productReducer';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import '../addproduct/mainCSS.css'

const divStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '1px 3px 5px #1C2833',
    padding: '1em',
    // background: '#797D7F',
};//#DDCDCA
const divStyles1 = {
    boxShadow: '1px 3px 5px #1C2833',
    margin: '2em',
    padding: '1em',
    background: '#D0D3D4',
    borderRadius: '12px',
    paddingBottom: '16px'

};//#F2F3F4

function AddProduct() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log("===> ", id)
    const [productData, setProductData] = useState(
        {
            productName: '',
            productImage: '',
            productDescription: '',
            productPrice: ''
        }
    );

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    useEffect(() => {
        const fetchData = async (id) => {
            const res = await dispatch(getProductById({ id }));
            console.log(res);
            if (res.type === 'product/getById/fulfilled') {
                setProductData({
                    productName: res.payload.productName,
                    productImage: res.payload.productImage,
                    productDescription: res.payload.productDescription,
                    productPrice: res.payload.productPrice
                })
            }
        }
        if (id) {
            fetchData(id);
        }
    }, [])

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        if (name === 'productImage') {
            const base64 = await toBase64(e.target.files[0]);
            setProductData((pre) => ({
                ...pre,
                [name]: base64
            }))
        } else {
            setProductData((pre) => ({
                ...pre,
                [name]: value
            }))
        }
    }
    const handleAddNewProduct = () => {
        dispatch(addProduct({ data: productData }));
    }

    const handleUpdateProduct = async () => {
        const res = await dispatch(updateProduct({ data: productData, id }))
        if (res.type === 'product/addProduct/fulfilled') {
            history.push('/ViewProducts')
        }
    }

    return (

        <div style={{ color: "#D0D3D4" }}>
            <div style={divStyles}>
                <Container maxWidth="sm" className='mainContainer'>
                    <h1 style={{ color: 'black' }} className="text-3xl font-bold">
                        <center>ADD PRODUCT</center>
                    </h1>

                    <div style={divStyles1}>
                        <label style={{ color: 'black' }}>Product Name</label>
                        <TextField name='productName' onChange={handleInputChange} value={productData.productName} variant="filled" size='small' placeholder="NAME" fullWidth>
                        </TextField><br />
                    </div>

                    <div style={divStyles1}>
                        <label style={{ color: 'black' }}>Upload Image</label>
                        <TextField name='productImage' onChange={handleInputChange} type="file" variant="filled" size='small' placeholder='IMAGE' fullWidth>
                        </TextField>
                        {productData.productImage.length ? <img src={productData.productImage} alt="product image" /> : null}
                    </div>
                    <div style={divStyles1}>
                        <label style={{ color: 'black' }}>Price</label>
                        <TextField name='productPrice' onChange={handleInputChange} variant="filled" value={productData.productPrice} size='small' placeholder="PRICE" fullWidth>
                        </TextField>
                    </div>

                    <div>
                    </div>
                    <div style={divStyles1}>
                        <label style={{ color: 'black' }}>Product Description</label>
                        <TextField name='productDescription' onChange={handleInputChange} variant="filled" size='small' value={productData.productDescription} placeholder="DESCRIPTION" fullWidth>
                        </TextField>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: '10px',
                    }}>
                        {
                            id ?
                                <Button onClick={handleUpdateProduct} className="bg-gradient-to-r from-black to gray-600 hover:from-gray-800 hover:to-black text-white font-semibold px-6 py-3 rounded-md mr-6">
                                    <center>update product</center>
                                </Button> :
                                <Button onClick={handleAddNewProduct} className="bg-gradient-to-r from-black to gray-600 hover:from-gray-800 hover:to-black text-white font-semibold px-6 py-3 rounded-md mr-6">
                                    <center>add product</center>
                                </Button>
                        }
                    </div>

                </Container>
            </div>
        </div>

    );

}
export default AddProduct;
