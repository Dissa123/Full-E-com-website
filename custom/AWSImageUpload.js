import React, { useState } from "react";
// import logo from './logo.svg';
// import "./App.css";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

function App() {
  const [file, setFile] = useState();
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
      <input type="file" id="file" onChange={fileChange} />
    </div>
  );
}

export default App;
