import React from 'react';
import { db } from "./firebase";
import styled from 'styled-components';

const StatDisplay = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color: #FFFDD0;
    margin: 0;
    padding: 0;
`;

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wins: '0',
            losses: '0',
            draws: '0',
            sr: '0'
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
                    sr
                });
            }
        });
    }

    componentWillUnmount = () => {
        this.unsubscribe && this.unsubscribe();
    };

    render() {
        return (
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
        );
    }
}

export default Display;