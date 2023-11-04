import React from 'react';
import './App.css';
import Router from './utils/routes';
import { Toaster } from './components/ui/toaster';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
    // We can have other global components here like Providers, etc.
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <Toaster />
        </QueryClientProvider>
    );
};

export default App;
