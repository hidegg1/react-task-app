import type { Task } from "../../../types/task";
import { mockTasks } from "../mocks/task";

// Promiseを使ってmockのタスクデータを安全に取得する処理
// 戻り値を明示的にPromise<Task[]>に指定
export const getTasks = (): Promise<Task[]> => {
    // 即座に引数で指定したsetTimeoutの処理が実行される
    return new Promise((resolve) => {
        setTimeout(() => resolve([...mockTasks]));
    });
};