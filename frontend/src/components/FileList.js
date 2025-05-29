import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${API_URL}/files`);
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            {file.filename} - <a href={file.path} download>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;