import axios from "axios";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const DownloadFile = () => {
  //   const download = (e) => {
  //     e.preventDefault();
  //     axios({
  //       url: "http://localhost:3000",
  //       method: "GET",
  //       responseType: "blob",
  //     }).then((res) => {
  //       console.log(res);
  //       FileDownload(res.data, "downloaded.png");
  //     });
  //   };
  //      <button onClick={(e) => download(e)}>Download</button>;
  const [files, setFiles] = useState(() => []);

  const download = (file) =>
    setFiles((fileList) => [...fileList, { ...file, dowloadId: uuid() }]);

  return (
    <div>Download</div>
    // (e) => download(e), files.length > 0 ? <Downloader files={files} /> : null
  );
};

export default DownloadFile;
