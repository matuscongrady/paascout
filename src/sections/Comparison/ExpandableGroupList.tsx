import { ExpandableItem } from '../../components/ExpandableItem';
import { onMaxW800 } from '../../styles/variables';
import { GroupTitle, Provider } from '../../components/Misc';
import { featureGroups, providers } from '../../ComparisonData';
import { FeatureDetail, FeatureTitle, PrettyCell } from './utils';
import { Fragment } from 'react';

export function ExpandableGroupList() {
  return (
    <div css={{ marginTop: '75px', padding: '0px 15px', display: 'none', [onMaxW800]: { display: 'block' } }}>
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
                </div>
              }
              expandedContent={
                <Fragment>
                  <FeatureDetail {...feature} />
                  <div css={{ marginTop: '15px' }}>
                    {Object.entries(providers).map(([providerName, { icon, link }]) => (
                      <div
                        css={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '100%',
                          paddingRight: '5px',
                          height: '40px'
                        }}
                      >
                        <Provider icon={icon} name={providerName} link={link} rootCss={{}} />
                        <p css={{ fontWeight: 'bold' }}>
                          <PrettyCell cell={feature.columns[providerName]} />
                        </p>
                      </div>
                    ))}
                  </div>
                </Fragment>
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
