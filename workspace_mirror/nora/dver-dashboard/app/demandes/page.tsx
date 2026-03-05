"use client";

import { Check, X, Bell, User, Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

const initialDemandes = [
  { id: 1, agent: "Nora", type: "ClawHub Skill", description: "maps-integration — Ajout de la cartographie pour Dver Field App.", date: "05/03/24", status: "PENDING" },
  { id: 2, agent: "Léo", type: "Security", description: "AWS S3 Access — Permissions pour le stockage des logs infra.", date: "04/03/24", status: "PENDING" },
  { id: 3, agent: "Zozo", type: "API Webhook", description: "Slack webhook API — Notification des événements critiques.", date: "03/03/24", status: "APPROVED" },
  { id: 4, agent: "Marius", type: "Budget", description: "Virement Q2 — Financement des serveurs GPU.", date: "02/03/24", status: "REJECTED" },
];

export default function DemandesPage() {
  const [demandes, setDemandes] = useState(initialDemandes);

  const updateStatus = (id: number, newStatus: string) => {
    setDemandes(demandes.map(d => d.id === id ? { ...d, status: newStatus } : d));
  };

  return (
    <div className="p-6 h-full flex flex-col gap-6">
      <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 shadow-sm flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Bell className="w-6 h-6 text-emerald-500" />
            ✅ File d'attente des Demandes
          </h1>
          <p className="text-sm text-zinc-500 mt-1">Gérez les demandes d'accès et d'outils des agents.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-xs uppercase font-bold text-zinc-500 tracking-wider">En attente</span>
            <span className="text-2xl font-black text-emerald-400">{demandes.filter(d => d.status === 'PENDING').length}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {demandes.map((demande) => (
          <div key={demande.id} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-sm hover:border-zinc-700 transition-colors flex flex-col md:flex-row gap-6">
            <div className="flex gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold">
                {demande.agent.charAt(0)}
              </div>
              <div className="flex flex-col gap-1.5 min-w-0">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-zinc-100 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-zinc-500" />
                    {demande.agent}
                  </span>
                  <span className="text-zinc-600 font-bold">•</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    demande.status === 'PENDING' ? 'bg-orange-500/10 text-orange-500' :
                    demande.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {demande.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-tighter">
                  <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 flex items-center gap-1.5">
                    <ExternalLink className="w-3 h-3" />
                    {demande.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {demande.date}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 mt-2 bg-black/30 p-3 rounded-lg border border-zinc-900 leading-relaxed max-w-xl truncate md:whitespace-normal">
                  {demande.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:self-center">
              {demande.status === 'PENDING' ? (
                <>
                  <button 
                    onClick={() => updateStatus(demande.id, 'APPROVED')}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-bold transition-all shadow-lg shadow-emerald-500/10 border-b-2 border-emerald-700 active:translate-y-0.5"
                  >
                    <Check className="w-4 h-4" />
                    Approuver
                  </button>
                  <button 
                    onClick={() => updateStatus(demande.id, 'REJECTED')}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-bold transition-all"
                  >
                    <X className="w-4 h-4" />
                    Refuser
                  </button>
                </>
              ) : (
                <div className="text-xs text-zinc-600 font-bold uppercase tracking-widest pl-6 border-l border-zinc-800 italic">
                  Action traitée le {demande.date}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
