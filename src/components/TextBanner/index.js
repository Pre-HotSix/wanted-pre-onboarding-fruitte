import PropTypes from 'prop-types';
import * as S from './style';

TextBanner.propTypes = {
  img: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  content3: PropTypes.string,
};

export default function TextBanner({ img, content1, content2, content3 }) {
  return (
    <S.Container>
      <img src={img} alt="" />
      <span>{content1}</span>
      <span>{content2}</span>
      <span>{content3}</span>
    </S.Container>
  );
}
