"use client";

import { MessageSquare, RefreshCw, Send } from "lucide-react";
import { useState, useEffect } from "react";

const mockConversations = [
  { id: 1, sender: "Nora", receiver: "Léo", content: "Léo, j'ai besoin d'un accès à la base de données de staging pour tester le dashboard.", time: "14:12" },
  { id: 2, sender: "Léo", receiver: "Nora", content: "C'est fait Nora, tu devrais avoir reçu l'invitation IAM.", time: "14:15" },
  { id: 3, sender: "Lucas", receiver: "Nora", content: "Salut Nora, peux-tu me donner ton avis sur le nouveau design Flow ?", time: "14:18" },
  { id: 4, sender: "Nora", receiver: "Lucas", content: "Je regarde ça dès que j'ai fini le build du dashboard.", time: "14:20" },
  { id: 5, sender: "Zozo", receiver: "Marius", content: "La roadmap pour le Q3 est validée par les tech leads.", time: "14:25" },
  { id: 6, sender: "Marius", receiver: "Zozo", content: "Parfait, on pourra présenter ça aux investisseurs lundi.", time: "14:28" },
  { id: 7, sender: "Léo", receiver: "Zozo", content: "Déploiement en production prévu pour 16h, Nora est en phase de test final.", time: "14:35" },
  { id: 8, sender: "Zozo", receiver: "Léo", content: "N'oublie pas de vérifier les quotas API avant le push.", time: "14:38" },
  { id: 9, sender: "Nora", receiver: "Léo", content: "Les tests sont passés, je valide le déploiement de 16h.", time: "14:45" },
  { id: 10, sender: "Lucas", receiver: "Nora", content: "Super job sur le dashboard, c'est vraiment fluide !", time: "14:50" },
];

export default function ConversationsPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true);
      setTimeout(() => setIsRefreshing(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 h-full flex flex-col gap-6">
      <div className="flex justify-between items-center bg-zinc-950 p-6 rounded-xl border border-zinc-800 shadow-sm min-h-[100px]">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-emerald-500" />
            💬 Flux de Conversations
          </h1>
          <p className="text-sm text-zinc-500 mt-1">Derniers échanges inter-agents en temps réel.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 transition-colors ${isRefreshing ? 'border-emerald-500/50' : ''}`}>
            <RefreshCw className={`w-3.5 h-3.5 text-zinc-500 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Live Sync</span>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 rounded-xl border border-zinc-800 flex-1 overflow-hidden flex flex-col shadow-xl">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {mockConversations.map((msg) => (
            <div key={msg.id} className="group relative flex flex-col gap-2 max-w-[80%]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400">{msg.sender}</span>
                <Send className="w-2.5 h-2.5 text-zinc-700" />
                <span className="text-xs font-bold text-zinc-500">{msg.receiver}</span>
                <span className="text-[10px] text-zinc-600 font-mono italic">{msg.time}</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 leading-relaxed shadow-sm transition-transform group-hover:translate-x-1 duration-200">
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center gap-3 opacity-50 cursor-not-allowed">
          <div className="flex-1 bg-zinc-900 rounded-lg px-4 py-3 text-sm text-zinc-600 font-sans">
            Écrire un message en tant qu'administrateur...
          </div>
          <button className="p-3 rounded-lg bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
