"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Users = ({ users }) => {

  const router = useRouter()

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
          <div>
            <h5>
              {users.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <Image style={{borderRadius: "50%"}} width={150} height={150} src={user.avatar} alt={user.email} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
