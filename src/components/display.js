import React from 'react';
import { db } from "./firebase";

class Display extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { 
            wins: '0',
            losses: '0',
            draws: '0',
            sr: '0',
            uid: '',
        };

    }

    componentDidMount() {
        db.collection("users").doc("users")
        .onSnapshot(function(doc) {
            var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
            console.log(source, " data: ", doc.data());
        });
    
    }

    render() {
        return (
            <div className="display">
                uid {this.state.uid} uid {this.props.uid}
                {/* <label htmlFor="wins">
                    Wins
                </label>
                <div
                    id="wins"
                >
                    {
                        this.state.wins
                    }
                </div>

                <label htmlFor="losses">
                    Losses
                </label>
                <div
                    id="losses"
                >
                    {
                        this.state.losses
                    }
                </div>

                <label htmlFor="draws">
                    Draws
                </label>
                <div
                    id="draws"
                >
                    {
                        this.state.draws
                    }
                </div>

                <label htmlFor="sr">
                    SR
                </label>
                <div
                    id="sr"
                >
                    {
                        this.state.sr
                    }
                </div> */}
            </div>
        );
    }
}

export default Display;