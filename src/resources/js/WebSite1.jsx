import {createRoot} from "react-dom/client";
import React from "react";

const App = () => {
    return (
        <div>
            <h1>Laravel 9</h1>
        </div>
    );
}

if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));

    root.render(<App />);
}
