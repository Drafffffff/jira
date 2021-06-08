// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export interface User {
  id: string;
  name: string;
  email:string;
  title:string;
  organization:string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParm: (parm: SearchPanelProps["param"]) => void;
}
export const SerchPanel = ({ param, setParm, users }: SearchPanelProps) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={evt =>
            setParm({
              ...param,
              name: evt.target.value,
            })
          }
        ></input>
        <select
          value={param.personId}
          onChange={evt => setParm({ ...param, personId: evt.target.value })}
        >
          <option value={""}>负责人</option>
          {users.map(user => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
