import React from "react";
import { User } from "../../types/user";
import "./UserSelect.scss";

interface UserSelectProps {
  users: User[];
  onSelectUser: (userId: string) => void;
}

const UserSelect: React.FC<UserSelectProps> = ({ users, onSelectUser }) => {
  return (
    <div className="user-select">
      {users.map(user => (
        <div
          key={user.id}
          className="user-card"
          onClick={() => onSelectUser(user.id)}
        >
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <div className="user-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default UserSelect;
