// 計算所有總分與平均
function calculateScores() {
    const table = document.getElementById("scoreTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let sum = 0;
        let count = 0;

        // 遍歷成績欄位
        for (let j = 2; j < 5; j++) {
            const score = parseFloat(cells[j].textContent) || 0;
            sum += score;
            count++;
        }

        // 計算總分與平均
        const average = (sum / count).toFixed(2);
        cells[5].textContent = sum;
        cells[6].textContent = average;
    }
}

// 當成績更新時自動計算
document.addEventListener("DOMContentLoaded", () => {
    calculateScores(); // 初始化計算

    const scores = document.querySelectorAll(".score");
    scores.forEach((score) => {
        score.addEventListener("input", calculateScores);
    });
});