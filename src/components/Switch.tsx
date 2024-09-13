import ReactSwitch from 'react-switch';
import { colors } from '../styles/variables';

export function Switch({
  setIsChecked,
  isChecked,
  label
}: {
  setIsChecked: AnyFunction;
  isChecked: boolean;
  label: string;
}) {
  return (
    <div css={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      <ReactSwitch
        height={22}
        width={44}
        offHandleColor={colors.fontColorPrimary}
        onColor="#57b09e"
        onChange={setIsChecked}
        checked={isChecked}
      />
      <p css={{}}>{label}</p>
    </div>
  );
}
