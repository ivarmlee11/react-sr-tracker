import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            wins: '0',
            losses: '0',
            draws: '0',
            sr: '0000'
        };

    }

    componentDidMount() {
    }
    
    componentWillUnmount() {
    }

    render() {
        return (
            <div className="display">
                <label htmlFor="losses">
                    Losses
                </label>
                <textarea
                    id="losses"
                />

                <label htmlFor="draws">
                    Draws
                </label>
                <textarea
                    id="draws"
                />

                <label htmlFor="sr">
                    SR
                </label>
                <textarea
                    id="sr"
                />
            </div>
        );
    }
}

export default Display;