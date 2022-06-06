import React from "react";
import woo from "../public/img/s1.png";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import {
  getProviders,

  getCsrfToken,
  getSession,
} from "next-auth/react";
function WoocomOneClick() {
  const [data, setData] = useState("");
  // const [clientsecret, setClientsecret] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/.netlify/functions/api/users";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <div className="">
        <div className="row ">
          <div className="col-md-1">
            <p>Nav Header</p>
          </div>
          <div
            className="titleandinput position-absolute top-50 start-50 translate-middle"
            style={{
              backgroundColor: "#F4FBFF",
              padding: "20px",
              width: "70%",
            }}
          >
            {/* title */}
            <div className="row " style={{ textAlign: "center" }}>
              <div className="col-md-12">
                <h2 style={{ fontSize: "2rem", fontWeight: "80px" }}>
                  Integrate WooCommerce And Jewelify With One Click
                </h2>
              </div>
            </div>
            <div className="row text-center  mt-5">
              <div className="col-md-12" style={{ margin: "0 auto" }}>
                {/* image */}
                <Image src={woo} />
              </div>
            </div>

            {/* Input Felid */}
            <form action="" >
              <div
                className="row"
                style={{ display: "flex", margin: "0 auto", width: "50%" }}
              >
                <div className="col-md-12 ">
                  <div className=" g-3 align-items-center ">
                    <div className="row">
                      <label htmlFor="inputText" className="form-label">
                        Client ID
                      </label>
                      <input
                        type="text"
                        name="id"
                        id="inputPassword5"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                        value={data.id || ""}
                      />
                    </div>

                    <div className="row mt-5">
                      <label htmlFor="inputText" className="form-label">
                        Client Secret
                      </label>
                      <input
                        type="password"
                        name="sid"
                        id="inputPassword5"
                        className="form-control g-3"
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                        value={data.sid || ""}
                      />
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="row mt-5" style={{ textAlign: "center" }}>
                  <div className="">
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onSubmit={handleSubmit}
                      style={{
                        width: "80%",
                        borderRadius: "20px",
                        padding: "10px",
                      }}
                    >
                      CONNECT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

//server side
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();

  return {
    props: { csrfToken, providers },
  };
}

export default WoocomOneClick;
