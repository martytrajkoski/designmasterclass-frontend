import { Button } from "react-bootstrap";

export default function QuizCard(){
    return(
            <div className="quizCard">
                <div className="thumbnail">
                    <img src={require('../../media/courses/free-learn-adobe-photoshop-cc-full-course-in-hindi-language-50-classes.jpg')} alt="slika" />
                </div>
                <div className="courseDescription">
                    <span style={{float:'right', marginRight:'1%', fontFamily:'inherit'}}>4h 17m</span>
                    <br/>
                    <p style={{width:'100%', fontWeight:'bold'}}>Digitize your art to sell online: Prep your painting for print-on-demand</p>
                </div>
                <div className="cardButtons" style={{ display: 'flex' }}>
                    <div style={{ width: '70%'}}>
                        <span>Cat Coquillette</span>
                    </div>
                    <div style={{ width: '30%'}}>
                        <Button>Watch</Button>
                        <img src={require('../../media/Icons/notSaved.png')}/>
                    </div>
                </div>
            </div>
    );
}