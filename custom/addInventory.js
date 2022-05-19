import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";

const AddInventory = (props) => {
    const [inventory, setinventory] = useState({categoryAbr: "",
    stockno: "",
    styleNumber: "",
    brand: "",
    manufacture: "",
    tag: "",
    storeCode: "",
    productName: "",
    companyName: "",
    companyCode: "",
    qty: "",
    sku: "",
    datebuy: "",
    datesold: "",
    shortDescription: "",
    longDescription: "",
    cost: "",
    retailPrice: "",
    onSale: "",
    productImages: "",
    prodCertificatePicture: "",
    certificateNumber: "",
    labCertification: "",
    attributes: "",
    shippingLength: "",
    shippingWidth: "",
    shippingHeight: "",
    jewelryType: "",
    assetId: "",})
    const addData = async () => {
      await axios
        .post("http://localhost:9000/.netlify/functions/inventory",JSON.stringify({products:[inventory]}), {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3Nzc3RAdHQuY29tIiwiaWF0IjoxNjUwMDQ5OTY1fQ.4mWVMPyA0PSQQoeGNf0rFfPcFoaHFBIj3KE7C-fxBOY",
          },
        })
        .then(
          (res) => {
            //console.log(inven);
            console.log(res);
            props.msg(res.data.message)
            if(res.data.message=="You have successfully uploaded your inventory"){
              setinventory({categoryAbr: "",
              stockno: "",
              styleNumber: "",
              brand: "",
              manufacture: "",
              tag: "",
              storeCode: "",
              productName: "",
              companyName: "",
              companyCode: "",
              qty: "",
              sku: "",
              datebuy: "",
              datesold: "",
              shortDescription: "",
              longDescription: "",
              cost: "",
              retailPrice: "",
              onSale: "",
              productImages: "",
              prodCertificatePicture: "",
              certificateNumber: "",
              labCertification: "",
              attributes: "",
              shippingLength: "",
              shippingWidth: "",
              shippingHeight: "",
              jewelryType: "",
              assetId: "",})
            }
          },
          (err) => {
            console.log(err);
          }
        );
    };
    const tableRow = () => {
        return (
          <tr className="tbl-bg-white">
            <td> <input  className="form-control" style={{width:'100px'}}  type="text" required value={inventory.categoryAbr} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      categoryAbr:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.stockno} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      stockno:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.styleNumber} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      styleNumber:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.brand} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      brand:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.manufacture} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      manufacture:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.tag} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      tag:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.storeCode} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      storeCode:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.productName} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      productName:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.companyName} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      companyName:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.companyCode} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      companyCode:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.qty} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      qty:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.sku} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      sku:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.datebuy} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      datebuy:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.datesold} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      datesold:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.shortDescription} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      shortDescription:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.longDescription} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      longDescription:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.cost} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      cost:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.retailPrice} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      retailPrice:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.onSale} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      onSale:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.productImages} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      productImages:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.prodCertificatePicture} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      prodCertificatePicture:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.certificateNumber} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      certificateNumber:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.labCertification} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      labCertification:e.target.value
    }))}}/></td>

            <td>{<button  style={{width:'100px'}} className='btn btn-primary' onClick={()=>{}}>add</button>}</td>
            
            <td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.shippingLength} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      shippingLength:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.shippingWidth} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      shippingWidth:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.shippingHeight} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      shippingHeight:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required value={inventory.jewelryType} onChange={(e)=>{setinventory(inventory => ({
      ...inventory,
      jewelryType:e.target.value
    }))}}/></td>

<td> <input  className="form-control" style={{width:'100px'}} type="text" required disabled value={inventory.sku} /></td>
          
<td>{<button  style={{width:'100px'}} className='btn btn-primary' onClick={()=>{addData()}}>add inventory</button>}</td>
          </tr>
        );
      };
      return <>{tableRow()}</>;
}

export default AddInventory