import theme from "@/helpers/theme";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function MostActivatedAlarms() {
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
        "Operando",
        "Sem Sinal",
        "Alarme",
        "Parado",
        "Outros",
        "M Preventiva",
        "M Corretiva",
        "Ambiental",
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
        data: [10, 20, 30, 40, 60, 70, 80, 90],
        color: "#ECEDEF",
        zIndex: -1,
      },
      {
        data: [
          { y: 90, color: "#17D79B" },
          { y: 80, color: "#ECEDCF" },
          { y: 70, color: "#E6C84C" },
          { y: 60, color: "#F42829" },
          { y: 40, color: "#FF7005" },
          { y: 30, color: "#1B49E0" },
          { y: 20, color: "#FFC599" },
          { y: 10, color: "#CC5801" },
        ],
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
