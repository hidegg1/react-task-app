import type { Task } from "../../../types/task";
import { mockTasks } from "../mocks/task";

// 戻り値の型は Promise<Task | undefined> と明示します
export const getTaskById = (id?: string): Promise<Task | undefined> => {
    if (!id) return Promise.resolve(undefined);
    return new Promise((resolve) => {
        setTimeout(() => {
            // task は、mockTasksの返り値で型は省略されてる
            const task = mockTasks.find((task) => task.id === Number.parseInt(id));
            resolve(task); // 見つからない場合は undefined が返る
        }, 500);
    });
};