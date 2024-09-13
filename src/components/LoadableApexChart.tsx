import loadable from '@loadable/component';
import Chart from 'react-apexcharts';

export const LoadableApexChart = loadable<React.ComponentProps<typeof Chart> & { css: Css }>(
  () => import('../../node_modules/react-apexcharts/dist/react-apexcharts') as any
);

// colors: [
//   'rgb(0, 121, 191)',
//   'rgb(112, 181, 0)',
//   'rgb(255, 159, 26)',
//   'rgb(235, 90, 70)',
//   'rgb(242, 214, 0)',
//   'rgb(195, 119, 224)',
//   'rgb(255, 120, 203)',
//   'rgb(0, 194, 224)',
//   'rgb(81, 232, 152)',
//   'rgb(196, 201, 204)'
// ]

export const chartColorPalette = ['#0abbb5', '#89a6ef', '#334b49', '#95b1ae', '#5173b7'];
export const chartColorPalettePositiveNegative = ['#0abbb5', '#ff6e6e'];
