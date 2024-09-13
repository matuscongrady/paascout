import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import QuestionMark from '../../icons/question-mark.svg';
import { useState } from 'react';
import { box, colors } from '../styles/variables';
import { BiX } from 'react-icons/bi';

export function InfoModal({ size, content, rootCss }: { size: number; content: ReactNode; rootCss?: Css }) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <span css={rootCss}>
      <span
        role="button"
        tabIndex={0}
        onClick={onOpenModal}
        css={{ cursor: 'pointer', height: size || 20, width: size || 20 }}
      >
        <img css={{}} width={size || 20} height={size || 20} src={QuestionMark} alt="more info" />
      </span>
      <Modal
        closeOnEsc
        blockScroll
        closeIcon={<BiX size={30} color={colors.fontColorPrimary} />}
        styles={{ modal: { ...box, boxShadow: 'none' } as any }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div css={{ '*': { lineHeight: 1.75 }, padding: '5px 15px' }}>{content}</div>
      </Modal>
    </span>
  );
}
