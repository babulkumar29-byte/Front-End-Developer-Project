export const uploadDocument = ({
  file,
  major_head,
  minor_head,
  document_date,
  document_remarks,
  tags,
  user_id
}) => {
  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "data",
    JSON.stringify({
      major_head,
      minor_head,
      document_date,
      document_remarks,
      tags, // [{ tag_name: "RMC" }]
      user_id
    })
  );

  return api.post("/saveDocumentEntry", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
