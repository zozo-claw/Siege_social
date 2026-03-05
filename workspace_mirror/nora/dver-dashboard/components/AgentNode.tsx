import { Handle, Position } from "@xyflow/react";

const AgentNode = ({ data }: { data: any }) => {
  const isOnline = data.status === "Actif";

  return (
    <div className="px-4 py-2 shadow-lg rounded-md border-2 border-zinc-800 bg-zinc-950 min-w-[200px]">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-lg text-emerald-400">
            {data.name.charAt(0)}
          </div>
          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-zinc-950 ${isOnline ? 'bg-emerald-500' : 'bg-zinc-500'}`}></div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm text-zinc-100">{data.name}</span>
          <span className="text-xs text-zinc-500">{data.role}</span>
        </div>
      </div>
      <div className={`mt-2 text-[10px] px-2 py-0.5 rounded inline-block ${isOnline ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-500/10 text-zinc-400'}`}>
        {data.status}
      </div>
      
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-emerald-500 border-none" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-emerald-500 border-none" />
    </div>
  );
};

export default AgentNode;
