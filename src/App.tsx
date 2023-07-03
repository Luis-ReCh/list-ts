import { useState } from "react";
import List from "./components/List";

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [text, setText] = useState(""); // el setText es el que ya trae la informacion cargada

  function onAddItem() {
    setTasks([text, ...tasks]);
    setText(""); // vaciamos el setTexts para que el input no traiga nada
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onAddItem();
    }
  }

  function onDelete(deleteIndex: number) {
    tasks.splice(deleteIndex, 1);
    setTasks([...tasks]);
  }

  function empty() {
    setTasks([]);
  }
  return (
    <div className="container pt-4">
      <h1 className="text-center">Mis cosas por Hacer</h1>
      <section className="d-flex mb-3">
        <input
          className="form-control"
          type="text"
          id="text"
          name="text"
          onChange={(event) => setText(event.target.value)} //capturamos el valor el input
          onKeyUp={onEnter}
          value={text}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={onAddItem}
        >
          +
        </button>
      </section>
      <table className="table table-striped">
        <tbody>
          {tasks.map((task, index) => {
            return (
              <List
                key={`koder-card ${index}`}
                text={task}
                onDelete={() => onDelete(index)}
              />
            );
          })}
        </tbody>
      </table>
      <button type="button" className="btn btn-success" onClick={empty}>
        Borrar todo
      </button>
    </div>
  );
}
