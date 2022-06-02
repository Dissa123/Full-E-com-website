import React from "react";
import Progress from "./Progress";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
import uploadedFile from "@aws-sdk/lib-storage";

function AWSImageUpload() {
  const Upload = (file) => {
    var file = file.target.files[0];

    const target = { Bucket: "", Key: file.name, Body: file };
    const creds = { accessKeyId: "AKIARW2QR5QS5TIGGTMN" };
    try {
      const parallelUploads3 = new Upload({
        client: new S3({}) || new S3Client({ region: "", credentials: creds }),
        params:target,
        leavePartsOnError: false, // optional manually handle dropped parts
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
      <Fragment>
        <div
          className="container mt-5"
          style={{ width: "50%", border: "1px solid #000", padding: "20px" }}
        >
          <div className="row">
            <div className="col-md-12">
              <h3 style={{ fontWeight: "600" }}>Upload From Computer</h3>
              <p>Select a folder where the image is place</p>
            </div>

            <div className="col-md-12 mt-5">
              <form>
                {/* File uploader */}
                <div
                  className="iconAndFileType"
                  style={{ border: "1px solid #000", borderStyle: "dashed" }}
                >
                  <div
                    className="custom-file mb-4 text-center"
                    style={{ backgoundColor: "#ffff" }}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ fontSize: "100px", padding: "35px 0 40px" }}
                    />
                    <div className="col-md-12">
                      <h5 className="fw-bolder text-center">Drop File here</h5>
                      <p className="text-center" style={{ fontSize: "1rem" }}>
                        Supports JPG, JPEG2000, PNG
                      </p>
                    </div>
                  </div>
                  <div
                    className="chooseFile"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="photo"
                      style={{
                        opacity: " 0",
                        //  position: 'absolute'
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                      }}
                      // onChange={onChange}
                      // handleChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div
                  className="col-md-12 mt-5"
                  style={{ border: "0px solid #000", padding: "20px" }}
                >
                  <Progress percentage={Progress} />
                </div>
                <div className="buttonup">
                  <input
                    type="submit"
                    value="upload"
                    className="btn btn-primary btn-block "
                    style={{
                      top: "-30px",
                      width: "50%",
                      margin: "0 auto",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  />
                </div>

                <label
                  className="form-label text-center mt-5"
                  htmlFor="formFile"
                  style={{
                    border: "0px solid #000",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                ></label>
              </form>
              {uploadedFile ? (
                <div className="row mt-5">
                  <div className="col-md-6 m-auto">
                    <h3 className="text-center">{uploadedFile.fileName}</h3>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default AWSImageUpload;
