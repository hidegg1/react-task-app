import type { Task, TaskFormData } from "../../../types/task";
import { mockTasks } from "../mocks/task";

/**
 * 新しいタスクを作成し、モックデータに追加する。
 *
 * API通信を模して、500ミリ秒後に完了する。
 *
 * @param taskData - フォームに入力されたタスクの内容
 * @returns ID・日時・未完了のステータスを設定した、作成後のタスク
 */
export const createTask = (taskData: TaskFormData): Promise<Task> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newTask: Task = {
                ...taskData,
                id: mockTasks.length + 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                status: false,
            };
            // 新しいタスクをmockTasksに追加
            mockTasks.push(newTask);
            // 新しいタスクを返す
            resolve(newTask);
        }, 500);
    });
};
