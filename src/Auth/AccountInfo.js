import React from 'react';
import { UserConsumer } from '../UserContext';
import Title from 'components/Title';
const AccountInfo = () => {
    return (
        <div className="container">
            <div className="row">
                <Title name="User Account" />
                <UserConsumer>
                    {value => {
                        const { user, loggedIn } = value;
                        const { id, email } = value.user;
                        return (
                            <div className="col-10 col-md-6 border-info">
                                <h3>Welcome {user ? email : ""}</h3>
                                <h3>ID: {id}</h3>
                                <h3>Email:{email}</h3>
                            </div>
                        )
                    }}
                </UserConsumer>
            </div>
        </div>
    )
}
export default AccountInfo
