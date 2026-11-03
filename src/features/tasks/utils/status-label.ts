// ステータス（true/false）に応じて表示ラベルを返す
export const getStatusLabel = (status: boolean): string => {
    return status ? "完了" : "未完了";
};