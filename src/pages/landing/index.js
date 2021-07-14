import '../../App.css';
import React, { useState } from 'react';
import * as s from './styled';
import imgExemple from './logo512.png'

function App(props) {
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');

    function handleInscricao(){
        const dados = {
            "nome":"",
            "email":""
        };
        localStorage.setItem('dados',dados.nome(nome));
        localStorage.setItem('dados',dados.email(email));
    }

    return (
        <s.CssBody>
            <s.CssMainContent>
                <s.CssContainer>
                    <s.CssH1><s.CssStrong>Black</s.CssStrong> Friday</s.CssH1>
                    <s.CssP>Se ligas nas promoções que a Hiring Coders preparou pra você!</s.CssP>
                    <s.CssUl>
                        <s.CssLi><s.CssImg src={imgExemple}/></s.CssLi>
                        <s.CssLi><s.CssImg src={imgExemple}/></s.CssLi>
                        <s.CssLi><s.CssImg src={imgExemple}/></s.CssLi>
                    </s.CssUl>
                </s.CssContainer>
                <s.CssFormulario>
                    <s.CssH2>Não perca nenhuma promoção!</s.CssH2>
                    <s.CssForm>
                        <s.CssLabel className="name">Nome: </s.CssLabel>
                        <s.CssInput className="userName" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                        <s.CssP></s.CssP>
                        <s.CssLabel className="mail">E-mail: </s.CssLabel>
                        <s.CssInput className="userMail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <s.CssButton type="submit" onClick={handleInscricao}>Cadastrar</s.CssButton>
                    </s.CssForm>
                </s.CssFormulario>
            </s.CssMainContent>
        </s.CssBody>
    );
}

export default App;