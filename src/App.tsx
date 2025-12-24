import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ElectricityDashboard from "./ElectricityDashboard";

export default function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Generation</Tab>
        <Tab>Demand</Tab>
        <Tab>Supply</Tab>
        <Tab>Coal PLF</Tab>
        <Tab>RTM Prices</Tab>
      </TabList>

      <TabPanel>
        <ElectricityDashboard
          type="generation"
          title="India Electricity Generation Dashboard"
          subtitle="Daily generation data, trends, and YoY/MoM analytics"
          seriesLabel="Generation"
          unitLabel="units"
          valueColumnKey="generation_gwh"
          defaultCsvPath="/data/generation.csv"
          enableAutoFetch={true}
          calcMode="sum"
          valueDisplay={{
            suffix: " units",
            decimals: 2,
          }}
        />
      </TabPanel>

      <TabPanel>
        <ElectricityDashboard
          type="demand"
          title="India Electricity Demand Dashboard"
          subtitle="Daily demand data, trends, and YoY/MoM analytics"
          seriesLabel="Demand"
          unitLabel="units"
          valueColumnKey="demand_gwh"
          defaultCsvPath="/data/demand.csv"
          enableAutoFetch={false}
          calcMode="sum"
          valueDisplay={{
            suffix: " units",
            decimals: 2,
          }}
        />
      </TabPanel>

      <TabPanel>
        <ElectricityDashboard
          type="supply"
          title="India Electricity Supply Dashboard"
          subtitle="Daily supply data, trends, and YoY/MoM analytics"
          seriesLabel="Supply"
          unitLabel="units"
          valueColumnKey="supply_gwh"
          defaultCsvPath="/data/supply.csv"
          enableAutoFetch={false}
          calcMode="sum"
          valueDisplay={{
            suffix: " units",
            decimals: 2,
          }}
        />
      </TabPanel>

      <TabPanel>
        <ElectricityDashboard
          type="coal-plf"
          title="India Coal PLF Dashboard"
          subtitle="Coal PLF trends, period averages, and YoY/WoW analytics"
          seriesLabel="Coal PLF"
          unitLabel="%"
          // valueColumnKey is used for export header + sample CSV; parser accepts any single 2nd column too
          valueColumnKey="coal_plf"
          // IMPORTANT: file has space in name
          defaultCsvPath="/data/Coal PLF.csv"
          enableAutoFetch={false}
          calcMode="avg"
          valueDisplay={{
            suffix: "%",
            decimals: 2,
          }}
        />
      </TabPanel>

      <TabPanel>
        <ElectricityDashboard
          type="rtm-prices"
          title="India RTM Prices Dashboard"
          subtitle="RTM price trends, period averages, and YoY/WoW analytics"
          seriesLabel="RTM Prices"
          unitLabel="Rs/Unit"
          valueColumnKey="rtm_price"
          defaultCsvPath="/data/RTM Prices.csv"
          enableAutoFetch={false}
          calcMode="avg"
          valueDisplay={{
            suffix: " Rs/Unit",
            decimals: 2,
          }}
        />
      </TabPanel>
    </Tabs>
  );
}
