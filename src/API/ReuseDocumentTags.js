export const fetchDocumentTags = (term = "") => {
  return api.post("/documentTags", {
    term
  });
};
