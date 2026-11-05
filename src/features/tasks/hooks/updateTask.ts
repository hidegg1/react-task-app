import type { Task, TaskFormData } from "../../../types/task";
import { mockTasks } from "../mocks/task";

export const updateTask = (id: string, taskData: Partial<TaskFormData>): Promise<Task | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // パラメータのIDと一致しない場合、-1を返す関数
            const index = mockTasks.findIndex((task) => task.id === Number.parseInt(id));
            if (index !== -1) {
                mockTasks[index] = {
                    // 既存の全ての値を新しいオブジェクトにセットする
                    ...mockTasks[index],
                    // 新しい値を上書きする（後に指定した値が優先されるので記載順に注意）
                    ...taskData,
                    // 更新日時を現在日時で更新する
                    updatedAt: new Date().toISOString(),
                };
                resolve(mockTasks[index]);
            } else {
                resolve(null);
            }
        }, 500);
    });
};
