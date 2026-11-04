import type { TaskFormData } from "../../../types/task";
import styles from "../styles/taskForm.module.css";

type Props = {
    formData: TaskFormData; // フォームデータをTaskFormData型で受け取ります
    onChange: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void; // 入力が変更されたときに呼ばれる関数の型
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // フォームが送信されたときに呼ばれる関数の型
};

export default function TaskForm({ formData, onChange, onSubmit }: Props) {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label>タスク名：</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={onChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label>説明：</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={onChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label>優先度：</label>
                <select name="priority" value={formData.priority} onChange={onChange}>
                    <option value="high">高</option>
                    <option value="medium">中</option>
                    <option value="low">低</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label>期限日：</label>
                <input
                    required
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={onChange}
                />
            </div>
            <button type="submit" className={styles.submitButton}>
                作成する
            </button>
        </form>
    );
}