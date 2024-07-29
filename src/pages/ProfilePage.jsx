import { useAuth } from "../security/useAuth";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>Welcome, {auth.user?.username}</p>
    </>
  );
}

export { ProfilePage };
