import React, { useState } from "react";
 const InventoryMap = (props) => {
  const product = props.product;
  console.log(product)
  const tableRow = () => {
    return (
      <tr className="tbl-bg-white">
        <td>{product.categoryAbr}</td>
        <td>{product.stockno}</td>
        <td>{product.styleNumber}</td>
        <td>{product.brand}</td>
        <td>{product.manufacture}</td>
        <td>{product.tag}</td>
        <td>{product.storeCode}</td>
        <td>{product.productName}</td>
        <td>{product.companyName}</td>
        <td>{product.companyCode}</td>
        <td>{product.qty}</td>
        <td>{product.sku}</td>
        <td>{product.datebuy}</td>
        <td>{product.datesold}</td>
        <td>{product.shortDescription}</td>
        <td>{product.longDescription}</td>
        <td>{product.cost}</td>
        <td>{product.retailPrice}</td>
        <td>{product.onSale}</td>
        <td>{product.productImages}</td>
        <td>{product.prodCertificatePicture}</td>
        <td>{product.certificateNumber}</td>
        <td>{product.labCertification}</td>
        <td>{<button className='btn-sm btn-primary' onClick={()=>{props.showAtt(true,product.attributes);}}>show</button>}</td>
        <td>{product.shippingLength}</td>
        <td>{product.shippingWidth}</td>
        <td>{product.shippingHeight}</td>
        <td>{product.jewelryType}</td>
        <td>{product.assetId}</td>
      </tr>
    );
  };
  return <>{tableRow()}</>;
};

export default InventoryMap
