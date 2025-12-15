await uploadDocument({
  file,
  major_head: "Personal",
  minor_head: "John",
  document_date: "12-02-2024",
  document_remarks: "Test Remarks",
  tags: [{ tag_name: "2024" }],
  user_id: "babul"
});
