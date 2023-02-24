import {createRoot} from "react-dom/client";
import React from "react";
import ReactFlow, {Controls, Background} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const edges = [{id: '1-2', source: '1', target: '2'}];

const nodes = [
    {
        id: '1',
        data: {label: 'Hello'},
        position: {x: 0, y: 0},
        type: 'input',
    },
    {
        id: '2',
        data: {label: 'World'},
        position: {x: 100, y: 100},
    },
];

const App = () => {
    const {width, height} = useGetWindowSize();

    return (
        <div style={{width: width, height: height}}>
            <ReactFlow nodes={nodes} edges={edges}>
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
    );
}

if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));

    root.render(<App/>);
}
