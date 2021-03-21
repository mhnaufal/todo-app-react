import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddTack = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { name, date, status };

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body : JSON.stringify(task)
    }).then(() => {
      history.push('/');
    })
  };

  return (
    <>
    <div>
      <h2 id="title-add">Add a new Task!</h2>
      <form onSubmit={handleSubmit}>
        <label>Task name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Due</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Done">Done</option>
          <option value="In progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
        <button>Add</button>
      </form>
        <p>{name}</p>
        <p>{date}</p>
        <p>{status}</p>
    </div>
      <style jsx>{`
        #title-add {
          margin: 2em 0;
          font-size: 2.4em;
        }

        form {
          margin: 1em;
        }

        button {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default AddTack;
