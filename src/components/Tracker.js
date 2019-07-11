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

const FormDisplay = styled.div`
    font-size: 1.5em;
    display: flex;
    font-weight: bold;
    width: 100px;
    flex-direction: column;
    color: palevioletred;
    background-color: #FFFDD0;
    margin: 0 auto;
    padding: 0;
    text-align: center;
`;

const FormSection = styled.div`
    max-width: 100px;
`;

const TextInput = styled.input`
    max-width: 100px;
    color: palevioletred;
    padding: 2px;
    border: 3px solid;
    height: 20px;
    background-color: #FFFDD0;
    margin-bottom: 15px;
`;

const StyledButton = styled.button`
    width: 106px;
    color: palevioletred;
    height: 30px;
    border: 3px solid;
    background-color: #FFFDD0;
    margin-bottom: 35px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    }
    &:active {
        font-weight: bold;
        border: 4px solid;
    }
`;

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

        db.collection("users")
        .doc(this.props.name)
        .set({
            username: this.props.name,
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
            <Container>
                <FormDisplay>
                    <FormSection>
                        <label htmlFor="wins">
                            Wins
                        </label>
                        <TextInput
                            id="wins"
                            name="wins"
                            onChange={this.handleChange}
                        />
                    </FormSection>
                    <FormSection>
                        <label htmlFor="losses">
                            Losses
                        </label>
                        <TextInput
                            id="losses"
                            name="losses"
                            onChange={this.handleChange}
                        />
                    </FormSection>
                    <FormSection>
                        <label htmlFor="draws">
                            Draws
                        </label>
                        <TextInput
                            id="draws"
                            name="draws"
                            onChange={this.handleChange}
                        />
                    </FormSection>
                    <FormSection>
                        <label htmlFor="sr">
                            SR
                        </label>
                        <TextInput
                            id="sr"
                            name="sr"
                            onChange={this.handleChange}
                        />
                    </FormSection>
                    <FormSection>
                        <StyledButton
                            type="submit"
                            onClick={this.handleClick}
                        >
                            Submit
                        </StyledButton>
                    </FormSection>
                </FormDisplay>
            </Container>
        );
    }
}

export default Tracker;