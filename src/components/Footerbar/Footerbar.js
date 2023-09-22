import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import '../../style/Footerbar.scss'

export default function Footerbar(){
    return(
        <div className="footerbar">
            <FooterLeft></FooterLeft>
            <FooterRight></FooterRight>
        </div>
    );
}