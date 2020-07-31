import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class Amchartprac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 6
    };
  }
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [{
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czechia",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    }];
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
  }

  // timeChangeHandler = e => {
  //   this.setState(
  //     {
  //       time: e.target.value
  //     },
  //     () => this.myfunc(this.state.time)
  //   );
  // };

  // myfunc(i) {
  //   let chart = am4core.create("chartdiv", am4charts.XYChart);
  //   let sum = new Date().getTime();
  //   chart.paddingRight = 20;
  //   let data = [];
  //   if (i === "6") {
  //     for (let i = 1; i <= 360; i++) {
  //       data.push({
  //         date: sum - 60000 * i,
  //         visit: 5
  //       });
  //     }
  //   } else {
  //     for (let i = 1; i <= 720; i++) {
  //       data.push({
  //         date: sum - 60000 * i,
  //         visit: 5
  //       });
  //     }
  //   }

  //   chart.data = data;
  //   let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //   dateAxis.renderer.grid.template.location = 0;
  //   dateAxis.renderer.grid.template.disabled = true;
  //   dateAxis.baseInterval = {
  //     timeUnit: "minute"
  //   };

  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //   valueAxis.tooltip.disabled = true;
  //   valueAxis.renderer.grid.template.disabled = false;
  //   valueAxis.min = 0;
  //   valueAxis.max = 5;

  //   let series = chart.series.push(new am4charts.ColumnSeries());
  //   series.dataFields.dateX = "date";
  //   series.dataFields.valueY = "visit";
  //   series.columns.template.fill = am4core.color("#98CF89");
  //   series.columns.template.stroke = am4core.color("#98CF89");
  //   series.columns.template.width = am4core.percent(100);
  //   chart.cursor = new am4charts.XYCursor();
  //   this.chart = chart;

  //   let scrollbarX = new am4charts.XYChartScrollbar();
  //   scrollbarX.series.push(series);
  //   chart.scrollbarX = scrollbarX;
  // }

  render() {
    return (
      <div>
        {/* <div className="header">
          <select
            name="Time"
            value={this.state.time}
            onChange={this.timeChangeHandler}
          >
            <option value="6">Past 6 Hour Data</option>
            <option value="12">Past 12 Hour Data</option>
          </select>
        </div> */}
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    );
  }
}
