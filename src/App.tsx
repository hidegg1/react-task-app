import { Route, Routes } from "react-router-dom";
import Header from "./shared/components/Header";
import HomePage from "./pages/home";
import TaskListPage from "./pages/tasks/taskListPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";
import TaskCreatePage from "./pages/tasks/taskCreatePage";
import TaskEditPage from "./pages/tasks/taskEditPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage />} /> {/* タスク一覧ページのルーティング設定 */}
        <Route path="/tasks/:id" element={<TaskDetailPage />} />  {/* タスクの詳細ページのルーティングを追加 */}
        <Route path="/tasks/new" element={<TaskCreatePage />} /> {/* タスク作成ページへのルーティングを追加 */}
        <Route path="/tasks/:id/edit" element={<TaskEditPage />} />  {/* タスク編集ページのルーティング */}
      </Routes>
    </>
  );
}

export default App;
