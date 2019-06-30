import React from 'react';
import Remarkable from 'remarkable';

class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleWinChange = this.handleWinChange.bind(this);
        this.handleLossChange = this.handleLossChange.bind(this);
        this.handleSrChange = this.handleSrChange.bind(this);
        this.handleDrawChange = this.handleDrawChange.bind(this);
        this.state = { 
            wins: '0',
            losses: '0',
            draws: '0',
            sr: '0000'
        };
    }

    handleWinChange(e) {
        this.setState({ wins: e.target.value });
    }

    handleLossChange(e) {
        this.setState({ losses: e.target.value });
    }

    handleSrChange(e) {
        this.setState({ sr: e.target.value });
    }

    handleDrawChange(e) {
        this.setState({ draws: e.target.value });
    }

    getRawMarkupWins() {
        const md = new Remarkable();
        return { __html: md.render(this.state.wins) };
    }

    getRawMarkupLosses() {
        const md = new Remarkable();
        return { __html: md.render(this.state.losses) };
    }

    getRawMarkupSr() {
        const md = new Remarkable();
        return { __html: md.render(this.state.sr) };
    }

    getRawMarkupDraws() {
        const md = new Remarkable();
        return { __html: md.render(this.state.draws) };
    }

    render() {
        return (
        <div className="tracker">
            <label htmlFor="wins">
                Wins
            </label>
            <textarea
                id="wins"
                onChange={this.handleWinChange}
                defaultValue={this.state.wins}
            />
            <div
                className=""
                dangerouslySetInnerHTML={this.getRawMarkupWins()}
            />

            <label htmlFor="losses">
                Losses
            </label>
            <textarea
                id="losses"
                onChange={this.handleLossChange}
                defaultValue={this.state.losses}
            />
            <div
                className=""
                dangerouslySetInnerHTML={this.getRawMarkupLosses()}
            />

            <label htmlFor="draws">
                Draws
            </label>
            <textarea
                id="draws"
                onChange={this.handleDrawChange}
                defaultValue={this.state.draws}
            />
            <div
                className=""
                dangerouslySetInnerHTML={this.getRawMarkupDraws()}
            />

            <label htmlFor="sr">
                SR
            </label>
            <textarea
                id="sr"
                onChange={this.handleSrChange}
                defaultValue={this.state.sr}
            />
            <div
                className=""
                dangerouslySetInnerHTML={this.getRawMarkupSr()}
            />
        </div>
        );
    }
}

export default Tracker;