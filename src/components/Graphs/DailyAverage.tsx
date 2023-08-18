import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export default function DailyAverageGraph() {
  const options = {
    chart: {
      type: "bar",
      height: 18,
      spacingTop: 0,
      spacingRight: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      plotBorderWidth: 0,
      marginRight: 0,
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    subtitle: {
      text: "",
    },
    tooltip: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
      plotLines: [
        {
          color: "#0B1C2C",
          width: 2,
          value: 300,
          zIndex: 5,
        },
      ],
      min: 0,
      max: 400,
    },
    xAxis: {
      lineWidth: 0,
      tickWidth: 0,
      labels: {
        enabled: false,
      },
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        pointWidth: 18,
      },
    },
    series: [
      {
        data: [200],
        color: "#ECEDEF",
        zIndex: -1,
      },
      {
        data: [200],
        color: "#F42829",
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
