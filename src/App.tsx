import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import TaskListPage from "./pages/tasks/taskListPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskListPage />} /> {/* タスク一覧ページのルーティング設定 */}
      <Route path="/tasks/:id" element={<TaskDetailPage />} />  {/* タスクの詳細ページのルーティングを追加 */}
    </Routes>
  );
}

export default App;
