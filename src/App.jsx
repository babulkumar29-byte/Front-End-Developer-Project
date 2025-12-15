import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import UploadFile from "./Components/UploadFile";
import SearchFiles from "./Components/SearchFiles";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadFile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchFiles />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
