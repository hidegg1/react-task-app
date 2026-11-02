import { Link } from "react-router-dom";
import type { Priority, Task } from "../../../types/task";
import styles from "../styles/taskCard.module.css";

type Props = {
    task: Task;
};

export default function TaskCard({ task }: Props) {
    // 優先度に応じたクラス名を返す関数
    const getPriorityClass = (priority: Priority): string => {
        switch (priority.toLowerCase()) {
            case "high":
                return styles.highPriority
            case "medium":
                return styles.mediumPriority
            case "low":
                return styles.lowPriority
            default:
                return styles.defaultPriority
        }
    }

    // ステータスに応じた表示ラベルを返す関数
    const getStatusLabel = (status: boolean): string => {
        return status ? "完了" : "未完了";
    };

    return (
        <div className={styles.taskCard}>
            <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
                <h3 className={styles.taskTitle}>{task.title}</h3>
            </Link>
            <p className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}>
                {getStatusLabel(task.status)}
            </p>
            <p className={`${styles.badge} ${getPriorityClass(task.priority)}`}>{task.priority}</p>
            <p className={styles.taskDueDate}>{task.dueDate}</p>
        </div>
    );
}
