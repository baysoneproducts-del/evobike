
import React, { useState, useMemo } from 'react';
import { User, Task, UserRole } from '../types';
import { MOCK_TASKS, MOCK_USERS } from '../constants';

const TaskItem: React.FC<{ 
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  currentUser: User;
}> = ({ task, onToggle, onDelete, currentUser }) => {
  const assignedUser = MOCK_USERS.find(u => u.id === task.assignedTo);
  const createdByUser = MOCK_USERS.find(u => u.id === task.createdBy);

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 rounded border-gray-300 text-whatsapp-green focus:ring-whatsapp-green"
        />
        <div className="ml-4">
          <p className={`font-medium ${task.completed ? 'line-through text-gray-400' : 'text-text-primary'}`}>{task.title}</p>
          <p className="text-sm text-text-secondary">Pour: {assignedUser?.name} | Échéance: {task.dueDate}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
         { (currentUser.role === UserRole.ADMIN || currentUser.id === task.createdBy) && 
            <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">Supprimer</button>
         }
      </div>
    </div>
  );
};

const AddTaskForm: React.FC<{
    onAddTask: (title: string, assignedTo: number) => void;
    currentUser: User;
}> = ({ onAddTask, currentUser }) => {
    const [title, setTitle] = useState('');
    const [assignedTo, setAssignedTo] = useState<number>(MOCK_USERS.find(u => u.role !== UserRole.ADMIN)?.id || 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTask(title, assignedTo);
            setTitle('');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-50 rounded-lg mb-6 flex flex-col md:flex-row items-center gap-4">
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nouvelle tâche..."
                className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue"
            />
            {currentUser.role === UserRole.ADMIN && (
                 <select
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(parseInt(e.target.value))}
                    className="p-2 border rounded-md bg-white"
                >
                    {MOCK_USERS.filter(u => u.role !== UserRole.ADMIN).map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
            )}
            <button type="submit" className="w-full md:w-auto px-4 py-2 bg-whatsapp-green text-white rounded-md hover:bg-whatsapp-teal transition-colors">
                Assigner Tâche
            </button>
        </form>
    );
};


const Tasks: React.FC<{ currentUser: User }> = ({ currentUser }) => {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [view, setView] = useState<'my' | 'all'>('my');

  const handleToggle = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  
  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAddTask = (title: string, assignedTo: number) => {
    const newId = Math.max(...tasks.map(t => t.id)) + 1;
    const newTask: Task = {
        id: newId,
        title,
        assignedTo: currentUser.role === UserRole.ADMIN ? assignedTo : currentUser.id,
        createdBy: currentUser.id,
        completed: false,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 3 days from now
    };
    setTasks([newTask, ...tasks]);
  };

  const displayedTasks = useMemo(() => {
    if (currentUser.role === UserRole.ADMIN && view === 'all') {
      return tasks;
    }
    return tasks.filter(task => task.assignedTo === currentUser.id);
  }, [tasks, currentUser, view]);

  return (
    <div className="space-y-6">
       { (currentUser.role === UserRole.ADMIN || tasks.some(t=>t.createdBy === currentUser.id) ) && <AddTaskForm onAddTask={handleAddTask} currentUser={currentUser} /> }
       
       {currentUser.role === UserRole.ADMIN && (
        <div className="flex space-x-2 bg-gray-200 p-1 rounded-lg w-max">
            <button onClick={() => setView('my')} className={`px-4 py-2 text-sm rounded-md ${view === 'my' ? 'bg-white shadow' : ''}`}>Mes Tâches</button>
            <button onClick={() => setView('all')} className={`px-4 py-2 text-sm rounded-md ${view === 'all' ? 'bg-white shadow' : ''}`}>Toutes les Tâches</button>
        </div>
       )}

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Tâches en cours</h3>
        {displayedTasks.filter(t => !t.completed).map(task => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} currentUser={currentUser} />
        ))}
         {displayedTasks.filter(t => !t.completed).length === 0 && <p className="text-gray-500">Aucune tâche en cours.</p>}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Tâches terminées</h3>
        {displayedTasks.filter(t => t.completed).map(task => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} currentUser={currentUser} />
        ))}
        {displayedTasks.filter(t => t.completed).length === 0 && <p className="text-gray-500">Aucune tâche terminée.</p>}
      </div>
    </div>
  );
};

export default Tasks;
