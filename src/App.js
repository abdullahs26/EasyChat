import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="e10de705-9161-4bf2-935e-b59e91e5bc65"
            userName="testuser"
            userSecret="test123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
}

export default App; 