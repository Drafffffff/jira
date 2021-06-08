// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { List } from "./list";
import { SerchPanel } from "./serch-panel";
import { useEffect, useState } from "react";
import { cleanObj, useDebounce, useMount } from "../../utils/index";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [parm, setParm] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParm = useDebounce(parm, 200);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(debouncedParm))}`).then(
      async response => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debouncedParm]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SerchPanel param={parm} setParm={setParm} users={users} />
      <List users={users} list={list} />
    </div>
  );
};
