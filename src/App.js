import React, { Component } from "react";
import "./App.css";
import FusionCharts from "fusioncharts/core";
import Line2D from "fusioncharts/viz/line";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const chartConfigs = {
  type: "line", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Total footfall in Bakersfield Central",
      subCaption: "Last week",
      xAxisName: "Day",
      yAxisName: "No. of Visitors",
      lineThickness: "2",
      theme: "fusion"
    },
    data: [
      {
        label: "Mon",
        value: "15123"
      },
      {
        label: "Tue",
        value: "14233"
      },
      {
        label: "Wed",
        value: "23507"
      },
      {
        label: "Thu",
        value: "9110"
      },
      {
        label: "Fri",
        value: "15529"
      },
      {
        label: "Sat",
        value: "20803"
      },
      {
        label: "Sun",
        value: "19202"
      }
    ],
    trendlines: [
      {
        line: [
          {
            startvalue: "18500",
            color: "#1aaf5d",
            displayvalue: "Average{br}weekly{br}footfall",
            valueOnRight: "1",
            thickness: "2"
          }
        ]
      }
    ]
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default App;
