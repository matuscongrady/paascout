/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable block-scoped-var */
import { useState, useEffect, MutableRefObject } from 'react';

export const copyToClipboard = (text: string) => {
  const textarea = document.createElement('textarea');
  textarea.textContent = text.trim();
  textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand('copy'); // Security exception may be thrown by some browsers.
  } catch (ex) {
    console.warn('Copy to clipboard failed.', ex);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
};

export const useDetectOutsideClick = (
  refs: MutableRefObject<any>[],
  initialState: boolean
): [boolean, (val: boolean) => any] => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if ((refs || []).every((ref) => ref.current !== null && !ref.current.contains(e.target))) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('mousedown', pageClickEvent);
    }
    return () => {
      window.removeEventListener('mousedown', pageClickEvent);
    };
  }, [isActive, refs]);

  return [isActive, setIsActive];
};

export const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

export const getRelativePositionBetweenNumbers = ({
  max,
  min,
  number
}: {
  min: number;
  max: number;
  number: number;
}) => {
  const diff = max - min;
  const onePercent = diff / 100;
  const percent = (number - min) / onePercent;
  return Math.round(percent);
};

export const getColorForPercentage = function (percent) {
  return `hsl(${percent},65%,52%)`;
};

export const formatCurrency = (num: number, currencyCode: string, minimumFractionDigits = 2) => {
  const formatter = new Intl.NumberFormat(navigator.language || navigator.languages[0], {
    currency: currencyCode,
    style: 'currency',
    minimumFractionDigits,
    maximumFractionDigits: 0,
    maximumSignificantDigits: 0
  });

  return formatter.format(num);
};
