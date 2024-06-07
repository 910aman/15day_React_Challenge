import { useEffect, useState } from "react";

const TodoList = () => {
  const [addList, setAddList] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoStorage, setTodoStorage] = useState()

  const generateId = () => Math.floor(Math.random() * 10000);
  const handleAddTask = () => {
    if (addList) {
      setTodoList([...todoList, { id: generateId(), name: addList, status: false }]);
      setAddList("");
    } else {
      alert("Please enter a task title.");
    }
  };


  const handleStrike = (taskId) => {
    setTodoList(
      todoList.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };


  const handleDelete = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  };


  const handleSort = () => {
    setTodoList([...todoList].sort((a, b) => (a.name > b.name ? 1 : -1)));
  };


  useEffect(() => {
    const getStorage = localStorage.getItem("todoList");
    console.log("Todo List ", JSON.parse(getStorage), "Storage", todoStorage);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    setTodoStorage(getStorage)

  })


  return (
    <>
      <div className="container mx-auto">
        <section className="flex flex-col py-4 bg-red-500">
          <div className="flex-col text-center justify-center py-10 pt-6 w-full ">
            <div className="font-bold text-white text-3xl">My To-Do List</div>
          </div>
          <div className="input-container flex flex-1 justify-center ">
            <input
              type="text"
              className="w-[600px] h-full pl-4 text-2xl font-semibold py-3"
              placeholder="Title..."
              value={addList}
              onChange={(e) => setAddList(e.target.value)}
            />
            <button className="h-full w-32 bg-zinc-400 font-bold text-2xl top-0 cursor-pointer py-3" onClick={handleAddTask}>
              Add
            </button>
            <button className="h-full w-32 bg-sky-500 font-bold text-2xl top-0 cursor-pointer py-3" onClick={handleSort}>
              Sort
            </button>
          </div>
        </section>
        <section className="tasks">
          <ul className="task-list w-full flex flex-col">
            {todoList.map((task) => (
              <li key={task.id}
                className='flex flex-1 flex-row '>
                <div className={` flex flex-1 *:hover:bg-gray-500 ${task.status ? " bg-gray-600  text-gray-200" : "bg-gray-300 text-black "}`}>
                  <div
                    className={`flex flex-1 flex-row w-full  items-center select-none text-2xl  font-bold after:font-medium after:bg-[#4d2626] after:line-through px-3
                          ${task.status ? "line-through " : "bg-gray-300 text-black"}`}
                    onClick={() => handleStrike(task.id)}
                  >
                    {task.name}
                  </div>
                  <div className="flex *:items-center cursor-pointer">
                    <span
                      className="font-bold px-2 cursor-pointer text-4xl"
                      onClick={() => handleDelete(task.id)}
                    >
                      x
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default TodoList;
