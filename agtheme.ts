import { AgChartTheme } from "ag-charts-enterprise";

export const myTheme: AgChartTheme = {
    palette: {
        fills: ['#006f9b', '#ff7faa', '#00994d', '#ff8833', '#00a0dd'],
        strokes: ['#003f58', '#934962', '#004a25', '#914d1d', '#006288'],
    },
    overrides: {
        common: {
            padding: {
                left: 0,
                right: 0,
                top: 8,
                bottom: 0
              },
        }
    }
};