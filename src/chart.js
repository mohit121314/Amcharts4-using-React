import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./App.css";

am4core.useTheme(am4themes_animated);

export default class App extends Component {
  componentDidMount() {
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    let data = [];
    let visits = 0;
    for (let i = 1; i < ; i++) {
      visits
      data.push({
        date: new Date().getTime()
        name: "name" + i,
        value: visits
      });
    }

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: "hour"
    };
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.grid.template.disabled = false;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 50;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.name = "Sales";

    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.stroke = am4core.color("#ff0000");
    series1.fill = am4core.color("#ff0000");
    series1.strokeWidth = 3;
    series1.dataFields.valueY = "value1";
    series1.dataFields.dateX = "date";
    series1.name = "Market";
    series1.tooltipText = `{category}
        {value1}`;
    var bullet = series1.bullets.push(new am4charts.CircleBullet());
    bullet.events.on("hit", function(ev) {
      series1.tooltipText = `Category:{category}
          Value:{value1}
          Time-Stamp:{date}`;
    });

    chart.cursor = new am4charts.XYCursor();
    bullet.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    this.chart = chart;
  }

  render() {
    return (
      <div>
        <div className="header">
          <select name="Time">
            <option value="six">6 Hr</option>
            <option value="twelve">12 Hr</option>
          </select>
        </div>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    );
  }
}
