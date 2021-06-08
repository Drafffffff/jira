// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.

import { User } from "./serch-panel";

// https://opensource.org/licenses/MIT
interface Project {
  id: string;
  personId: string;
  name: string;
  pin: Boolean;
  organization: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ users, list }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find(user => user.id === project.personId)?.name || "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
