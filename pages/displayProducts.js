import Head from "next/head";
import React, { useCallback, useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import InventoryMap from "../custom/inventoryMap";
import AddInventory from "../custom/addInventory";

let products = [];
let filteredProductList = [];

export default function Layer10A() {
  const { data: session, status } = useSession();
  const [showAtt, setshowAtt] = useState(false);
  const [addInv, setaddInv] = useState(false);
  const [att, setAtt] = useState("");
  const [msg, setmsg] = useState("")
  console.log(session);

  //console.log(session.user.email);
  //const accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QwMTRAdGVzdC5jb20iLCJpYXQiOjE2NDUxMTI0NTJ9.APlfsocgH0Kl8uQs5TDPtnhNBZidyl-KqgvrgV2tslg'
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const mapProduct = () => {
    if (data.length > 0) {
      return data.map((item, key) => {
        return (
          <InventoryMap
            product={item}
            key={key}
            showAtt={(val, att) => {
              setshowAtt(val);
              setAtt(att);
            }}
          />
        );
      });
    }
    return null;
  };

  const mapAddProduct = () => {
    return <AddInventory msg={(val)=>setmsg(val)} />;
  };

  const mapAtt = () => {
    //console.log(obj)
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return Object.keys(att).map(function (key, index) {
      console.log(key + " : " + att[key]);
      return (
        <>
          <div className="col-12">
            <h4>{key + " : " + att[key]}</h4>
          </div>
          <br />
        </>
      );
    });
  };

  const fetchData = async () => {
    await axios
      .get("http://localhost:9000/.netlify/functions/inventory", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3Nzc3RAdHQuY29tIiwiaWF0IjoxNjUwMDQ5OTY1fQ.4mWVMPyA0PSQQoeGNf0rFfPcFoaHFBIj3KE7C-fxBOY",
        },
      })
      .then(
        (inven) => {
          //console.log(inven);
          setData(inven.data);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  products = [
    {
      category: "1003",
      stockNo: ".50 ct tw",
      styleNUmber: "5",
      brand: "TGT",
      manufacturer: "Dia Cocktl Rings",
      tag: "1",
      storeCode: "001",
      productName: "TEST_PRODUCT",
      companyName: "TEST TSET",
      companyCode: "001",
      qty: "5",
      sku: "32",
      datebuy: "17-Nov-05",
      datesold: "12-Feb-20",
      shortDescription: ".50 ct tw",
      longDescription: ".50 ct tw",
      cost: "900",
      retailPrice: "900",
      onSale: "900",
      productImages: "encoded strings",
      prodCertificatePicture: "",
      certificateNumber: "Z-00123",
      labCertification: "GIA",
      attributes: "",
      shippingLength: "12",
      shippingWidth: "16",
      shippingHeight: "",
      jewelryType: "",
      assetId: "32",
    },
  ];

  filteredProductList = [];

  let prodCategories = [];
  let companies = [];
  let isFilterVisisble = false;
  companies.push("TGT");
  prodCategories.push("Dia Cocktl Rings");
  prodCategories.push("Anklet");
  prodCategories.push("Rings");

  products.forEach((element) => {
    filteredProductList.push(element);
  });

  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((v) => v + 1);
  }, [setCount]);

  const handleFilter = (event) => {
    isFilterVisibile = !isFilterVisisble;
    console.log(isFilterVisisble);
  };

  const filter = (event) => {
    console.log(event.target.value);
    const text = event.target.value;

    if (text == null || text == "") {
      filteredProductList = [];
      products.forEach((element) => {
        filteredProductList.push(element);
      });
    } else {
      filteredProductList = null;
      filteredProductList = [];
      filteredProductList = products.filter((pkg) => {
        return (
          pkg.descript.toUpperCase().indexOf(text.toUpperCase()) !== -1 ||
          pkg.descript.toUpperCase().indexOf(text.toUpperCase()) !== -1
        );
      });
    }

    console.log(filteredProductList);
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Jewelify</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {showAtt && (
        <>
          <div
            className="py-5 px-4"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              position: "fixed",
              zIndex: 2000,
              width: "100%",
              height: "100vh",
            }}
          >
            <div
              className="justify-content-center p-5"
              style={{
                width: "60%",
                margin: "auto",
                background: "white",
                height: "100%",
                border: "3px solid black",
                borderRadius: "10px",
                overflowY: "scroll",
              }}
            >
              <h2 className="text-center mt-2 mb-4">ATTRIBUTES</h2>
              {mapAtt()}
              <div className="text-center">
                <button
                  type="button"
                  className="btn-lg btn-danger"
                  style={{ border: "1px solid black", borderRadius: "10px" }}
                  onClick={() => setshowAtt(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Add your site or application content here */}
      <header className="inner-header">
        <nav className="main-nav">
          <div className="container">
            <div className="nav-wrapper">
              <div className="logo-wrapper">
                <a>
                  {" "}
                  <img src="/img/logo.svg" alt="jwelify" />{" "}
                </a>
              </div>
              <p></p>

              <div className="prof-img">
                <img src="/img/head-prof.png" alt="" />
              </div>
              {!session && (
                <>
                  <a
                    onClick={signIn}
                    className="get-started-btn scrollto float-right"
                  >
                    Sign In
                  </a>
                </>
              )}

              {session && (
                <>
                  <a
                    onClick={signOut}
                    className="get-started-btn scrollto float-right"
                  >
                    Sign Out
                  </a>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div className="wrapper ">
        {/* pricing area
      ============================================ */}
        <div
          id="pricing-area"
          className="pricing-area custom-border"
          style={{ backgroundColor: "#f3fbfe" }}
        >
          <div className="container pt-100">
            <div className="row">
              <div className="col-md-12 ">
                <div className="about-bottom-left mb-30 clearfix text-style text-center">
                  <h2>
                    Below Are The Products We Detected From JCS.
                    <br /> Does This Look Right?
                  </h2>
                </div>
                <div className="row pb-100">
                  <div className="row">
                    <div className="col-md-3 input-outer">
                      <label>Search by keyword</label>
                      <div className="form-group right-inner-addon input-container">
                        <i className="fa fa-search"></i>
                        <input
                          type="text"
                          onKeyPress={increment}
                          className="form-control"
                          placeholder="Type Keyword"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-custom" onClick={increment}>
                        Add Filter&nbsp;&nbsp;<i className="fa fa-search"></i>
                      </button>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3 add-prodcut">
                      <button className="btn btn-custom" onClick={()=>setaddInv(true)}>
                        Add Products
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    {count % 2 == 1 ? (
                      <div>
                        <div className="col-md-2 input-outer">
                          <label>Company</label>
                          <div className="form-group right-inner-addon input-container">
                            <select className="form-control">
                              <option selected>All company</option>

                              {companies.map((companie) => {
                                <option>{companie}</option>;
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 input-outer">
                          <label>Product Type</label>
                          <div className="form-group right-inner-addon input-container">
                            <select className="form-control">
                              <option selected>All Type</option>
                              {prodCategories.map((prodCategorie) => {
                                <option>{prodCategorie}</option>;
                              })}
                            </select>
                          </div>
                        </div>

                        <div className="col-md-2 input-outer">
                          <label>Min Stock</label>
                          <div className="form-group right-inner-addon input-container">
                            {/* <i class="fa fa-search"></i> */}
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Type Price"
                            />
                          </div>
                        </div>
                        <div className="col-md-2 input-outer">
                          <label>Max Stock</label>
                          <div className="form-group right-inner-addon input-container">
                            {/* <i class="fa fa-search"></i> */}
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Type Price"
                            />
                          </div>
                        </div>

                        <div className="col-md-2 input-outer">
                          <label>Min Price</label>
                          <div className="form-group right-inner-addon input-container">
                            {/* <i class="fa fa-search"></i> */}
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Type Price"
                            />
                          </div>
                        </div>
                        <div className="col-md-2 input-outer">
                          <label>Max Price</label>
                          <div className="form-group right-inner-addon input-container">
                            {/* <i class="fa fa-search"></i> */}
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Type Price"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  <div className="col-12">
                    {msg && <p1 className="text-danger">{msg}</p1>}
                    <div
                      style={{ width: "100%", overflowX: "scroll" }}
                    >
                      <table className="table table-borderless custom-tbl text-left mb-4">
                        <thead>
                          <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Stock No</th>
                            <th scope="col">Style Number</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Manufacturer</th>
                            <th scope="col">Tag</th>
                            <th scope="col">Store Code</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Company Code</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">SKU</th>
                            <th scope="col">Buy Date</th>
                            <th scope="col">Date Sold</th>
                            <th scope="col">Short description</th>
                            <th scope="col">Long description</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Retail Price</th>
                            <th scope="col">On Sale</th>
                            <th scope="col">Product Images</th>
                            <th scope="col">Product Certificate Picture</th>
                            <th scope="col">Certificate Number</th>
                            <th scope="col">Laboratory Certification</th>
                            <th scope="col">Attributes</th>
                            <th scope="col">Shipping Length</th>
                            <th scope="col">Shipping Width</th>
                            <th scope="col">Shipping Height</th>
                            <th scope="col">Jwewelary Type</th>
                            <th scope="col">Assest ID</th>
                          </tr>
                        </thead>
                        <tbody>
                          {addInv && mapAddProduct()}
                          {mapProduct()}
                        </tbody>
                      </table>
                    </div>
                    <Link href="#">
                      <div className="flex flex-row justify-center items-center">
                        <button className="main-btn btn-md btn-block bg-light-blue mt-4 w-25">
                          <a href="">CONFIRM</a>
                        </button>
                      </div>
                    </Link>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area
      ============================================ */}
      <div className="contact-area">
        <div className="container">
          <div className="row">
            <div className="conatct-info fix">
              <div className="col-md-5 col-sm-4 text-style">
                <h2>Jewelify</h2>
                <p>
                  Copyright © 2021
                  <a
                    href="http://bootexperts.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jewelify
                  </a>
                  <br />
                  .All right reserved.
                </p>
              </div>
              <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
                <h3 className="mb-30">Services</h3>
                <ul>
                  <li>
                    <a href="#">service - 1</a>
                  </li>
                  <li>
                    <a href="#">service - 2</a>
                  </li>
                  <li>
                    <a href="#">service - 3</a>
                  </li>
                  <li>
                    <a href="#">service - 4</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
                <h3 className="mb-30">Company</h3>
                <ul>
                  <li>
                    {" "}
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-4 text-style t-m-res">
                <h3 className="mb-30">Useful Links</h3>
                <div className="footer-icon">
                  <ul>
                    <li>
                      <a>
                        <img src="/img/facebook.svg" alt="" width="20px" />
                      </a>{" "}
                    </li>
                    <li>
                      <a>
                        <img src="/img/instagram.svg" alt="" width="20px" />
                      </a>{" "}
                    </li>
                    <li>
                      <a>
                        <img src="/img/twitter.svg" alt="" width="20px" />
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start scrollUp
      ============================================ */}
      {/*<div id="toTop">
          <i class="fa fa-chevron-up"></i>
      </div>
  </div>*/}
      {/* jquery
		============================================ */}
      {/* bootstrap JS
		============================================ */}
      {/* plugins JS
		============================================ */}
      {/* main JS
		============================================ */}
    </div>
  );
}
