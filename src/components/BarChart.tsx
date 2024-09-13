import { box, colors, typographyCss } from '../styles/variables';
import { chartColorPalette, LoadableApexChart } from './LoadableApexChart';

export function BarChart({
  xAxis,
  yAxis,
  series,
  stacked,
  height,
  direction,
  title,
  colorPalette,
  dataLabelsEnabled
}: {
  xAxis?: ApexXAxis;
  yAxis?: ApexYAxis;
  series: ApexAxisChartSeries;
  stacked?: boolean;
  height?: Css['height'];
  direction: 'horizontal' | 'vertical';
  title?: ReactNode;
  colorPalette?: string[];
  dataLabelsEnabled?: boolean;
}) {
  return (
    <div css={{ margin: '35px 0px' }}>
      {title && <h3 css={{ textAlign: 'center', fontSize: '1.1rem !important', margin: '0px !important' }}>{title}</h3>}
      <LoadableApexChart
        css={{
          height: '100% !important',
          width: 'calc(100% - 0px) !important',
          '.chart-tooltip': {
            ...box,
            background: 'rgb(45,45,45) !important',
            border: `${box.border} !important`,
            fontWeight: 'normal'
          },
          '*': {
            color: `${colors.fontColorPrimary} !important`,
            stroke: 'transparent',
            // tspan: { fill: colors.fontColorPrimary },
            text: { fill: colors.fontColorPrimary, fontFamily: `${typographyCss.fontFamily} !important` },
            span: { fontSize: '14px !important' },
            fontSize: '14px',
            fontFamily: `${typographyCss.fontFamily} !important`,
            fontWeight: 'normal'
          }
        }}
        type="bar"
        height={height || ('100%' as any)}
        options={{
          chart: {
            type: 'bar',
            stacked: stacked || false,
            toolbar: {
              show: false
            },
            animations: { enabled: false }
          },
          plotOptions: {
            bar: {
              horizontal: direction === 'horizontal',
              dataLabels: {
                total: {
                  enabled: dataLabelsEnabled,
                  offsetX: direction === 'horizontal' ? 7 : 0,
                  style: {
                    color: colors.fontColorPrimary
                  }
                }
              }
            }
          },
          xaxis: xAxis,
          yaxis: yAxis,
          tooltip: {
            cssClass: 'chart-tooltip',
            x: {
              show: false
            }
          },
          colors: colorPalette || chartColorPalette
        }}
        series={series}
      />
    </div>
  );
}
