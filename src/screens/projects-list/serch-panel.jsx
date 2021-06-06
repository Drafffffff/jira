// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export const SerchPanel = ({ parm, setParm, users }) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={parm.name}
          onChange={evt =>
            setParm({
              ...parm,
              name: evt.target.value,
            })
          }
        ></input>
        <select
          value={parm.personId}
          onChange={evt => setParm({ ...parm, personId: evt.target.value })}
        >
          <option value={""}>负责人</option>
          {users.map(user => (
            <option value={user.id} key={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};
