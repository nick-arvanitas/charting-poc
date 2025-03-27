import { AgChartTheme } from "ag-charts-enterprise";

// Define color palettes separately
const categoricalCoolPalette = ['#37393E', '#405F7B', '#287794', '#0090A4', '#00A8A8', '#00BF9F', '#5FC987', '#96D070', '#CBD360', '#FFD260', '#F4F6F8'];
const sequentialNegativePalette = ['#39272B', '#5C3033', '#7F3939', '#B24644', '#D6504C', '#F9564F', '#F6716E', '#F29694', '#F0B6B5', '#EED2D4', '#F4F6F8'];
const sequentialPositivePalette = ['#323A4E', '#355E60', '#28717C', '#1A828A', '#0D9498', '#00A6A6', '#37B6B6', '#78CBCC', '#9FD7D9', '#C6E3E6', '#F4F6F8'];
const sequentialWarmPalette = ['#39272B', '#5C3033', '#7F3939', '#B23644', '#D6504C', '#F9564F', '#F97150', '#FA874E', '#FBA14C', '#FFD260', '#F4F6F8'];
const sequentialBluePalette = ['#323A4E', '#234B7C', '#155BA6', '#076BD0', '#167EE6', '#3E94E8', '#64A8EA', '#88BBEC', '#ABCEED', '#CEE0EF', '#DFE1E6'];
const divergentPalette = [
    "#39272B",
    "#7F3939",
    "#F9564F",
    "#FA874E",
    "#FFD260",
    "#DFE1E6",
    "#C6E3E6",
    "#78CBCC",
    "#00A6A6",
    "#28717C",
    "#323A4E"
  ];

// Helper function to select colors either by count or specific indices
function selectColors(palette: string[], selection: number | number[]): string[] {
    if (typeof selection === 'number') {
        // If count provided, select evenly spaced colors
        if (selection >= palette.length) return palette;
        const step = Math.floor(palette.length / selection);
        return Array.from({length: selection}, (_, i) => palette[i * step]);
    } else {
        // If indices provided, select those specific colors
        return selection.map(index => palette[index]);
    }
}

// Base theme configuration
const baseTheme: AgChartTheme = {
    overrides: {
        common: {
            padding: {
                left: 0,
                right: 0,
                top: 8,
                bottom: 0
            },
            legend: {
                spacing: 16
            },
        },
        bar: {
            series: {
                highlightStyle: {
                    item: {
                        strokeWidth: 0
                    }
                }
            }
        },
        donut: {
            series: {
                innerRadiusRatio: .85,
                highlightStyle: {
                    item: {
                        strokeWidth: 0
                    }
                }
            }
        },
        'radial-bar': {
            series: {
                highlightStyle: {
                    item: {
                        strokeWidth: 0
                    }
                }
            }
        }
    }
};

// Theme generator functions
export function createCategoricalCoolTheme(selection: number | number[]): AgChartTheme {
    const colors = selectColors(categoricalCoolPalette, selection);
    return {
        ...baseTheme,
        palette: {
            fills: colors,
            strokes: colors
        }
    };
}

export function createSequentialNegativeTheme(selection: number | number[]): AgChartTheme {
    const colors = selectColors(sequentialNegativePalette, selection);
    return {
        ...baseTheme,
        palette: {
            fills: colors,
            strokes: colors
        }
    };
}

export function createSequentialPositiveTheme(selection: number | number[]): AgChartTheme {
    const colors = selectColors(sequentialPositivePalette, selection);
    return {
        ...baseTheme,
        palette: {
            fills: colors,
            strokes: colors
        }
    };
}

export function createSequentialWarmTheme(selection: number | number[]): AgChartTheme {
    const colors = selectColors(sequentialWarmPalette, selection);
    return {
        ...baseTheme,
        palette: {
            fills: colors,
            strokes: colors
        }
    };
}

export function createSequentialBlueTheme(selection: number | number[]): AgChartTheme {
    const colors = selectColors(sequentialBluePalette, selection);
    return {
        ...baseTheme,
        palette: {
            fills: colors,
            strokes: colors
        }
    };
}

export function createDivergentTheme(selection: number | number[]): AgChartTheme {
    const colors = selectColors(divergentPalette, selection);
    return {
        ...baseTheme,
        palette: {
            fills: colors,
            strokes: colors
        }
    };
}