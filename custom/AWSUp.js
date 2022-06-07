import React from "react";
import Fetch from "react-fetch";
import S3FileUpload from "react-s3";

// const S3FileUpload = new S3(config);
class MyDocument extends Component {
  constructor() {
    super();
  }
  upload(e) {
    const config = {
      bucketName: "picuploadproject",
      // dirName: "photos" /* optional */,
      region: "us-east-1",
      accessKeyId: "AKIA3TFHQ6HB4GFJ4KCO",
      secretAccessKey: "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",
    };
    console.log(e.target.files, config);
    S3FileUpload.uploadFile(e, config)
      .then((data) => {
        console.log(data.location);
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div>
        <h3>AWS Image Uploader</h3>
        <input type="file" onChange={this.upload} />
      </div>
    );
  }
}
// export
export default MyDocument;
