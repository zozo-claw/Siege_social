import { X, FileText, Activity, Book } from "lucide-react";

export default function AgentDetail({ agent, onClose }: { agent: any, onClose: () => void }) {
  if (!agent) return null;

  return (
    <div className="absolute right-0 top-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 p-6 z-10 shadow-2xl animate-in slide-in-from-right">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
            {agent.name.charAt(0)}
          </div>
          {agent.name}
        </h2>
        <button onClick={onClose} className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6 overflow-y-auto h-[calc(100%-80px)] pr-2">
        <section>
          <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4" />
            Mission
          </label>
          <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50">
            {agent.mission}
          </p>
        </section>

        <section>
          <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4" />
            Fichiers de travail
          </label>
          <div className="space-y-1.5">
            {agent.files.map((file: string) => (
              <div key={file} className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded border border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer group">
                <FileText className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400" />
                <span className="text-xs text-zinc-300">{file}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4" />
            Actions récentes
          </label>
          <div className="space-y-2">
            {agent.recentActions.map((action: string, i: number) => (
              <div key={i} className="text-xs text-zinc-400 pl-3 border-l-2 border-emerald-500/30">
                {action}
              </div>
            ))}
          </div>
        </section>

        <section>
          <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2 mb-2">
            <Book className="w-4 h-4" />
            Accès mémoire
          </label>
          <a href={agent.memoryLink} className="text-xs text-emerald-400 hover:underline flex items-center gap-1.5 font-medium">
            Ouvrir la mémoire de l'agent
          </a>
        </section>
      </div>
    </div>
  );
}
