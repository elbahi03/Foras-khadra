export function formatDate(d) {
    const date = new Date(d);
    return date.toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric" });
}