import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import type { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";
import { Link } from "react-router-dom";

export default function TaskListContainer() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {  // こちらは普通の関数（Promise を返さない）
        const fetchTasks = async () => {  // await を使うための async 関数を「定義」
            const fetchedTasks = await getTasks();
            // useStateでも型定義をしてるので型セーフを実行
            setTasks(fetchedTasks);
        };
        // 定義した関数を「実行」
        fetchTasks();
    }, []);

    return (
        <div className={styles.container}>
            <h1>タスク一覧</h1>
            <div className={styles.taskListHeader}>  {/* タスク作成ページへのリンクを追加 */}
                <Link to="/tasks/new" className={styles.newTaskLink}>
                    新規作成
                </Link>
            </div>
            <div className={styles.tableContainer}>
                <div className={styles.header}>
                    <div>タスク名</div>
                    <div>ステータス</div>
                    <div>優先度</div>
                    <div>期限日</div>
                </div>
                <div className={styles.taskList}>
                    {tasks.map((task) => (
                        // keyはReact がリストの各要素を見分けるための特別な属性
                        // 左のtaskはprops の名前（type Props で決めた名前）
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
}
