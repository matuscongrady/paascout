import { providers } from '../../ComparisonData';
import { Provider } from '../../components/Misc';
import { Table } from '../../components/Table';
import { onMaxW800 } from '../../styles/variables';
import { FeatureGroup } from './Comparison';

const leadingCellWidth = 350;

export function ComparisonTable({
  hiddenProviders,
  featureGroups
}: {
  hiddenProviders: string[];
  featureGroups: FeatureGroup[];
}) {
  const decreasedOpacityColumns = hiddenProviders.map((provider) =>
    Object.keys(providers).findIndex((p) => {
      return p === provider;
    })
  );
  return (
    <Table
      rootCss={{ [onMaxW800]: { display: 'none' }, '*': { lineHeight: 1 } }}
      columnHeaders={Object.entries(providers).map(([name, { icon, link }]) => (
        <Provider icon={icon} name={name} link={link} showLink rootCss={{ justifyContent: 'center' }} />
      ))}
      decreasedOpacityColumns={decreasedOpacityColumns}
      leadingCellWidth={leadingCellWidth}
      leadingCellWidthMaxW800="200px"
      cellWidth={`max(95px, calc((100vw - ${leadingCellWidth + 100}px) / ${Object.keys(providers).length}))`}
      stickyHeader
      rowGroups={featureGroups}
    />
  );
}
