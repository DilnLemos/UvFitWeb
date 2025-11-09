const ctx = document.getElementById("radarChart");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["Strength", "Cardio", "Mood", "Nutrition", "Sleep"],
    datasets: [
      {
        label: "Esta Semana",
        data: [8, 6, 7, 9, 8],
        borderColor: "#f87171",
        backgroundColor: "rgba(248, 113, 113, 0.2)",
        pointBackgroundColor: "#f87171",
      },
      {
        label: "Semana Pasada",
        data: [6, 5, 6, 7, 6],
        borderColor: "#60a5fa",
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        pointBackgroundColor: "#60a5fa",
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: { stepSize: 2, color: "#aaa", backdropColor: "transparent" },
        grid: { color: "#444" },
        angleLines: { color: "#333" },
        pointLabels: { color: "#ddd" },
      }
    },
    plugins: { legend: { labels: { color: "#ccc" } } }
  }
});
