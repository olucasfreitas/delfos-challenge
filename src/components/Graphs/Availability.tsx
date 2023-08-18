import theme from "@/helpers/theme";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function AvailabilityGraph() {
  const options = {
    chart: {
      type: "column",
      height: 130 + 23,
      spacing: 23,
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
          color: "#1B49E0",
          width: 2,
          value: 90,
          zIndex: 5,
        },
        {
          color: "#1B49E0",
          width: 2,
          value: 80,
          zIndex: 5,
          dashStyle: "shortdot",
        },
      ],
    },
    xAxis: {
      lineWidth: 0,
      categories: [
        "00 - 03h",
        "04 - 07h",
        "08 - 12h",
        "13 - 16h",
        "17 - 20h",
        "Agora",
      ],
      labels: {
        align: "center",
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: "500",
          color: "#615E69",
          lineHeight: "15px",
        },
      },
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        stacking: "percent",
      },
      series: {
        pointWidth: 87,
      },
    },
    series: [
      {
        data: [100, 100, 100, 100, 100, 100],
        color: "#ECEDEF",
      },
      {
        data: [0, 200, 0, 0, 150, 100],
        color: "#F42829",
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: theme.breakpoints.values.desktop,
          },
          chartOptions: {
            chart: {
              height: 130 + 20,
              spacing: 20,
            },
            plotOptions: {
              series: {
                pointWidth: 50,
              },
            },
          },
        },
        {
          condition: {
            maxWidth: theme.breakpoints.values.mobileMedium,
          },
          chartOptions: {
            chart: {
              height: 130 + 20,
              spacing: [20, 10, 20, 10],
            },
            plotOptions: {
              series: {
                pointWidth: 30,
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
