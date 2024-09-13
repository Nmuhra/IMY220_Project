import React from 'react';
import ProfilePreview from './ProfilePreview.js';

class FriendList extends React.Component {
    render() {
        const { friends, type } = this.props;

        return (
            <div className="friend-list">
                <h2>{type}</h2>
                <div className="friends-grid">
                    {friends.map(friend => (
                        <ProfilePreview
                            key={friend.id}
                            avatarUrl={friend.avatarUrl}
                            username={friend.username}
                            friendsCount={friend.friendsCount}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default FriendList;