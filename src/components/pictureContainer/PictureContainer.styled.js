import { styled } from 'styled-components';
import variables from 'settings/variables';
import pawprintMobile1 from '../../images/pawprint/pawprint-mobile-1.png';
import pawprintTablet1 from '../../images/pawprint/pawprint-tablet-1.png';
import pawprintDesktop1 from '../../images/pawprint/pawprint-desktop-1.png';
import pawprintMobile2 from '../../images/pawprint/pawprint-mobile-2.png';
import pawprintTablet2 from '../../images/pawprint/pawprint-tablet-2.png';
import pawprintDesktop2 from '../../images/pawprint/pawprint-desktop-2.png';
import pawprintMobile3 from '../../images/pawprint/pawprint-mobile-3.png';
import pawprintTablet3 from '../../images/pawprint/pawprint-tablet-3.png';
import pawprintDesktop3 from '../../images/pawprint/pawprint-desktop-3.png';
import pawprintMobile4 from '../../images/pawprint/pawprint-mobile-4.png';
import pawprintTablet4 from '../../images/pawprint/pawprint-tablet-4.png';
import pawprintDesktop4 from '../../images/pawprint/pawprint-desktop-4.png';
import pawprintMobile5 from '../../images/pawprint/pawprint-mobile-5.png';
import pawprintTablet5 from '../../images/pawprint/pawprint-tablet-5.png';
import pawprintDesktop5 from '../../images/pawprint/pawprint-desktop-5.png';
import pawprintMobile6 from '../../images/pawprint/pawprint-mobile-6.png';
import pawprintTablet6 from '../../images/pawprint/pawprint-tablet-6.png';
import pawprintDesktop6 from '../../images/pawprint/pawprint-desktop-6.png';
import pawprintMobile7 from '../../images/pawprint/pawprint-mobile-7.png';
import pawprintTablet7 from '../../images/pawprint/pawprint-tablet-7.png';
import pawprintDesktop7 from '../../images/pawprint/pawprint-desktop-7.png';
import pawprintMobile8 from '../../images/pawprint/pawprint-mobile-8.png';
import pawprintTablet8 from '../../images/pawprint/pawprint-tablet-8.png';

const RelativeContainer = styled.div`
  position: relative;
  /* margin: 0 auto; */
  /* max-width: 320px; */
  /* height: 601px; */

  ${variables.breakPoints.tablet} {
    /* max-width: 768px; */
    /* height: 1193px; */
  }
  ${variables.breakPoints.desktop} {
    /* max-width: 1280px; */
    /* height: 770px; */
  }
`;

const PawContainer = styled.div`
  padding: 20px 20px 0px;
  max-width: 320px;
  margin: 0 auto;
  background-image: url(${pawprintMobile1}), url(${pawprintMobile2}),
    url(${pawprintMobile3}), url(${pawprintMobile4}), url(${pawprintMobile5}),
    url(${pawprintMobile6}), url(${pawprintMobile7}), url(${pawprintMobile8});
  background-size: 79px, 79px, 79px, 29px, 29px, 28px, 28px, 28px, cover;
  background-repeat: no-repeat;
  background-position: top 338px left 98px, top 519px left 289px,
    top 314px left 326px, top 89px left 332px, top 143px left 12px,
    top 378px left 12px, top 208px left 213px, top 508px left 60px, center;

  ${variables.breakPoints.tablet} {
    padding: 24px 32px 0px;
    max-width: 768px;
    background-image: url(${pawprintTablet1}), url(${pawprintTablet2}),
      url(${pawprintTablet3}), url(${pawprintTablet4}), url(${pawprintTablet5}),
      url(${pawprintTablet6}), url(${pawprintTablet7}), url(${pawprintTablet8});
    background-size: 157px, 157px, 157px, 58px, 58px, 56px, 56px, 56px, cover;
    background-repeat: no-repeat;
    background-position: top 671px left 235px, top 1032px left 613px,
      top 624px left 688px, top 178px left 699px, top 285px left 64px,
      top 750px left 64px, top 413px left 464px, top 1009px left 160px, left;
  }
  ${variables.breakPoints.desktop} {
    padding: 20px 16px 0px;
    max-width: 1280px;
    background-image: url(${pawprintDesktop1}), url(${pawprintDesktop2}),
      url(${pawprintDesktop3}), url(${pawprintDesktop4}),
      url(${pawprintDesktop5}), url(${pawprintDesktop6}),
      url(${pawprintDesktop7});
    background-position: top 671px left 235px, top 515px left 1268px,
      top 114px left 1213px, top 178px left 699px, top 285px left 64px,
      top 750px left 64px, top 413px left 464px, center;
  }
`;

const PictureContainer = {
  RelativeContainer,
  PawContainer,
};

export default PictureContainer;
