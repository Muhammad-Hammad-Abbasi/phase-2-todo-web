'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { AuthForm } from '@/components/features/AuthForm';
import { AddTaskForm } from '@/components/features/AddTaskForm';
import { TaskList } from '@/components/features/TaskList';
import { fetchAPI } from '@/lib/api';
import { Task } from '@/types/task';
import { logout } from '@/lib/auth';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      loadTasks();
    } else {
        setIsLoadingAuth(false);
    }
  }, []);

  const loadTasks = async () => {
    setLoadingTasks(true);
    try {
      const data = await fetchAPI('/tasks/');
      setTasks(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingTasks(false);
      setIsLoadingAuth(false);
    }
  };

  const handleAuthSuccess = (token: string) => {
    setIsAuthenticated(true);
    loadTasks();
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setTasks([]);
  }

  const handleToggle = async (task: Task) => {
    // Optimistic update
    const updatedTask = { ...task, is_completed: !task.is_completed };
    setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
    
    try {
        await fetchAPI(`/tasks/${task.id}/`, {
            method: 'PATCH',
            body: JSON.stringify({ is_completed: updatedTask.is_completed })
        });
    } catch (error) {
        console.error("Toggle failed", error);
        loadTasks(); // Revert
    }
  };

  const handleDelete = async (id: string) => {
      // Optimistic update
      setTasks(tasks.filter(t => t.id !== id));
      try {
          await fetchAPI(`/tasks/${id}/`, { method: 'DELETE' });
      } catch (error) {
          console.error("Delete failed", error);
          loadTasks(); // Revert
      }
  }

  if (isLoadingAuth) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>
  );

  if (!isAuthenticated) {
     return (
       <div className="min-h-screen bg-muted/50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-xl shadow-lg border border-border">
           <div className="text-center">
             <div className="flex justify-center mb-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                    📝
                </div>
             </div>
             <h2 className="text-3xl font-bold tracking-tight text-foreground">
               Todo App
             </h2>
             <p className="mt-2 text-sm text-muted-foreground">
               Sign in to your professional workspace.
             </p>
           </div>
           
           <AuthForm onSuccess={handleAuthSuccess} />
           
         </div>
         <p className="mt-8 text-center text-xs text-muted-foreground">
            &copy; 2026 Todo App Inc. All rights reserved.
         </p>
       </div>
     );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar onLogout={handleLogout} />

      <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">My Tasks</h1>
                <p className="text-muted-foreground">Manage your daily goals and track productivity.</p>
            </div>
            <Button onClick={() => setShowAddForm(!showAddForm)} size="lg" className="shadow-md">
                {showAddForm ? 'Cancel' : '+ New Task'}
            </Button>
        </div>
        
        <div className={`transition-all duration-300 ease-in-out ${showAddForm ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 h-0 overflow-hidden'}`}>
            {showAddForm && (
                <AddTaskForm onTaskAdded={() => {
                    loadTasks();
                    setShowAddForm(false);
                }} />
            )}
        </div>
        
        <TaskList 
            tasks={tasks} 
            loading={loadingTasks} 
            onToggle={handleToggle}
            onDelete={handleDelete}
        />
      </main>
    </div>
  );
}
