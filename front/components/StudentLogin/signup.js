
import React from "react";
import { Button, Divider, Grid } from 'semantic-ui-react';
import SocialSidebar from '../common/SocialSidebar';
import '../../public/css/signup.scss';


const Signup = (props) => {
const {  onChangePassword,onChangePasswordReTyping, password, passwordretype,passworddonotmatch } = props;

    return (
        <div className="signup shadowBox">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <div className="container sideContainer">
                            <h1 className="leftHeading">Sign up</h1>
                            <input label="User Name" type="text" className="userName input" placeholder="Username" />
                            <Divider/>
                            <input type="email" className="email input" placeholder="E-Mail"/>
                            <Divider/>
                            <input type="password" className="password input" placeholder="Password" value={password} onChange={onChangePassword} />
                            <Divider/>
                            <input type="password" className="repeatPassword input" placeholder="Retype Password" value={passwordretype} onChange={onChangePasswordReTyping}/>
                            <Divider/>

                            <h6 className={passworddonotmatch ? 'incorrect' : 'correct'}>Please Retype the Correct Password.</h6>

                            <Button className="btn btn-info button" type="submit" name="action">SIGN ME UP
                                <i className="material-icons right"> </i>
                            </Button>

                        </div>

                    </Grid.Column>
                    <SocialSidebar/>
                </Grid.Row>
            </Grid>
        </div>
    );
};


export default Signup;