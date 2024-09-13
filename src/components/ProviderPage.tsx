import { Helmet } from 'react-helmet';
import { featureGroups, providerPrices, providers } from '../ComparisonData';
import MainLayout from '../layout';
import { FeatureDetail, FeatureTitle, PrettyCell } from '../sections/Comparison/utils';
import { GroupTitle } from './Misc';
import config from '../../SITE_CONFIG';
import { ExpandableItem } from './ExpandableItem';
import { chartColorPalette, LoadableApexChart } from './LoadableApexChart';
import { round } from 'lodash';
import { box, colors, typographyCss } from '../styles/variables';
import { Fragment } from 'react';

const getAllPriceItems = ({ provider }: { provider: ComparableProvider }) => {
  return Array.from(
    new Set([
      ...Object.keys(providerPrices.Small[provider].items),
      ...Object.keys(providerPrices.Medium[provider].items),
      ...Object.keys(providerPrices.Large[provider].items)
    ])
  );
};

const getComparisonData = ({ provider }: { provider: ComparableProvider }) => {
  return getAllPriceItems({ provider }).map((priceItem) => ({
    name: priceItem,
    data: [
      providerPrices.Small[provider].items[priceItem]?.cost || 0,
      providerPrices.Medium[provider].items[priceItem]?.cost || 0,
      providerPrices.Large[provider].items[priceItem]?.cost || 0
    ]
  }));
};

export function ProviderPage({ provider, hidePricing }: { provider: ComparableProvider; hidePricing?: boolean }) {
  return (
    <MainLayout>
      <Helmet title={`${config.siteTitle} | ${provider}`} />
      <div css={{ maxWidth: '840px', margin: '80px auto 0px auto', padding: '0px 10px' }}>
        <h2 css={{ display: 'flex', marginTop: '100px', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
          <img width={28} height={28} src={providers[provider].icon} alt={`${provider} icon`} />
          <span>{provider}</span>
        </h2>
        {!hidePricing && (
          <Fragment>
            <h2 css={{ textAlign: 'center', margin: '80px 0px 10px 0px' }}>Pricing</h2>
            <p css={{ textAlign: 'center' }}>How much do different infrastructure sizes cost?</p>
            <LoadableApexChart
              css={{
                marginBottom: '80px',
                '.chart-tooltip': {
                  ...box,
                  background: 'rgb(45,45,45) !important',
                  border: `${box.border} !important`
                },
                '*': {
                  color: `${colors.fontColorPrimary} !important`,
                  stroke: 'transparent',
                  tspan: { fill: colors.fontColorPrimary },
                  span: { fontSize: '14px !important' },
                  fontSize: '14px',
                  fontFamily: typographyCss.fontFamily
                }
              }}
              options={{
                chart: {
                  type: 'bar',
                  stacked: true,
                  toolbar: {
                    show: false
                  }
                },
                plotOptions: {
                  bar: {
                    horizontal: true,
                    dataLabels: {
                      total: {
                        enabled: true,
                        offsetX: 7,
                        formatter(value) {
                          return `$${round(Number(value), 0)}`;
                        },
                        style: {
                          color: colors.fontColorPrimary
                          // fontSize: '13px',
                          // fontWeight: 900
                        }
                      }
                    }
                  }
                },
                xaxis: {
                  categories: ['Small', 'Mid', 'Large'],
                  labels: {
                    formatter(value) {
                      return `$${value}`;
                    }
                  }
                },
                tooltip: {
                  cssClass: 'chart-tooltip',
                  x: {
                    show: false
                  }
                },
                colors: chartColorPalette
              }}
              series={getComparisonData({ provider })}
              type="bar"
              height="250px"
            />
          </Fragment>
        )}
        <h2 css={{ textAlign: 'center', margin: '80px 0px 10px 0px' }}>Features</h2>
        {featureGroups.map((group) => (
          <div key={group.title}>
            <GroupTitle {...group} />
            {group.features.map((feature) => (
              <ExpandableItem
                key={feature.name}
                title={
                  <div
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      paddingRight: '25px'
                    }}
                  >
                    <FeatureTitle hideInfoTooltip {...feature} />
                    <PrettyCell cell={feature.columns[provider]} />
                  </div>
                }
                expandedContent={<FeatureDetail {...(feature as any)} />}
              />
            ))}
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
