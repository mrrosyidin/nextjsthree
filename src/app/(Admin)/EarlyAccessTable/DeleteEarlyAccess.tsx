"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import GetToken from "@/utils/GetToken";

type Data = {
  id: number;
  email: string;
};

export default function DeleteUser(data: Data) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);
    const token = await GetToken();

    await fetch(`http://127.0.0.1:8000/api/EarlyAccess/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are sure to delete {data.email} ?
          </h3>
          <form onSubmit={handleDelete}>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Delete
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Deleting...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
