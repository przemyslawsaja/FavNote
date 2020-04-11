import React from 'react';
import DetailsTemplate from "../templates/DetailsTemplate";
import { routes } from "../routes";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";

class DetailsPage extends React.Component {
    state = {
        pageType: 'notes'
    };

    componentDidMount() {
        switch (this.props.match.path) {
            case routes.twitter:
                this.setState({ pageType: 'twitters'});
                break;
            case routes.notes:
                this.setState({ pageType: 'notes'});
                break;
            case routes.article:
                this.setState({ pageType: 'articles'});
                break;
        }
    }

    render() {

        return(
            <DetailsTemplate pageType={this.state.pageType}>
                <Paragraph>
                    Nowe ograniczenia:- matury i egzamin kończący podstawówkę przełożone na czerwiec
                    - szkoły zamknięte do niedzieli 26 kwietnia
                    - zasłanianie ust i nosa obowiązkowe od 16 kwietniaOgraniczenia nadal obowiązujące:• ograniczenia w przemieszczaniu się;
                    • zakaz wychodzenia na ulicę nieletnich bez opieki dorosłego;
                    • ograniczenia w wydarzeniach o charakterze religijnych – w kościołach może przebywać maksymalnie 5 osób. Zasada obowiązuje również w święta Wielkiej Nocy!
                    • ograniczenia w funkcjonowaniu galerii handlowych i wielkopowierzchniowych sklepów budowlanych;
                    • zasady w poruszaniu się przy pomocy komunikacji publicznej i samochodami większymi niż 9-osobowe;
                    • zawieszenie działalności zakładów fryzjerskich, kosmetycznych, tatuażu itd.;
                    • zakaz korzystania z parków, lasów, plaż, bulwarów, promenad i rowerów miejskich;
                    • zamknięcie restauracji;
                    • ograniczenia dotyczące liczby osób w sklepach, na targach i na poczcie;
                    • ograniczenia w działalności instytucji kultury (w kinach, teatrach itp.).
                    • zamknięcie szkół, uczelni, przedszkoli i żłobków;
                    • zamknięcie pasażerskiego ruchu lotniczego;
                    • zamknięcie międzynarodowego ruchu kolejowego.
                </Paragraph>
            </DetailsTemplate>
        )
    }
}

export default DetailsPage;