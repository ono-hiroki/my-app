import {createRoot} from "react-dom/client";
import React from "react";

const App: React.FC = () => {
    return (
        <div>
            <h1>React</h1>
        </div>
    );
};




if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));

    root.render(<App />);
}
