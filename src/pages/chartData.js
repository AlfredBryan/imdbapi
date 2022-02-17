export const turnOverBarData = (labels, barValues) => {
  return {
    labels: labels.map((item) => item),
    datasets: [
      {
        label: "Dataset",
        data: barValues.map((item) => Math.round(item)),
        backgroundColor: ["rgba(91, 143, 249)"],
        borderRadius: 20,
        borderWidth: 2,
        borderSkipped: false,
      },
    ],
  };
};
