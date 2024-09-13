import {
  featureGroups,
  infrastructureSizeDescriptions,
  pricingFeatures,
  providerPrices,
  providers
} from '../../ComparisonData';
import { CheckCell, CrossCell, GroupTitle, TentativeCell } from '../../components/Misc';
import InfoTooltip from '../../components/Tooltip';
import { Switch } from '../../components/Switch';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { sum } from 'lodash';
import { getColorForPercentage, getRelativePositionBetweenNumbers } from '../../utils/misc';
import { CgUnavailable } from 'react-icons/cg';
import { colors, onMaxW800 } from '../../styles/variables';
import { InfoModal } from '../../components/Modal';
import { BiDollar } from 'react-icons/bi';

export function PrettyCell({ cell }: { cell: ReactNode }) {
  if (cell === 'y') {
    return CheckCell;
  }
  if (cell === 'n') {
    return CrossCell;
  }
  if (cell === '~') {
    return TentativeCell;
  }
  if (cell === 'N/A') {
    return <CgUnavailable size={18} color={colors.fontColorPrimary} />;
  }
  return cell;
}

export function AdditionalInfo({ info }: { info: ReactNode }) {
  return (
    <div css={{ display: 'inline-block', paddingLeft: '5px' }}>
      <InfoTooltip
        rootCss={{
          [onMaxW800]: { display: 'none' }
        }}
        size={20}
        content={info}
      />
      <InfoModal
        rootCss={{
          display: 'none',
          [onMaxW800]: { display: 'inline-block' }
        }}
        size={20}
        content={info}
      />
    </div>
  );
}

export const getAllFeatureGroups = ({
  requiredFeatures,
  setRequiredFeatures
}: {
  requiredFeatures?: string[];
  setRequiredFeatures?: Dispatch<SetStateAction<string[]>>;
}) => {
  return [
    {
      title: <GroupTitle title="Price" icon={BiDollar} />,
      data: [
        ...pricingFeatureGroupData,
        ...getFeatureGroupData({
          features: pricingFeatures,
          requiredFeatures,
          setRequiredFeatures
        })
      ]
    },
    ...featureGroups.map((group) => ({
      title: <GroupTitle {...group} />,
      data: getFeatureGroupData({
        features: group.features,
        requiredFeatures,
        setRequiredFeatures
      })
    }))
  ];
};

export function FeatureDetail({
  whenDoINeedThis,
  explanation
}: {
  whenDoINeedThis?: ComparedFeature['whenDoINeedThis'];
  explanation: ComparedFeature['explanation'];
}) {
  return (
    <Fragment>
      <h4>What is this?</h4>
      {typeof explanation === 'string' ? <p>{explanation}</p> : explanation}
      {whenDoINeedThis && (
        <Fragment>
          <h4>When do I need this?</h4>
          <ul>
            {whenDoINeedThis.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
}

export function FeatureTitle({
  explanation,
  name,
  whenDoINeedThis,
  hideInfoTooltip
}: { hideInfoTooltip?: boolean } & ComparedFeature) {
  return (
    <span
      css={{
        display: 'inline-block',
        '*': {
          verticalAlign: 'middle'
        }
      }}
    >
      <span>{name}</span>
      {!hideInfoTooltip && (
        <InfoTooltip
          rootCss={{
            paddingLeft: '5px',
            [onMaxW800]: { display: 'none' }
          }}
          size={20}
          content={<FeatureDetail explanation={explanation} whenDoINeedThis={whenDoINeedThis} />}
        />
      )}
    </span>
  );
}

export const getFeatureGroupData = ({
  features,
  requiredFeatures = [],
  setRequiredFeatures
}: {
  features: ComparedFeature[];
  requiredFeatures?: string[];
  setRequiredFeatures?: Dispatch<SetStateAction<string[]>>;
}) => {
  return features.map((feature) => {
    const sortedColumns = [];
    Object.keys(providers).forEach((provider, idx) => {
      sortedColumns[idx] = <PrettyCell cell={feature.columns[provider]} />;
    });

    return {
      title: (
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '5px',
            [onMaxW800]: {
              lineHeight: 1.5,
              display: 'block'
            }
          }}
        >
          <FeatureTitle {...feature} />
          {!feature.disableFiltering && (
            <div css={{ [onMaxW800]: { display: 'none' } }}>
              <Switch
                label="Required"
                isChecked={requiredFeatures.includes(feature.name)}
                setIsChecked={(checked) =>
                  checked
                    ? setRequiredFeatures?.([...requiredFeatures, feature.name])
                    : setRequiredFeatures?.(requiredFeatures.filter((f) => f !== feature.name))
                }
              />
            </div>
          )}
        </div>
      ),
      detail: <FeatureDetail explanation={feature.explanation} whenDoINeedThis={feature.whenDoINeedThis} />,
      columns: sortedColumns
    };
  });
};

const sizes: ComparableInfrastructureSize[] = ['Small', 'Medium', 'Large'];
export const pricingFeatureGroupData = sizes.map((size) => {
  const sortedColumns = [];
  let min = Infinity;
  let max = 0;
  Object.keys(providers).forEach((provider: ComparableProvider) => {
    const { items } = providerPrices[size][provider];
    if (items) {
      const total = sum(Object.values(items).map((i) => i.cost));
      if (total < min) {
        min = total;
      }
      if (total > max) {
        max = total;
      }
    }
  });
  Object.keys(providers).forEach((provider: ComparableProvider, idx) => {
    const { items } = providerPrices[size][provider];
    if (items === null) {
      sortedColumns[idx] = (
        <div css={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
          <CgUnavailable size={18} color={colors.fontColorPrimary} />
          <AdditionalInfo info="Provider does not support the compared infrastructure." />
        </div>
      );
      return;
    }
    const total = sum(Object.values(items).map((i) => i.cost));
    const color = getColorForPercentage(100 - getRelativePositionBetweenNumbers({ min, max, number: total }));
    sortedColumns[idx] = (
      <div css={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
        <p css={{ color, fontWeight: 'bold' }}>${Math.round(total)}</p>
        <AdditionalInfo
          info={
            <div>
              <h4>Price breakdown</h4>
              <ul>
                {Object.entries(items).map(([itemName, { description, cost }]) => {
                  return (
                    <li key={itemName}>
                      <p>
                        <b>{itemName}</b> (${Math.round(cost)})
                      </p>
                      <p>{description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          }
        />
      </div>
    );
  });
  return {
    title: (
      <div
        css={{
          display: 'inline-block',
          '*': {
            verticalAlign: 'middle'
          }
        }}
      >
        <span>{size} infrastructure</span>
        <AdditionalInfo
          info={
            <div>
              <p>Combined prices for the following infrastructure:</p>
              {infrastructureSizeDescriptions[size]}
              <p>
                If the provider doesn't support the exact infrastructure size, the price is compared at least roughly.
              </p>
              <p>The price also includes per-seat price when applicable, with estimated number of seats.</p>
            </div>
          }
        />
      </div>
    ),
    columns: sortedColumns
  };
});
