import { ArrowLeft } from 'react-feather';

import {
  BackLinkButton,
  BackLinkText
} from './styles';

/**
 * @param {import('react-router-dom').LinkProps} props
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export function BackLink(props) {
  return (
    <BackLinkButton {...props}>
      <ArrowLeft size={32} />

      <BackLinkText>
        Voltar
      </BackLinkText>
    </BackLinkButton>
  );
}