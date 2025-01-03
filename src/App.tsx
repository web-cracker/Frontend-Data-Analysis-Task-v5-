import { Container, Title } from "@mantine/core";
import TableComponent from "./components/TableComponent";
import BarChartComponent from "./components/BarChartComponent";

const App = () => {
  return (
    <Container size="lg" style={{ paddingTop: "2rem" }}>
      <Title order={1} style={{ textAlign: "center", marginBottom: "2rem" }}>
        Crop Analytics Dashboard 🌾
      </Title>
      <TableComponent />
      <BarChartComponent />
    </Container>
  );
};

export default App;
