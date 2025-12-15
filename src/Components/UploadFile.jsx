import { useState } from "react";
import { uploadDocument } from "../API/api";
import TagInput from "./TagInput";


export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const tagSuggestions = ["invoice", "hr", "finance", "legal", "salary"];
  

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags); // comma-separated

    try {
      setLoading(true);
      await uploadDocument(formData);
      alert("Document uploaded successfully");

      // reset form
      setFile(null);
      setTitle("");
      setDescription("");
      setTags("");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <h3 className="mb-3">Upload Document</h3>

      <input
        type="file"
        className="form-control mb-2"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <input
        className="form-control mb-2"
        placeholder="Document Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
       <label className="mb-1">Tags</label>
<TagInput
  value={tags}
  onChange={setTags}
  suggestions={["invoice", "hr", "finance", "legal", "salary"]}
/>
formData.append("tags", tags.join(","));

      <button
        className="btn btn-primary w-100"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
