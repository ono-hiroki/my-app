import {createRoot} from "react-dom/client";
import React, {useCallback, useState} from "react";
import ReactFlow, {Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import TextUpdaterNode from "../components/custom-nodes/TextUpdaterNode";

const initialNodes = [
    { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
    { id: 'node-2', type: 'textUpdater', position: { x: 200, y: 0 }, data: { value: 456 } },
    { id: 'node-3', type: 'textUpdater', position: { x: 100, y: 100 }, data: { value: 789 } },
];
const nodeTypes = { textUpdater: TextUpdaterNode };

const rfStyle = {
    backgroundColor: '#B8CEFF',
};
const App = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);
    const {width, height} = useGetWindowSize();
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div style={{width: width, height: height}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                style={rfStyle}
            />
        </div>
    );
}

if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));
    root.render(<App/>);
}
