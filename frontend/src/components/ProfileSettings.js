import React from 'react';
import './styles/ProfileSettings.css'
class ProfileSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.name,
            email: props.user.email,
            birthdate: props.user.birthdate,
            country: props.user.country
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onUpdateProfile(this.state);
    }

    render() {
        return (
            <div className="profile-settings">
                <h2>Edit Profile</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthdate">Birthdate:</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={this.state.birthdate}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={this.state.country}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        );
    }
}

export default ProfileSettings;