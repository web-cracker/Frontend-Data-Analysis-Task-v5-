import * as echarts from "echarts";
import { useEffect } from "react";
import cropData from "../assets/cropData.json";

const BarChartComponent = () => {
  useEffect(() => {
    const chartDom = document.getElementById("barChart")!;
    const chartInstance = echarts.init(chartDom);

    const aggregatedYield: Record<string, { totalYield: number; count: number }> = {};
    cropData.forEach((item) => {
      const cropName = item["Crop Name"];
      const yieldValue = parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || "0");
      if (!aggregatedYield[cropName]) {
        aggregatedYield[cropName] = { totalYield: yieldValue, count: 1 };
      } else {
        aggregatedYield[cropName].totalYield += yieldValue;
        aggregatedYield[cropName].count++;
      }
    });

    const cropNames = Object.keys(aggregatedYield);
    const averageYield = cropNames.map(
      (crop) => aggregatedYield[crop].totalYield / aggregatedYield[crop].count
    );

    chartInstance.setOption({
      title: { text: "Average Yield Per Crop (1950-2020)", left: "center", textStyle: { fontSize: 20 } },
      tooltip: { trigger: "item" },
      xAxis: {
        type: "category",
        data: cropNames,
        axisLabel: { rotate: 45, color: "#333" },
      },
      yAxis: {
        type: "value",
        axisLabel: { color: "#333" },
      },
      series: [
        {
          type: "bar",
          data: averageYield,
          itemStyle: { color: "#4A90E2" },
          barWidth: "50%",
        },
      ],
    });
  }, []);

  return <div id="barChart" style={{ width: "100%", height: "400px", marginTop: "2rem" }}></div>;
};

export default BarChartComponent;
