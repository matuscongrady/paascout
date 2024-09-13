import { featureGroups, pricingFeatures } from '../../ComparisonData';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { getAllFeatureGroups } from './utils';
import { ExpandableGroupList } from './ExpandableGroupList';
import { ComparisonTable } from './ComparisonTable';

export type FeatureGroup = {
  title: ReactNode;
  data: {
    title: ReactNode;
    detail?: ReactNode;
    columns: any[];
  }[];
};

export function Comparison() {
  const [requiredFeatures, setRequiredFeatures] = useState<string[]>([]);
  const [hiddenProviders, setHiddenProviders] = useState<string[]>([]);

  useEffect(() => {
    const nonAdheringProviders = new Set<ComparableProvider>();
    const allFeatures = featureGroups
      .map((group) => group.features)
      .concat(pricingFeatures)
      .flat();
    allFeatures
      .filter((feature) => requiredFeatures.includes(feature.name))
      .forEach((feature) =>
        Object.entries(feature.columns).forEach(([name, value]) => {
          if (value !== 'y' && value !== '~') {
            nonAdheringProviders.add(name as ComparableProvider);
          }
        })
      );
    setHiddenProviders(Array.from(nonAdheringProviders));
  }, [requiredFeatures]);

  const groups: FeatureGroup[] = useMemo(
    () => getAllFeatureGroups({ requiredFeatures, setRequiredFeatures }),
    [requiredFeatures]
  );

  return (
    <Fragment>
      <ComparisonTable hiddenProviders={hiddenProviders} featureGroups={groups} />
      <ExpandableGroupList />
    </Fragment>
  );
}
