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

        const data = { uid };

        this.props.updateUID(data);

        db.collection("users")
        .doc(data.uid.toString())
        .set({
            uid: data.uid,
            ...this.state
        })
        .catch(error => {
            console.log('error ', error);
        });

    }
      
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick() {
        this.writeUserData();
    }

    render() {
        return (
        <div className="tracker">
            <label htmlFor="name">
                Name
            </label>
            <textarea
                id="name"
                name="name"
                onChange={this.handleChange}
            />

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