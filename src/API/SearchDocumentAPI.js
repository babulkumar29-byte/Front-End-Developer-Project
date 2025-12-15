export const searchDocuments = ({
  major_head,
  minor_head,
  from_date,
  to_date,
  tags = [],
  uploaded_by = "",
  start = 0,
  length = 10,
  searchValue = ""
}) => {
  return api.post("/searchDocumentEntry", {
    major_head,
    minor_head,
    from_date,
    to_date,
    tags, // [{ tag_name: "" }]
    uploaded_by,
    start,
    length,
    filterId: "",
    search: {
      value: searchValue
    }
  });
};
