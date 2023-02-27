import {createRoot} from "react-dom/client";
import React, {useCallback, useRef, useState} from "react";
import ReactFlow, {
    ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import TextUpdaterNode from "../components/reactflow/custom-nodes/TextUpdaterNode";
import Sidebar from "../components/reactflow/Sidebar";
import useStore from "../components/reactflow/store";
import {shallow} from "zustand/shallow";
import ButtonEdge from "../components/reactflow/custom-edge/ButtonEdge";

const nodeTypes = {textUpdater: TextUpdaterNode};
const edgeTypes = {buttonedge: ButtonEdge};


const rfStyle = {
    backgroundColor: '#B8CEFF',
};

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    addChildNode: state.addChildNode,
    onConnect: state.onConnect,
    onDragOver: state.onDragOver,
    onDrop: state.onDrop,
    updateNodeLabel: state.updateNodeLabel,
});

const App = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onDragOver, onDrop } = useStore(selector, shallow);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {width, height} = useGetWindowSize();
    const reactFlowWrapper = useRef(null);

    return (
        <div className="dndflow">
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}  style={{width: width, height: height}}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={(params) => onConnect(params)}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        fitView
                        style={rfStyle}
                        onInit={setReactFlowInstance}
                        onDrop={(event) => onDrop(event, reactFlowInstance, reactFlowWrapper)}
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
