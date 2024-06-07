import React from 'react'
import TaskCard from './TaskCard'
import DropArea from './DropArea';

const SectionPage = ({ icon, title, createTask, status, handleDelete, setActiveCard, onDrop }) => {
  
  console.log(createTask);
  return (
    <div className='w-[460px]' >
      <main className='my-4 flex flex-col gap-4'>
        <h2 className='flex items-center gap-4 text-lg whitespace-nowrap'>
          <img src={icon} alt="" className='w-8 ' />
          {title}
        </h2>
      </main>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {createTask.map((task, index) => task.status === status &&
        <React.Fragment key={index} >
          <TaskCard title={task.taskInput} tags={task.tags} handleDelete={handleDelete} index={index} setActiveCard={setActiveCard} />
          <DropArea onDrop={() => onDrop(status, index + 1)} />
        </React.Fragment>
      )}

    </div>
  )
}

export default SectionPage