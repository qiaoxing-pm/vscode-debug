export function isValidDropTarget(type: string, targetType: string) {
    type = type.toLowerCase();
    targetType = targetType.toLowerCase();
    if (targetType === "screen") {
        return true;
    }
    if (
        targetType !== "obj" &&
        targetType !== "button" &&
        targetType !== "tabitem"
    ) {
        return false;
    }
    if (targetType === "button" && type !== "label") {
        return false;
    }
    return true;
}