import './App.css'
import { gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Data Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <div className="card">
        {data.getUsers.map((user) => (
          <div key={user.id} style={{
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid #646cff',
            borderRadius: '8px',
            backgroundColor: 'rgba(100, 108, 255, 0.1)'
          }}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Married:</strong> {user.isMarried ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 