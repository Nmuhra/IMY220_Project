import React from 'react';
import './styles/ProfilePreview.css';

class ProfilePreview extends React.Component {
    render() {
        const { avatarUrl, username, friendsCount } = this.props;

        return (
            <div className="profile-preview">
                <div className="profile-avatar">
                    <img src={avatarUrl} alt={`${username}'s avatar`} />
                </div>
                <div className="profile-info">
                    <h1 className="profile-username">{username}</h1>
                    <p className="profile-friends">{friendsCount} friends</p>
                </div>
            </div>
        );
    }
}

export default ProfilePreview;