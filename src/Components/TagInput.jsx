import { useState } from "react";

export default function TagInput({ value = [], onChange, suggestions = [] }) {
  const [input, setInput] = useState("");

  const addTag = (tag) => {
    if (!tag || value.includes(tag)) return;
    onChange([...value, tag]);
    setInput("");
  };

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(input.trim());
    }
  };

  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.toLowerCase().includes(input.toLowerCase()) &&
      !value.includes(s)
  );

  return (
    <div>
      <div className="d-flex flex-wrap gap-2 mb-2">
        {value.map((tag) => (
          <span
            key={tag}
            className="badge bg-primary"
            style={{ padding: "8px" }}
          >
            {tag}
            <span
              style={{ cursor: "pointer", marginLeft: 8 }}
              onClick={() => removeTag(tag)}
            >
              ×
            </span>
          </span>
        ))}
      </div>

      <input
        className="form-control"
        placeholder="Type tag and press Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {input && filteredSuggestions.length > 0 && (
        <div className="border rounded mt-1 bg-white">
          {filteredSuggestions.map((s) => (
            <div
              key={s}
              className="p-2"
              style={{ cursor: "pointer" }}
              onClick={() => addTag(s)}
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
