"use client";

import { Users } from "lucide-react";

const roadmapData = [
  { id: 1, name: "Dver Dashboard", status: "En cours", progress: 65, dates: "Mars 2024 - Mai 2024", agents: ["Nora", "Léo", "Zozo"] },
  { id: 2, name: "Dver Field App", status: "Planifié", progress: 0, dates: "Juin 2024 - Août 2024", agents: ["Nora", "Léo"] },
  { id: 3, name: "Dver HQ Back-office", status: "Planifié", progress: 0, dates: "Sept. 2024 - Nov. 2024", agents: ["Nora", "Marius"] },
  { id: 4, name: "API Integration CRM", status: "Planifié", progress: 0, dates: "Dec. 2024 - Fév. 2025", agents: ["Nora", "Léo", "Zozo"] },
];

export default function TimelinePage() {
  return (
    <div className="p-6 h-full flex flex-col gap-6">
      <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 shadow-sm">
        <h1 className="text-2xl font-bold">📅 Timeline & Roadmap</h1>
        <p className="text-sm text-zinc-500 mt-1">Suivi de l'avancement des projets et assignations.</p>
      </div>

      <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Projet</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Dates de réalisation</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Statut</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Avancement</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Équipe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {roadmapData.map((project) => (
                <tr key={project.id} className="hover:bg-zinc-900/50 transition-colors">
                  <td className="px-6 py-5">
                    <span className="font-semibold text-zinc-200">{project.name}</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-zinc-400">
                    {project.dates}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                      project.status === "En cours" ? "bg-emerald-500/10 text-emerald-400" : "bg-zinc-800 text-zinc-400"
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 w-48">
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <span className="text-[10px] text-zinc-500 mt-1.5 inline-block font-mono">{project.progress}% complété</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex -space-x-2">
                      {project.agents.map((agent, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-zinc-400" title={agent}>
                          {agent.charAt(0)}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
