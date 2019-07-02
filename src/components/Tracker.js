import React from 'react';
import { db } from "./firebase";

class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = { 
            wins: '0',
            losses: '0',
            draws: '0',
            sr: '0000'
        };
    }

    writeUserData = () => {
        const uid = new Date().getTime();
        s
        const data = {
            ...this.state,
            uid
        };

        db.collection("users")
        .doc(data.uid.toString())
        .set(data)
        .then(() => {
            console.log('data added, check firestore');
        })
        .catch(error => {
            console.log('error ', error);
        // this.setState({ isSubmitting: false });
        });

    }
      
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        this.writeUserData();
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
            <button
                type="submit"
                onClick={this.handleClick}
            >
                Submit
            </button>
        </div>
        );
    }
}

export default Tracker;