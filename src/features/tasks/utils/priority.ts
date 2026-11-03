import type { Priority } from "../../../types/task";

// 優先度に応じたスタイルクラスを返す関数
export const getPriorityClass = (
    priority: Priority, // 優先度（high | medium | low）などの文字列（Priority型）
    styles: Record<string, string> // スタイルモジュール（key-value形式のオブジェクト）
): string => {
    switch (priority.toLowerCase()) {
        case "high":
            return styles.highPriority;
        case "medium":
            return styles.mediumPriority;
        case "low":
            return styles.lowPriority;
        default:
            return styles.defaultPriority;
    }
};