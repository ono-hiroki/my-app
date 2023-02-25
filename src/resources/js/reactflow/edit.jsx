import {createRoot} from "react-dom/client";
import React, {useCallback, useRef, useState} from "react";
import ReactFlow, {
    ReactFlowProvider,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    useNodesState,
    useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import TextUpdaterNode from "../components/reactflow/custom-nodes/TextUpdaterNode";
import Sidebar from "../components/reactflow/Sidebar";

const initialNodes = [
    {id: 'node-1', type: 'textUpdater', position: {x: 0, y: 0}, data: {value: 123}},
    {id: 'node-2', type: 'textUpdater', position: {x: 200, y: 0}, data: {value: 456}},
    {id: 'node-3', type: 'textUpdater', position: {x: 100, y: 100}, data: {value: 789}},
];
const nodeTypes = {textUpdater: TextUpdaterNode};

const rfStyle = {
    backgroundColor: '#B8CEFF',
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const {width, height} = useGetWindowSize();
    const onConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);
    const onDrop = useCallback(
        (event) => {
            event.preventDefault(); // preventDefaultは、デフォルトのイベントをキャンセルするためのメソッドです。

            // @ts-ignore
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            // getBoundingClientRect()は、要素の大きさと位置を示すDOMRectオブジェクトを返します。

            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            console.log(event.clientX, '-', reactFlowBounds.left, 'event.clientX - reactFlowBounds.left')
            console.log(reactFlowBounds)
            // reactFlowBounds.leftは、要素の左端からの距離を示す数値です。
            // @ts-ignore
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: {label: `${type} node`},
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );


    return (
        <div className="dndflow" style={{width: width, height: height}}>
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        fitView
                        style={rfStyle}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                    />
                </div>
                <Sidebar/>
            </ReactFlowProvider>
        </div>
    );
}

if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));
    root.render(<App/>);
}
