import React, { useState, useEffect } from "react";

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const handlePaste = (event) => {
      const items = (event.clipboardData || event.originalEvent.clipboardData).items;
      for (let index in items) {
        const item = items[index];
        if (item.kind === "file" && item.type.includes("image")) {
          const file = item.getAsFile();
          handleImageFile(file);
          break; // Stop after handling the first image found
        }
      }
    };

    document.body.addEventListener("paste", handlePaste);

    return () => {
      document.body.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleImageFile(file);
  };

  const handleImageFile = (file) => {
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleUpload = () => {
    // Logic to upload the selected file
    console.log("Uploading file:", selectedFile);
    // You can add your file upload logic here
  };

  return (
    <div className="photo-upload">
      <h2 className="mb-4">Upload Profile Picture</h2>
      <div className="section-0 section-1 section-2">
        <div className="image-preview-container">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" />
          ) : (
            <div
              className="empty-image-preview-container"
              style={{
                width: "320px",
                height: "320px",
                backgroundColor: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>Upload & Paste</span>
            </div>
          )}
        </div>
        <div className="section-1 section-3">
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control mb-3"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="btn btn-primary"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoUpload;
