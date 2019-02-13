import React, { Component } from "react";
import "./App.css";
import FusionCharts from "fusioncharts/core";
import MultiLine2D from "fusioncharts/viz/msline";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
ReactFC.fcRoot(FusionCharts, MultiLine2D, FusionTheme);

const chartConfigs = {
  type: "msline", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Number of visitors last week",
      subCaption: "Bakersfield Central vs Los Angeles Topanga",
      xAxisName: "Day",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "Mon"
          },
          {
            label: "Tue"
          },
          {
            label: "Wed"
          },
          {
            vline: "true",
            lineposition: "0",
            color: "#6baa01",
            labelHAlign: "center",
            labelPosition: "0",
            label: "National holiday",
            dashed: "1"
          },
          {
            label: "Thu"
          },
          {
            label: "Fri"
          },
          {
            label: "Sat"
          },
          {
            label: "Sun"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Bakersfield Central",
        data: [
          {
            value: "15123"
          },
          {
            value: "14233"
          },
          {
            value: "25507"
          },
          {
            value: "9110"
          },
          {
            value: "15529"
          },
          {
            value: "20803"
          },
          {
            value: "19202"
          }
        ]
      },
      {
        seriesname: "Los Angeles Topanga",
        data: [
          {
            value: "13400"
          },
          {
            value: "12800"
          },
          {
            value: "22800"
          },
          {
            value: "12400"
          },
          {
            value: "15800"
          },
          {
            value: "19800"
          },
          {
            value: "21800"
          }
        ]
      }
    ],
    trendlines: [
      {
        line: [
          {
            startvalue: "17022",
            color: "#6baa01",
            valueOnRight: "1",
            displayvalue: "Average"
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
