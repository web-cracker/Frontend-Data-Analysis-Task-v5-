# Indian Agriculture Data Visualization

This project is a frontend data analysis task for **Manufac Analytics**. It visualizes the Indian Agriculture dataset provided by the National Data and Analytics Platform (NDAP), NITI Aayog. The assignment involves creating a table and a bar chart to represent aggregated crop production data.

## Features

1. **Table Component**:
   - Displays the crop with maximum and minimum production for each year (1950–2020).
   - Implemented using **Mantine v7**.

2. **Bar Chart Component**:
   - Plots the average yield of crops (1950–2020) on the vertical axis, with crop names on the horizontal axis.
   - Implemented using **Apache ECharts**.

---

## Technologies Used

- **TypeScript** (No JavaScript)
- **Vite Min Template** (configured with TypeScript)
- **Mantine v7** (for the table component)
- **Apache ECharts** (for the bar chart component)

---

## Screenshots

### Table Component
![Table Screenshot](path-to-your-table-screenshot.png)

### Bar Chart Component
![Bar Chart Screenshot](path-to-your-bar-chart-screenshot.png)

---

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repository-name
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
manufac-frontend
├── public
├── src
│   ├── assets/
│   │   └── cropData.json
│   ├── components
│   │   ├── TableComponent.tsx
│   │   └── BarChartComponent.tsx
│   ├── data
│   │   └── cropData.json
│   ├── utils
│   │   └── dataUtils.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts

```

---


