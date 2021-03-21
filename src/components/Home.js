import { Link } from "react-router-dom";

const Home = ({ tasks }) => {
  return (
    <>
      <div>
        <div className="title">
          <h1>To Do</h1>
        </div>
        <table>
          <tr>
            <th>Task</th>
            <th>Due</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.date}</td>
              <td>{task.status}</td>
              <td>
                <Link to={`/task/${task.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </table>
        <br />
      </div>
      <style jsx>{`
        table {
          width: 120%;
        }
        .title {
          text-align: center;
          margin: 1em 0;
          font-size: 2rem;
        }
      `}</style>
    </>
  );
};

export default Home;
