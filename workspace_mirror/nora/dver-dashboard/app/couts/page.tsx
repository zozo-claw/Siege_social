"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  CartesianGrid 
} from "recharts";
import { AlertTriangle, TrendingUp, Users, Wallet } from "lucide-react";

const barData = [
  { name: "Lun", Nora: 0.8, Leo: 0.4, Zozo: 1.2, Lucas: 0.2 },
  { name: "Mar", Nora: 1.2, Leo: 0.5, Zozo: 2.1, Lucas: 0.3 },
  { name: "Mer", Nora: 0.9, Leo: 0.3, Zozo: 1.8, Lucas: 0.2 },
  { name: "Jeu", Nora: 1.3, Leo: 0.9, Zozo: 3.4, Lucas: 0.6 },
]

const pieData = [
  { name: "Nora", value: 4.20, color: "#10b981" },
  { name: "Léo", value: 2.10, color: "#3b82f6" },
  { name: "Zozo", value: 8.50, color: "#8b5cf6" },
  { name: "Lucas", value: 1.30, color: "#f59e0b" },
];

const totalCost = pieData.reduce((acc, curr) => acc + curr.value, 0).toFixed(2);
const budget = 20;
const isOverBudget = Number(totalCost) > budget;

export default function CoutsPage() {
  return (
    <div className="p-6 h-full flex flex-col gap-6">
      <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Wallet className="w-6 h-6 text-emerald-500" />
            💰 Coûts API & Consommation
          </h1>
          <p className="text-sm text-zinc-500 mt-1">Suivi financier de l'utilisation des LLMs par agent.</p>
        </div>
        
        <div className={`p-4 rounded-lg flex items-center gap-4 border ${isOverBudget ? 'bg-orange-500/10 border-orange-500/20' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isOverBudget ? 'bg-orange-500 text-black' : 'bg-emerald-500 text-black'}`}>
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase font-bold tracking-widest text-zinc-500">Total Semaine Actuelle</span>
            <span className="text-3xl font-black text-zinc-100">${totalCost}</span>
          </div>
        </div>
      </div>

      {Number(totalCost) > 15 && (
        <div className="bg-orange-950/20 border border-orange-500/30 p-4 rounded-xl flex items-center gap-4 text-orange-400">
          <AlertTriangle className="w-6 h-6 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-bold">Alerte Budget :</span> Votre consommation actuelle est proche du seuil critique de <span className="underline font-black">${budget}</span>. Pensez à optimiser les prompts.
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6 shadow-sm flex flex-col gap-4 overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Consommation Journalière ($)</h3>
          </div>
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Bar dataKey="Nora" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="Leo" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="Zozo" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6 shadow-sm flex flex-col gap-4 overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Distribution par Agent (%)</h3>
          </div>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={pieData} 
                  cx="50%" 
                  cy="50%" 
                  innerRadius={60} 
                  outerRadius={100} 
                  paddingAngle={5} 
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-3 pr-8">
              {pieData.map((agent) => (
                <div key={agent.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: agent.color }}></div>
                  <span className="text-xs text-zinc-400 font-bold w-12">{agent.name}</span>
                  <span className="text-xs text-zinc-100 font-mono">${agent.value.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-xl">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-900 border-b border-zinc-800">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Agent</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Tokens utilisés</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Coût ($)</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Coût (€)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {pieData.map((agent) => (
              <tr key={agent.name} className="hover:bg-zinc-900/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ backgroundColor: `${agent.color}20`, color: agent.color }}>
                      {agent.name.charAt(0)}
                    </div>
                    <span className="font-bold text-zinc-200">{agent.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-400 font-mono">
                  {(agent.value * 234120).toLocaleString()} tokens
                </td>
                <td className="px-6 py-4 text-sm font-bold text-zinc-200">
                  ${agent.value.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-zinc-400">
                  {(agent.value * 0.92).toFixed(2)} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
