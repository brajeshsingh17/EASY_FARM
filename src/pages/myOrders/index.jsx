import React from 'react';
import "./myorders.css";
import CardOrders from "./cardOrders";
import o1 from "./o1.png"
import o2 from "./o2.png"
import o3 from "./o3.png"
import o4 from "./o4.png"
function MyOrders() {
    return (
      <div className="viewcontainerO">
        <div className="rowO">
          <CardOrders
            title="product 1"
            images={o1}
            Price="9999"
            rupess="&#x20B9;"
            date='04-01-2022'
            alt="a"
           
          />
          <CardOrders
            title="product 2"
            images={o2}
            Price="500"
            rupess="&#x20B9;"
            date='10-01-2023'
            alt="b"
            
          />
          <CardOrders
            title="product 3"
            images={o3}
            Price="7000"
            rupess="&#x20B9;"
            date='09-08-2022'
            alt="c"
           
          />
          <CardOrders
            title="product 4"
            images={o4}
            Price="500"
            rupess="&#x20B9;"
            date='11-05-2022'
            alt="d"
           
          />
        </div>
      </div>
    );
  }
  export default MyOrders;