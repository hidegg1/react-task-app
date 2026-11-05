import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { createTask } from "../hooks/createTask";
import styles from "../styles/taskForm.module.css";
import type { Priority, TaskFormData } from "../../../types/task";

export default function TaskFormContainer() {
    const [formData, setFormData] = useState<TaskFormData>({
        title: "",
        description: "",
        priority: "medium", // 初期値として medium を設定
        dueDate: "",
        status: false
    });

    // ナビゲーションを使用して前の画面に戻る
    const navigate = useNavigate();

    const handleChange = (
        // handleChangeの引数の型を定義
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        // 入力が変わったフォームデータのnameとvalueを取得
        const { name, value } = e.target;

        // priority のみ型アサーションを使って Priority 型へ変換
        setFormData((prev: TaskFormData) => ({
            // 前のフォームデータをコピー
            ...prev,
            // 入力が変わったフォームデータを更新
            [name]: name === "priority" ? (value as Priority) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // フォームのデフォルトの動作を防止
        e.preventDefault();
        await createTask(formData);
        // タスク作成後にタスク一覧画面に遷移
        navigate("/tasks");
    };

    return (
        <div className={styles.container}>
            <h1>新規タスク作成</h1>
            <TaskForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <div className={styles.cancelContainer}>
                <Link to="/tasks" className={styles.cancelLink}>
                    前の画面に戻る
                </Link>
            </div>
        </div>
    );
}