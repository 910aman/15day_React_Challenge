import TaskForm from './components/TaskForm.jsx'
import SectionPage from './components/TaskColumn.jsx'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/fire.png'
import doneIcon from './assets/check-mark-button.png'
import { useEffect, useState } from 'react'

const oldTasks = localStorage.getItem("tasks");

function App() {
  const [createTask, setCreateTask] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null)

  const handleDelete = (taskIndex) => {
    const newTask = createTask.filter((_, index) => index !== taskIndex);
    setCreateTask(newTask);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(createTask))
  }, [createTask])

  const onDrop = (status, position) => {
    console.log(`${activeCard} status ${status} pos ${position}`);
    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = createTask[activeCard];
    const updatedTasks = createTask.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, { ...taskToMove, status: status })
    setCreateTask(updatedTasks)
  }



  return (
    <section className='container mx-auto '>
      <TaskForm setCreateTask={setCreateTask} />
      <main className='flex gap-7 justify-evenly'>
        <SectionPage title="To do" icon={todoIcon} createTask={createTask} status={"todo"} handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <SectionPage title="Doing" icon={doingIcon} createTask={createTask} status={"doing"} handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <SectionPage title="Done" icon={doneIcon} createTask={createTask} status={"done"} handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
      </main>
    </section >
  )
}

export default App
