import { useEffect, useState } from "react";
import axios from "axios";

interface FileItem {
  fileName: string;
  uploadDate: string;
  fileUrl?: string; // Optional if linking directly to S3
}

const Dashboard = () => {
  const [userData, setUserData] = useState<{ username: string; email: string } | null>(null);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
    fetchUserFiles();
  }, []);

  const fetchUserData = async () => {
    try {
      console.log("Fetching user data..."); // ✅ TODO: Replace with API call
      // ✅ TODO: Call API Gateway `/user-profile` to fetch user details
      const response = await axios.get("https://your-api-gateway-url/user-profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserFiles = async () => {
    try {
      console.log("Fetching uploaded files..."); // ✅ TODO: Replace with API call
      // ✅ TODO: Call API Gateway `/list-files` to fetch uploaded files
      const response = await axios.get("https://your-api-gateway-url/list-files", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFiles(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>

      {/* ✅ Display user details */}
      {userData ? (
        <div>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}

      <h3>Uploaded Files</h3>
      {loading ? <p>Loading files...</p> : (
        files.length > 0 ? (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <strong>{file.fileName}</strong> - {new Date(file.uploadDate).toLocaleString()}
                {file.fileUrl && <a href={file.fileUrl} target="_blank" rel="noopener noreferrer"> View</a>}
              </li>
            ))}
          </ul>
        ) : (
          <p>No files uploaded yet.</p>
        )
      )}
    </div>
  );
};

export default Dashboard;
