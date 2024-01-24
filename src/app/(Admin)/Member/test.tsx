"use client";

import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { request } from "http";

interface Data {
  id: number;
  email: string;
  role: string;
  created_at: string;
}

export default function Member() {
  const [data, setData] = useState<Data[] | null>(null);
  const [editDataId, setEditDataId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ role: "", password: "" });

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("Token");
      const role = localStorage.getItem("Role");

      // if (role != "admin") {
      //   useRouter().push("/src/app/Dashboard/Login/");
      // }

      const response = await axios.get<Data>("http://127.0.0.1:8000/api/get", {
        headers: {
          Authorization: `${"Bearer 14afb724-1b9a-49c0-918f-983abacc02a9"}`,
          "Content-Type": "application/json",
        },
      });
      // console.log("Raw response from the server:", response.data);

      if (response.data && Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.error("Invalid data format received from the server");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditData = async (itemId: number | string) => {
    try {
      const response = await axios.get(``);
      setEditDataId(itemId as number | null);
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateData = async () => {
    try {
      await axios.put(``, formData);
      setEditDataId(null);
      setFormData({ role: "", password: "" });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data && Array.isArray(data) ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>email</th>
              <th>status</th>
              <th>Date</th>
              <th>tehe</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.created_at}</td>
                <button onClick={() => handleEditData(user.id)}>Edit</button>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading</p>
      )}

      <form
        onSubmit={handleUpdateData}
        style={{ display: editDataId ? "block" : "none" }}
      >
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="client">client</option>
          <option value="admin">admin</option>
        </select>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}
