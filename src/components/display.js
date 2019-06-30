import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="display">
            <label htmlFor="wins">
                Wins
            </label>
            <textarea
                id="wins"
            />

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