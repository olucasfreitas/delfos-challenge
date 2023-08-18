import theme from "@/helpers/theme";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function MostDowntimeAssets() {
  const options = {
    chart: {
      type: "bar",
      spacingTop: 0,
      spacingRight: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      plotBorderWidth: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      height: 190,
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
    credits: {
      enabled: false,
    },
    xAxis: {
      lineWidth: 0,
      categories: [
        "Asset Name",
        "Asset Name",
        "Asset Name",
        "Asset Name",
        "Asset Name",
        "Asset Name",
        "Asset Name",
        "Asset Name",
      ],
      labels: {
        align: "center",
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: "600",
          color: "#615E69",
          lineHeight: "15px",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
    },
    plotOptions: {
      series: {
        pointPadding: 0.15,
        groupPadding: 0,
        borderWidth: 0,
        shadow: false,
        stacking: "normal",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        data: [80, 80, 80, 80, 80, 80, 80, 80],
        color: "#ECEDEF",
        zIndex: -1,
      },
      {
        data: [
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
        ],
        color: "#FFC599",
      },
      {
        data: [
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
        ],
        color: "#FF7005",
      },
      {
        data: [
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
        ],
        color: "#F42829",
      },
      {
        data: [
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
          { y: 20 },
        ],
        color: "#E6C84C",
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: theme.breakpoints.values.desktop,
          },
          chartOptions: {
            xAxis: {
              labels: {
                style: {
                  fontSize: "10px",
                  lineHeight: "12px",
                },
              },
            },
          },
        },
        {
          condition: {
            maxWidth: theme.breakpoints.values.tablet,
          },
          chartOptions: {
            xAxis: {
              labels: {
                style: {
                  fontSize: "12px",
                  lineHeight: "15px",
                },
              },
            },
          },
        },
      ],
    },
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
