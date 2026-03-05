"use client";

import { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  Background,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import AgentNode from '@/components/AgentNode';
import AgentDetail from '@/components/AgentDetail';

const nodeTypes = {
  agent: AgentNode,
};

const initialNodes: Node[] = [
  {
    id: 'marius',
    type: 'agent',
    position: { x: 250, y: 0 },
    data: { name: 'Marius', role: 'CEO', status: 'Actif' },
  },
  {
    id: 'zozo',
    type: 'agent',
    position: { x: 250, y: 150 },
    data: { name: 'Zozo', role: 'DGD', status: 'Actif' },
  },
  {
    id: 'leo',
    type: 'agent',
    position: { x: 100, y: 300 },
    data: { name: 'Léo', role: 'DevOps', status: 'Idle' },
  },
  {
    id: 'nora',
    type: 'agent',
    position: { x: 400, y: 300 },
    data: { name: 'Nora', role: 'Fullstack', status: 'Actif' },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: 'marius', target: 'zozo', animated: true, style: { stroke: '#10b981' } },
  { id: 'e2-3', source: 'zozo', target: 'leo', animated: true, style: { stroke: '#10b981' } },
  { id: 'e2-4', source: 'zozo', target: 'nora', animated: true, style: { stroke: '#10b981' } },
];

export default function OrganigrammePage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [agentsData, setAgentsData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/organigramme')
      .then(res => res.json())
      .then(data => {
        setAgentsData(data.agents);
        // Update nodes with full data if needed, but for now we'll just keep the initial
      });
  }, []);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    const agent = agentsData.find(a => a.id === node.id);
    if (agent) {
      setSelectedAgent(agent);
    }
  }, [agentsData]);

  return (
    <div className="flex h-full flex-col">
      <div className="p-6 border-b border-zinc-800 bg-zinc-950/50">
        <h1 className="text-2xl font-bold">🏢 Organigramme (React Flow)</h1>
        <p className="text-sm text-zinc-500 mt-1">Cliquez sur un agent pour voir les détails de sa mission.</p>
      </div>
      <div className="flex-1 relative bg-zinc-900/40">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          colorMode="dark"
        >
          <Background color="#27272a" gap={20} />
          <Controls />
        </ReactFlow>
        
        {selectedAgent && (
          <AgentDetail 
            agent={selectedAgent} 
            onClose={() => setSelectedAgent(null)} 
          />
        )}
      </div>
    </div>
  );
}
