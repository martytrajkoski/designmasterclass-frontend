import NaviLeft from './NaviLeft';
import NaviRight from './NaviRight';
import NaviLogo from './NaviLogo';

import '../../style/Navibar.scss';

export default function Navibar() {
    return (
        <div className='naviBar'>
            <NaviLeft></NaviLeft>
            <NaviLogo></NaviLogo>
            <NaviRight></NaviRight>
        </div>
    );
  }