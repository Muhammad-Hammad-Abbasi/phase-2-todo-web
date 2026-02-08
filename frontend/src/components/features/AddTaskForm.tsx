'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fetchAPI } from '@/lib/api';

interface AddTaskFormProps {
  onTaskAdded: () => void;
}

export function AddTaskForm({ onTaskAdded }: AddTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    try {
      await fetchAPI('/tasks/', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
      });
      setTitle('');
      setDescription('');
      onTaskAdded();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-border space-y-5 transition-all-smooth hover:shadow-md mb-8">
       <div className="flex flex-col space-y-1.5">
           <h3 className="text-lg font-semibold text-foreground tracking-tight">Create New Task</h3>
           <p className="text-sm text-muted-foreground">What do you want to get done today?</p>
       </div>
       
       <div className="space-y-4">
           <Input 
             id="new-task-title"
             label="Title"
             placeholder="e.g., Review project proposal"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             required
             className="bg-muted/30"
           />
           <Input 
             id="new-task-desc"
             label="Description (Optional)"
             placeholder="Add details..."
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             className="bg-muted/30"
           />
       </div>
       
       <div className="flex justify-end pt-2">
          <Button type="submit" disabled={!title.trim() || loading} className="min-w-[120px]">
             {loading ? 'Creating...' : 'Create Task'}
          </Button>
       </div>
    </form>
  );
}