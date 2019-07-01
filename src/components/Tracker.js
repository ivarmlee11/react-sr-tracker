import React from 'react';
import Firebase from './firebase';

class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = { 
            wins: '0',
            losses: '0',
            draws: '0',
            sr: '0000'
        };
    }

    writeUserData = () => {
    }
      
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        const item = {
            wins: this.state.wins,
            losses: this.state.losses,
            draws: this.state.draws,
            sr: this.state.sr
        }


        this.writeUserData();
    }
    componentDidMount() {
        Firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
    
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
        });
    }

    componentWillUnmount() {
        Firebase.users().off();
    }

    render() {
        return (
        <div className="tracker">
            <label htmlFor="wins">
                Wins
            </label>
            <textarea
                id="wins"
                name="wins"
                onChange={this.handleChange}
            />

            <label htmlFor="losses">
                Losses
            </label>
            <textarea
                id="losses"
                name="losses"
                onChange={this.handleChange}
            />

            <label htmlFor="draws">
                Draws
            </label>
            <textarea
                id="draws"
                name="draws"
                onChange={this.handleChange}
            />

            <label htmlFor="sr">
                SR
            </label>
            <textarea
                id="sr"
                name="sr"
                onChange={this.handleChange}
            />

        </div>
        );
    }
}

export default Tracker;