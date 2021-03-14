import React from 'react';
import { Container } from 'react-bootstrap';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">

            <Container >

                <div className="animate__animated animate__slideInLeft">
                    <h1>Cifoza</h1>
                    <p>Cifoza reprezinta o curbare antero-posterioara a coloanei vertebrale toracale, conform site-ului medical sfatulmedicului.ro. Specialistii afirma ca
                    prezenta unui anumit grad de cifoza este absolut normala insa aceasta nu presupune o curbare foarte mare, cu mai mult de 50 de grade.
                    Popular, aceasta deformare a coloanei vertebrale poarta numele si de cocoasa.</p>
                    <br /><br />
                </div>
                
                <div className="animate__animated animate__slideInRight">
                    <h1>CAUZE</h1>
                    <p>Cifoza apare ca urmare a prezentei unor probleme de dezvoltare,a unei boli degenerative, asa cum este, de exemplu artrita coloanei vertebrale, in
                    urma aparitiei unei osteoporoze cu fractura de compresie a vertebrelor sau in urma unui traumatism al coloanei vertebrale.Cifoza poate sa apara la
                    orice varsta si cu cat gradul ei este mai accentuat cu atat problemele medicale aparute pot fi mai grave.In aceste cazuri cifoza poate afecta organe
                    interne, ca de exemplu plamanii, nervii si alte organe sau tesuturi.Aceasta afectare poate genera in timp aparitia durerii si a altor probleme medicale.</p>
                    <br /><br />
                </div>

                <div className="animate__animated animate__slideInLeft">
                    <h1>SIMPTOME</h1>
                    <p>Printre simptomele cifozei se numara prezenta durerilor usoare de spate, rigiditatea coloanei vertebrale sau o sensibilitate crescuta a ei, o postura
                    aplecata inainte, prezenta cocoasei sau oboseala.
                    La copii aparitia cifozei este destul de neplacuta. Aparitia acestui tip de deformare a coloanei este legata mai mult de perioada adolescentei si ea este
                    mai des intalnita la fete.Pozitia defectuoasa in care adolescenta sta zilnic poate duce in timp la intinderea ligemantelor si la o dezvoltare anormala a
                    vertebrelor. Cifoza posturala este deseori insotita de o curbare exagerata in sens invers care poarta numele de hiperlordoza.</p>
                </div>  

            </Container>
            
        </div>
    );
}

export default Home;
