import { useParams, useHistory } from "react-router";
import useFetch from "./useFetch";

const Task = () => {
  const { id } = useParams();
  const tasks = useFetch("http://localhost:5000/tasks/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const handleBack = () => {
    history.go(-1);
  };

  return (
    <>
      <div>
        <h3 id="id"> {id} </h3>- {tasks && <h3>{tasks.name}</h3>}
        <div className="button">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleBack}>Back</button>
        </div>
      </div>
      <style jsx>{`
        h3 {
          display: inline;
          font-size: 2.6em;
        }

        #id {
          color: red;
        }

        button {
          margin: 1rem;
        }
      `}</style>
    </>
  );
};

export default Task;
