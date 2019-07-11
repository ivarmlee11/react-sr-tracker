import React from 'react';
import { db } from "./firebase";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 3px solid palevioletred;
`;

const StatDisplay = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    font-weight: bold;
    background-color: #FFFDD0;
    margin: 0 auto;
    padding: 0;
`;

const StatDisplayImg = styled.img`
    height: 150px;
`;

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wins: '0',
            losses: '0',
            draws: '0',
            sr: '0',
            statsChanging: true
        };

    }

    componentDidMount() {
        this.unsubscribe = db.collection('users').doc(this.props.name)
        .onSnapshot((doc) => {
            if(doc.data()) {
                let { wins, losses, draws, sr } = doc.data();
                this.setState({
                    wins,
                    losses,
                    draws,
                    sr,
                    statsChanging: true,
                }, () => {
                    setTimeout(() =>{
                        this.setState({
                            statsChanging: false
                        });
                    }, 1000)
                });
            }
        });
    }

    componentWillUnmount = () => {
        this.unsubscribe && this.unsubscribe();
    };

    render() {
        if (!this.state.statsChanging) {
            return (
                <Container>
                    <StatDisplay>
                        <div>
                            Wins: {this.state.wins}
                        </div>
                        <div>
                        Losses: {this.state.losses}
                        </div>
                        <div>
                            Draws: {this.state.draws}
                        </div>
                        <div>
                            SR: {this.state.sr}
                        </div>
                    </StatDisplay>
                </Container>
            );
        } else {
            return (
                <Container>
                    <StatDisplay>
                        <div>
                            <StatDisplayImg src="./img/spin.gif"/>
                        </div>
                    </StatDisplay>
                </Container>
            )
        }
    }
}

export default Display;