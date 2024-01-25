"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import GetToken from "@/utils/GetToken";

type Data = {
  id: number;
  email: string;
  status: string;
};

export default function UpdateUser(data: Data): JSX.Element {
  const [status, setStatus] = useState(data.status);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleUpdate(e: SyntheticEvent) {
    e.preventDefault();

    setIsMutating(true);

    const token = await GetToken();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: status,
      }),
    };

    await fetch(
      `https://laravel.roulete.tech/api/EarlyAccess/${data.id}`,
      requestOptions
    );

    setIsMutating(false);

    router.refresh();
    console.log(requestOptions);
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit role {data.email}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Status</label>
              <select
                defaultValue={status}
                onChange={(e) => setStatus(e.target.value)}
                className="relative w-full h-10 px-4 text-sm transition-all bg-white border-b outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="authorized">authorized</option>
                <option value="unauthorized">unauthorized</option>
              </select>
            </div>
            <div>
              <button type="button" className="btn" onClick={handleChange}>
                close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
