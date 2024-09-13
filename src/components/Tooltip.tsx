import Tippy, { TippyProps } from '@tippyjs/react';
import { box, typographyCss } from '../styles/variables';
import QuestionMark from '../../icons/question-mark.svg';

function InfoTooltip({
  placement,
  size,
  content,
  tooltipWidth,
  rootCss
}: {
  size?: number;
  placement?: TippyProps['placement'];
  content: ReactNode;
  tooltipWidth?: Css['width'];
  rootCss?: Css;
}) {
  return (
    <span css={rootCss}>
      <Tippy
        placement={placement || 'auto'}
        // interactive
        animation={false}
        delay={0}
        zIndex={5}
        content={
          <div
            css={{
              ...box,
              ...typographyCss,
              ...(tooltipWidth && { width: tooltipWidth }),
              background: 'rgb(20,26,26) !important',
              padding: '15px 30px 10px 30px',
              textAlign: 'left',
              lineHeight: 1.5,
              p: { marginBottom: '5px', textAlign: 'left' }
            }}
          >
            {content}
          </div>
        }
      >
        <img
          css={{
            height: size || 20,
            width: size || 20
          }}
          src={QuestionMark}
          alt="question-mark"
        />
      </Tippy>
    </span>
  );
}

export default InfoTooltip;
