import { Table, Card, Title } from "@mantine/core";
import cropData from "../assets/cropData.json";

const TableComponent = () => {
  const aggregatedData = cropData.reduce((acc, curr) => {
    const year = curr.Year;
    const production = parseFloat(curr["Crop Production (UOM:t(Tonnes))"] || "0");
    if (!acc[year]) {
      acc[year] = { maxCrop: curr["Crop Name"], minCrop: curr["Crop Name"], maxProduction: production, minProduction: production };
    } else {
      if (production > acc[year].maxProduction) {
        acc[year].maxProduction = production;
        acc[year].maxCrop = curr["Crop Name"];
      }
      if (production < acc[year].minProduction) {
        acc[year].minProduction = production;
        acc[year].minCrop = curr["Crop Name"];
      }
    }
    return acc;
  }, {} as Record<string, { maxCrop: string; minCrop: string; maxProduction: number; minProduction: number }>);

  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <Title order={2} style={{ marginBottom: "1rem", textAlign: "center" }}>
        Crop Production Table
      </Title>
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead style={{ backgroundColor: "#F3F4F6" }}>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(aggregatedData).map(([year, data]) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{data.maxCrop}</td>
              <td>{data.minCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default TableComponent;
