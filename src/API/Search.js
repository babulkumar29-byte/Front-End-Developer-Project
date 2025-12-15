const res = await searchDocuments({
  major_head: "Personal",
  tags: [{ tag_name: "2024" }]
});

setResults(res.data.data);
import { searchDocuments } from "../API/SearchDocumentAPI";