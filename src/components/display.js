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

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            console.log('user list');
            console.log(usersList);
        });
    }
    
    componentWillUnmount() {
        this.props.firebase.users().off();
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