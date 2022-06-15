import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
import DOMPurify from "dompurify";
import "./trusted-security-policies";


function GApp() {
  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: "751689268785-1u7os1o3t30rr74oioka7dtjqdot2g38.apps.googleusercontent.com",
      developerKey: "AIzaSyAT8V2rywn2mUy_5FE_spnn7HnYy_j8EN4",
      viewId: "DOCS",
      token:"ya29.a0ARrdaM_U7NdbKkPZfGPO6-NyUJCO_R0bH99xt1w0yEl4v8IRzA-iWiyxSht0NJCBJYNafnzaCLD74wtxtrDOve2PgT6BFML3MgvQ9trEdYuFdbHmhkByHuVuNnVlb-I73j_fPKjfhIn20Pmn44f4YA9pltlI",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };

  return (
    <div className="">
      <button onClick={() => handleOpenPicker()} className="gBtn">Open Picker</button>
    </div>
  );
}

export default GApp;
