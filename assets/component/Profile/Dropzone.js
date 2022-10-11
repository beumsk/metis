import React from "react";
import { useDropzone } from "react-dropzone";

const Basic = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="row container-dropzone mb-4">
      <div {...getRootProps({ className: "dropzone col-sm-6" })}>
        <input {...getInputProps()} />
        <p>Uploadez vos fichiers ici</p>
      </div>
      <div className="col-sm-6">
        <h6>Fichiers uploadée</h6>
        <p>{files}</p>
      </div>
    </div>
  );
};

export default Basic;
