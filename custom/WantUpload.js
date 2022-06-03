import React from "react";
import Image from "next/image";
import Link from "next/link";
import gdrive from "../public/img/gdrive.png";
import pendrive from "../public/img/pdrive.png";
import dekstop from "../public/img/desktop.png";
// import Gpicker from "./Gpicker";
// import { useEffect } from "react";
// import useDrivePicker from "react-google-drive-picker";
// import DOMPurify from "dompurify";
// import "./trusted-security-policies";

function WantUpload() {
    // const [openPicker, authResponse] = useDrivePicker();
    // const handleOpenPicker = () => {
    //     openPicker({
    //       clientId: "751689268785-1u7os1o3t30rr74oioka7dtjqdot2g38.apps.googleusercontent.com",
    //       developerKey: "AIzaSyAT8V2rywn2mUy_5FE_spnn7HnYy_j8EN4",
    //       viewId: "DOCS",
    //       token:"ya29.a0ARrdaM9NFhUkoAs3ZSVt6t4GDSpr6udFGGcwucXr-A1044f5havdzKzQIL7IgY3uxCOjuZETyH_1sHMCUPuCvVw3RRTecHOaChuLoSO7rGyb1UWTu_BWEDqKGvGxIOGOOPRcyZep8mGltjRBNpT1hjy7YziL",
    //       // token: token, // pass oauth token in case you already have one
    //       showUploadView: true,
    //       showUploadFolders: true,
    //       supportDrives: true,
    //       multiselect: true,
    //       // customViews: customViewsArray, // custom view
    //       callbackFunction: (data) => {
    //         if (data.action === "cancel") {
    //           console.log("User clicked cancel/close button");
    //         }
    //         console.log(data);
    //       },
    //     });
    //   };
  return (
      
    <>
     
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Header bar */}
            <p>Header Section</p>
          </div>
        </div>
        <div
          className="section_card position-absolute top-50 start-50 translate-middle"
          style={{ backgroundColor: "#F4FBFF", padding: "40px 40px 40px 40px" }}
        >
          <div className="row">
            <div className="col-md-12">
              <h2
                className="text-center mt-5"
                style={{
                  fontSize: "2rem",
                  textAlign: "center",
                  fontWeight: "20px",
                  fontWeight: "600 !important",
                }}
              >
                Next, Lets Set Up Your Product Photos.How D You Want To Upload
                Them?
              </h2>
            </div>
          </div>
          {/* Selecting Sections */}
          <div className="row mt-5" style={{ marginTop: "50%" }}>
            <div className="col-md-4">
            
    
    
             
                <div className="card" style={{ width: "18rem" ,zIndex:"200"}}>
                  <Image src={gdrive} alt="googleDrive" />
                  <p style={{ padding: "10px", textAlign: "center" }}>
                    Upload From Google Drive
                  </p>
                </div>
            </div>

            <div className="col-md-4">
              <Link href="#">
                <div className="card" style={{ width: "18rem" }}>
                  <Image src={pendrive} alt="googleDrive" />
                  <p style={{ padding: "10px", textAlign: "center" }}>
                    Upload From USB connection
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="#">
                <div className="card" style={{ width: "18rem" }}>
                  <Image src={dekstop} alt="googleDrive" />
                  <p style={{ padding: "10px", textAlign: "center" }}>
                    Upload From Computer Device
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer */}
        </div>
        {/* <div className="">
            <div className="row">
              <div className="col-md-12">
                <h1>FOOTER SECTION</h1>
              </div>
            </div>
          </div> */}
     
      </div>
    </>
  );
}

export default WantUpload;
