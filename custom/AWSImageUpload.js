// This is aws upload path
import React, { useState } from "react";
// import logo from './logo.svg';
// import "./App.css";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

function App() {
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  function fileChange(e) {
    var file = e.target.files[0];
    // console.log(e.target.files[0])

   

    const target = {
      Bucket: "aws-s3-upload-ash-pic",
      Key: file.name,
      Body: file,
    };
    const creds = {
      accessKeyId: "AKIA3TFHQ6HBRO3S2ZAE",
      secretAccessKey: "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",
    };
    try {
      const parallelUploads3 = new Upload({
        client: new S3Client({ region: "us-east-1", credentials: creds }),
        leavePartsOnError: false, // optional manually handle dropped parts
        params: target,
      });

      parallelUploads3.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });

      parallelUploads3.done();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div className="container">
      <div className="row" style={{border:"1px solid black"}}>
        <div className="col-md-12 text-center">
        <h3 style={{ fontWeight: "600" }}>Upload From Computer</h3>
            <p>Select a folder where the image is place</p>
        </div>
        <div className="imgAndtext" style={{border:"1px solid black",marginTop:"40px"}}>

       
        <div className="col-md-12 text-center">
        <FontAwesomeIcon icon={faImage} style={{ fontSize: "100px", padding: "35px 0 40px" }} />
        </div>

        <div className="col-md-12">
                 <h5 className="fw-bolder text-center">Drop File here</h5>
                <p className="text-center" style={{ fontSize: "1rem" }}>
                      Supports JPG, JPEG2000, PNG
                  </p>
        </div>
        <div className="drg">
        <input type="file" id="file" className="drg" onChange={fileChange} />
        </div>
       
        </div>
      
      {/* progress */}
      <div
                className="col-md-6 mt-5 pro"
                style={{ border: "0px solid #000", padding: "20px" }}
              >
                {/* <Progress percentage={progress} /> */}
              </div>
      </div>
     
      </div>
    </div>
  );
}

export default App;
