import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const Basic = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
      "application/pdf": [".pdf"],
      // "text/html": [".html", ".htm"],
    },
  });

  const [fileUploaded, setFileUploaded] = useState(null);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const FilesUploaded = (acceptedFiles) => {
    return setFileUploaded(acceptedFiles);
  };

  props.onChange(acceptedFiles);

  return (
    <div className="row container-dropzone mb-4">
      <div {...getRootProps({ className: "dropzone col-sm-6" })}>
        <input {...getInputProps()} />
        <p>Uploadez vos fichiers ici</p>
      </div>
      <div className="col-sm-6">
        {files && files.length > 0 && (
          <>
            <h6>Fichiers uploadés</h6>
            <p>{files}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Basic;
