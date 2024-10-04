"use client";

import { useState } from "react";
import FileViewer from "react-file-viewer";

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [ext, setExt] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      const filename = selectedFile.name;
      const extension = filename.includes('.') ? filename.split('.').pop() || '' : '';
      setExt(extension);
      console.log(selectedFile);
      setFile(selectedFile);
    }
  };
  return (
    <div>
      <h1>File Viewer</h1>
      <input type="file" onChange={handleChange} />
      {file && (
        <FileViewer
          fileType={ext}
          errorComponent={() => <div>Error displaying file</div>}
          filePath={URL.createObjectURL(file)}
        />
      )}
    </div>
  );
}
