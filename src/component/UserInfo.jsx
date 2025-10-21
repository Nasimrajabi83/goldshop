import React, { useEffect, useState } from "react";

function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost/backend/getUser.php")
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((err) => console.error(err));
  }, []);

  if (!user) return <p>در حال بارگذاری...</p>;

  return (
    <div>
      <h2>اطلاعات کاربر</h2>
      <p>نام: {user.fullname}</p>
      <p>ایمیل: {user.email}</p>
    </div>
  );
}

export default UserInfo;
