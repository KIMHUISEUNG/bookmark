import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookmarkDetailPage from "../pages/BookmarkDetailPage";
import TagsPage from "../pages/TagsPage";
import DashboardPage from "../pages/DashboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/b/:id" element={<BookmarkDetailPage />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
