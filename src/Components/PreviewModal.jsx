export default function PreviewModal({ fileUrl, onClose }) {
  if (!fileUrl) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          background: "#fff",
          padding: 10,
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            border: "none",
            background: "red",
            color: "#fff",
            padding: "5px 10px",
          }}
        >
          X
        </button>

        {/* PDF / Image Preview */}
        <iframe
          src={fileUrl}
          title="Document Preview"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
