import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfil } from "../redux/action";

const Profil = () => {
  const { user, loading } = useSelector((state) => state);
  console.log(loading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfil());
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        user && (
          <div>
            <h1>{user.fullName}</h1>
          </div>
        )
      )}
    </div>
  );
};

export default Profil;
