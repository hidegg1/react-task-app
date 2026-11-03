import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../hooks/getTaskById";
import type { Task } from "../../../types/task";
import TaskDetail from "../components/TaskDetail";
import styles from "../styles/taskDetail.module.css";

export default function TaskDetailContainer() {
    // URLからタスクIDを取得
    const { id } = useParams<{ id?: string }>();
    // 取得したタスクを保存する。取得するまでは null（タスクがない状態）
    const [task, setTask] = useState<Task | null>(null);

    // 初回表示時と id が変わったときに、指定されたIDのタスクを取得
    useEffect(() => {
        // id がなければ取得できないので、ここで処理を終える
        if (!id) return;

        // await を使うための async 関数を「定義」
        async function fetchTask() {
            // タスクを取得できるまで待つ
            const fetchedTask = await getTaskById(id);
            // 見つからず undefined の場合は null を保存する
            setTask(fetchedTask ?? null);
        }
        // 定義した関数を「実行」
        fetchTask();
    }, [id]); // id が変わったら、この useEffect を再び実行する

    // タスクがまだ取得できていない場合はローディング表示
    if (!task) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "300px",
                }}
            >
                読み込み中...
            </div>
        );
    }

    return (
        <div className={styles.taskDetailContainer}>
            {/* 右のtaskは、stateでセットしてる取得したタスク情報 */}
            {/* 左のtaskはprops の名前（type Props で決めた名前） */}
            <TaskDetail task={task} />{/* 取得したタスク情報をTaskDetailコンポーネントに渡す */}
        </div>
    );
}
