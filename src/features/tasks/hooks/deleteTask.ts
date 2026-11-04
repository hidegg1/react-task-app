import { mockTasks } from "../mocks/task";

export const deleteTask = (id: string): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = mockTasks.findIndex((task) => task.id === Number.parseInt(id));
            if (index !== -1) {
                mockTasks.splice(index, 1);  // 該当のタスクを削除
                resolve(true);
            } else {
                resolve(false);
            }
        }, 500);
    });
};