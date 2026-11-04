import { useNavigate } from "react-router-dom";
import { deleteTask } from "../hooks/deleteTask";
import styles from "../styles/taskDetail.module.css";

type Props = {
    id?: string;
};

export default function TaskDeleteButton({ id }: Props) {
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!id) return
        const result = window.confirm("本当に削除しますか？");
        if (result) {
            await deleteTask(id);
            navigate("/tasks");
        }
    };

    return (
        <button onClick={handleClick} className={styles.taskDeleteBtn}>
            削除
        </button>
    );
}