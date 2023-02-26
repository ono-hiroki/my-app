import {
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';
import {create} from 'zustand';

let id = 3;
const getId = () => `edge_${id++}`;

const useStore = create((set, get) => ({
    nodes: [
        {id: 'node-1', type: 'textUpdater', position: {x: 0, y: 0}, data: {label: 123}},
        {id: 'node-2', type: 'textUpdater', position: {x: 200, y: 0}, data: {label: 456}},
        {id: 'node-3', type: 'textUpdater', position: {x: 100, y: 100}, data: {label: 789}},
    ],
    edges: [
    ],
    // ノードを動かすため
    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    // エッジをつなげたり切ったりするため
    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    // const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    onConnect: (params) => {
        const id = getId();
        set({
            edges: [...get().edges, {id, ...params}],
        });


    },

    onDrop: (event, reactFlowInstance, reactFlowWrapper) => {
        event.preventDefault(); // preventDefaultは、デフォルトのイベントをキャンセルするためのメソッドです。
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }
        // reactFlowBounds.leftは、要素の左端からの距離を示す数値です。
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

        set((state) => ({nodes: [...state.nodes, newNode]}));
    },

    onDragOver: (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    },

    updateNodeLabel: (id, label) => {

        set({
            nodes: get().nodes.map((node) => {
                if (node.id === id) {
                    node.data = {...node.data, label};
                }

                return node;
            }),
        });
    },
}));

export default useStore;
