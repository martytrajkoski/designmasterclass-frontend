import '../../style/Navibar.scss';

export default function NaviLogo() {
        return (
            <div className='Navilogo'>
                <a href='/home'><img src={require("../../media/Navbar/designmasterclasss.png")} style={{width: '200px'}}/></a>
            </div>
        );
    };