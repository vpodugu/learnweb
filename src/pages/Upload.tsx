import { useState } from "react";
import { PrimaryButton } from "../styles/Button";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    console.log("Selected File:", file); // ✅ TODO: Replace this with an API call

    // ✅ TODO: Call API Gateway `/upload` to get a signed S3 URL
    // ✅ TODO: Upload file directly to S3 using signed URL
    // ✅ TODO: Notify user on successful upload
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <PrimaryButton onClick={handleUpload} disabled={!file}>Upload</PrimaryButton>
    </div>
  );
};

export default Upload;
