import React, {Component} from 'react';
import G6 from '@antv/g6';
class Tututu extends Component {
constructor(props){
    super(props)
    this.state={
        data:''
    }
}
    componentDidMount() {
const width=500;
const height=500;
        // const width = document.getElementById('container').scrollWidth;
        // const height = document.getElementById('container').scrollHeight || 500;
        const graph = new G6.Graph({
            container: 'ptt',
            width,
            height,
            layout: {
                type: 'force',
                preventOverlap: true,
                linkDistance: d => {
                    if (d.source.id === 'node0') {
                        return 100;
                    }
                    return 30;
                },
                nodeStrength: d => {
                    if (d.isLeaf) {
                        return -50;
                    }
                    return -10;
                },
                edgeStrength: d => {
                    if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
                        return 0.7;
                    }
                    return 0.1;
                },
            },
            defaultNode: {
                color: '#5B8FF9',
                style: {
                    lineWidth: 2,
                    fill: '#C6E5FF',
                },
            },
            defaultEdge: {
                size: 1,
                color: '#e2e2e2',
            },
        });

        const data = {
            nodes: [
                { id: 'node0', size: 50 ,value:'kjdl'},
                { id: 'node1', size: 30 },
                { id: 'node2', size: 30 },
                { id: 'node3', size: 30 },
                { id: 'node4', size: 30, isLeaf: true },
                { id: 'node5', size: 30, isLeaf: true },
                { id: 'node6', size: 15, isLeaf: true },
                { id: 'node7', size: 15, isLeaf: true },
                { id: 'node8', size: 15, isLeaf: true },
                { id: 'node9', size: 15, isLeaf: true },
                { id: 'node10', size: 15, isLeaf: true },
                { id: 'node11', size: 15, isLeaf: true },
                { id: 'node12', size: 15, isLeaf: true },
                { id: 'node13', size: 15, isLeaf: true },
                { id: 'node14', size: 15, isLeaf: true },
                { id: 'node15', size: 15, isLeaf: true },
                { id: 'node16', size: 15, isLeaf: true },
            ],
            edges: [
                { source: 'node0', target: 'node1' },
                { source: 'node0', target: 'node2' },
                { source: 'node0', target: 'node3' },
                { source: 'node0', target: 'node4' },
                { source: 'node0', target: 'node5' },
                { source: 'node1', target: 'node6' },
                { source: 'node1', target: 'node7' },
                { source: 'node2', target: 'node8' },
                { source: 'node2', target: 'node9' },
                { source: 'node2', target: 'node10' },
                { source: 'node2', target: 'node11' },
                { source: 'node2', target: 'node12' },
                { source: 'node2', target: 'node13' },
                { source: 'node3', target: 'node14' },
                { source: 'node3', target: 'node15' },
                { source: 'node3', target: 'node16' },
            ],
        };
        const nodes = data.nodes;
        graph.data({
            nodes,
            edges: data.edges.map(function(edge, i) {
                edge.id = 'edge' + i;
                return Object.assign({}, edge);
            }),
        });
        graph.render();

        graph.on('node:dragstart', function(e) {
            graph.layout();
            refreshDragedNodePosition(e);
        });
        graph.on('node:drag', function(e) {
            refreshDragedNodePosition(e);
        });
        graph.on('node:dragend', function(e) {
            e.item.get('model').fx = null;
            e.item.get('model').fy = null;
        });
        graph.on('node:click', function(e) {
            const node = e.item;
            const states = node.getStates();
            const model = node.getModel();
            alert(model.value)
        });
        function refreshDragedNodePosition(e) {
            const model = e.item.get('model');
            model.fx = e.x;
            model.fy = e.y;
        }
    }

    render() {
        return (
            <div>
                <div id={'ptt'} style={{height:500,width:500}}></div>
                <div style={{height:500,width:500}}>{this.state.data1}</div>
            </div>
        );
    }
}

export default Tututu;