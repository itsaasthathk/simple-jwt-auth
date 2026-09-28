function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <h2>Welcome!</h2>

      <p>User ID: {user.userId}</p>
      <p>Role: {user.role}</p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;