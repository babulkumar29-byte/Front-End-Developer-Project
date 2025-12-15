import { useState } from "react";
import { searchDocuments } from "../API/api";
import PreviewModal from "../Components/PreviewModal";
import TagInput from "./TagInput";



export default function SearchFiles() {
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const tagSuggestions = ["invoice", "hr", "finance", "legal", "salary"];

  const handleSearch = async () => {
    try {
      setLoading(true);

      const res = await searchDocuments({
  keyword,
  tags: tags.join(","),
});


      setResults(res.data.data || []);
    } catch (err) {
      console.error(err);
      alert("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-3">Search Documents</h3>

      <div className="row mb-3">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Keyword (title / description)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <button
            className="btn btn-primary w-100"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {/* Results */}
      {results.length === 0 && !loading && (
        <p>No documents found</p>
      )}

      {results.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.title}</td>
                <td>{doc.description}</td>
                <td>{doc.tags}</td>
                <td>
  <button
    className="btn btn-sm btn-info me-2"
    onClick={() => setPreviewUrl(doc.file_url)}
  >
    Preview
  </button>

  <a
    href={doc.file_url}
    download
    className="btn btn-sm btn-success"
  >
    Download
  </a>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
