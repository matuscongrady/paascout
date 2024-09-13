/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react';

export const onMaxW330 = '@media (max-width: 330px)';
export const onMaxW360 = '@media (max-width: 360px)';
export const onMaxW400 = '@media (max-width: 400px)';
export const onMaxW440 = '@media (max-width: 440px)';
export const onMaxW500 = '@media (max-width: 500px)';
export const onMaxW530 = '@media (max-width: 530px)';
export const onMaxW570 = '@media (max-width: 570px)';
export const onMaxW650 = '@media (max-width: 650px)';
export const onMaxW600 = '@media (max-width: 600px)';
export const onMaxW750 = '@media (max-width: 750px)';
export const onMaxW800 = '@media (max-width: 800px)';
export const onMaxW870 = '@media (max-width: 870px)';
export const onMaxW910 = '@media (max-width: 910px)';
export const onMaxW960 = '@media (max-width: 960px)';
export const onMaxW610 = '@media (max-width: 610px)';
export const onMaxW950 = '@media (max-width: 950px)';
export const onMaxW1100 = '@media (max-width: 1100px)';
export const onMaxW1000 = '@media (max-width: 1000px)';
export const onMaxW1050 = '@media (max-width: 1050px)';
export const onMaxW1200 = '@media (max-width: 1200px)';
export const onMaxW1250 = '@media (max-width: 1250px)';
export const onMaxW1280 = '@media (max-width: 1280px)';
export const onMaxW1300 = '@media (max-width: 1300px)';
export const onMaxW1330 = '@media (max-width: 1330px)';
export const onMaxW1400 = '@media (max-width: 1400px)';
export const onMaxW1500 = '@media (max-width: 1500px)';
export const onMaxW1600 = '@media (max-width: 1600px)';

export const mainBackground = 'rgb(23,29,29)';
export const elementBackground = 'rgb(23,29,29)';

export const colors = {
  primary: 'rgb(17 105 105)',
  secondary: '#57b09e',
  borderColor: 'rgb(40, 44, 44)',
  primaryButtonBorder: '#40958e',
  backgroundColor: mainBackground,
  darkerBackground: 'rgb(22,27,27)',
  elementBackground,
  fontColorPrimary: '#ebebeb',
  fontColorGray: '#b8b8b8',
  scrollbarColor: '#131313'
} as const;

export const typographyCss: Css = {
  margin: '0px',
  fontSize: '0.875rem',
  lineHeight: 1.75,
  color: colors.fontColorPrimary
};

export const border = `1px solid ${colors.borderColor}`;

export const boxShadowLight = '3px 3px 5px rgb(26,26,26,1), -3px -3px 11px rgb(30,30,30)';
export const boxShadow = '4px 4px 7px rgb(22,26,26), -4px -4px 11px rgb(28,28,28)';
export const boxShadowDark = '3px 3px 5px rgb(20,20,20,1), -3px -3px 11px rgb(22,26,26)';

export const box: Css = {
  border,
  boxShadow: boxShadowDark,
  borderRadius: '6px',
  background: colors.elementBackground
};

export const clickableBox: Css = {
  ...box,
  cursor: 'pointer'
};

const growDownKeyframes = keyframes`
  0% {
      transform: scaleY(0)
  }
  25% {
    transform: scaleY(0.75)
  }
  100% {
      transform: scaleY(1)
  }
}`;

export const growDownAnimation: Css = {
  animation: `${growDownKeyframes} 150ms ease-out`
};

export const minScreenWidth = '330px';
export const maxScreenWidth = '1600px';
export const middleScreenWidth = '1000px';

export const prettyScrollBar: Css = {
  '&::-webkit-scrollbar-track': {
    height: '8px',
    width: '8px',
    // WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'transparent'
  },
  '&::-webkit-scrollbar': {
    height: '8px',
    width: '8px',
    backgroundColor: 'transparent'
  },
  '&::-webkit-scrollbar-thumb': {
    height: '8px',
    width: '8px',
    // WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    backgroundColor: colors.fontColorPrimary,
    borderRadius: '6px',
    border: '1px solid #1d1d1d'
  },
  scrollbarColor: `${colors.fontColorPrimary} ${colors.backgroundColor}`,
  scrollbarWidth: 'thin'
};

export const fontFamilyMonospace = 'Menlo, Monaco, Consolas, "Courier New", monospace';
