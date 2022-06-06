import React from "react";
import Progress from "./Progress";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
import uploadedFile from "@aws-sdk/lib-storage";

function AWSImageUpload() {
  const upload = (file) => {
    var file = file.target.files[0];

    const target = { Bucket: "imageUpload", Key: file.name, Body: file };
    const creds = { accessKeyId: "bDKhdhHlYycm/H4UPsgkuFA+REBsBCKpwn01e3qG",accessKeyId:"AKIA3TFHQ6HB6O2LSR6U" };
    try {
      const parallelUploads3 = new Upload({
        client: new S3Client({ region: "us-east-1", credentials: creds }),
        leavePartsOnError: false,
        params: target,
        // optional manually handle dropped parts
      });

      parallelUploads3.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });

      parallelUploads3.done();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <input type="file" onChange={upload} />
    </div>
  );
}

export default AWSImageUpload;
