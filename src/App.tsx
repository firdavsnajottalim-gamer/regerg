/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hash, ArrowRight } from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  role?: string;
  children?: FamilyMember[];
}

const branchA: FamilyMember = {
  id: '1',
  name: 'Tursinhon',
  role: 'ASOSIY AVLOD',
  children: [
    {
      id: '2',
      name: 'Asalxon',
      role: 'ONA',
      children: [
        { id: '3', name: 'Husnidin', role: "O'G'IL" },
        { id: '4', name: 'Abdullo', role: "O'G'IL" }
      ]
    },
    {
      id: '5',
      name: 'Axatxon',
      role: "O'G'IL",
      children: [
        { id: '6', name: 'Yuldiz', role: "QIZ" },
        { id: '7', name: 'Akmalxon', role: "NABIRA" }
      ]
    },
    {
      id: '8',
      name: 'Robiya',
      role: "NABIRA",
      children: [
        { id: '9', name: 'Muxamad Yusuf', role: "NABIRA" }
      ]
    }
  ]
};

const branchB: FamilyMember = {
  id: '10',
  name: 'Tursinhon',
  role: 'ASOSIY AVLOD',
  children: [
    {
      id: '11',
      name: 'Letiboy',
      role: "O'G'IL",
      children: [
        { id: '12', name: 'Muqadas', role: "NABIRA" }
      ]
    },
    {
      id: '13',
      name: 'Dilfuza',
      role: "QIZ",
      children: [
        { id: '14', name: 'Sherxon', role: "NABIRA" },
        { id: '15', name: 'Dilnoza', role: "NABIRA" }
      ]
    }
  ]
};

interface TreeNodeProps {
  node: FamilyMember;
  level?: number;
  key?: string | number;
}

const TreeNode = ({ node, level = 0 }: TreeNodeProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: level * 0.05 }}
      className="flex flex-col items-center relative"
      id={`node-${node.id}`}
    >
      {level > 0 && <div className="tree-line-v" />}
      
      <div className="editorial-card group relative overflow-hidden min-w-[200px]">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass font-semibold mb-2 block opacity-70">
          {node.role || (level === 1 ? 'Farzand' : 'Avlod')}
        </span>
        <h3 className={`text-2xl font-light tracking-tight group-hover:text-brass transition-colors duration-300 ${level === 0 ? 'text-4xl italic mb-1' : ''}`}>
          {node.name}
        </h3>
        <div className="w-0 group-hover:w-full h-[1px] bg-brass/30 absolute bottom-0 left-0 transition-all duration-700" />
      </div>

      {node.children && node.children.length > 0 && (
        <>
          <div className="w-[1px] h-12 bg-brass/20" />
          <div className="flex gap-12 relative px-6">
            {node.children.length > 1 && (
              <div className="tree-line-h mx-12" />
            )}
            {node.children.map((child) => (
              <TreeNode key={child.id} node={child} level={level + 1} />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default function App() {
  const [showAlternative, setShowAlternative] = useState(false);

  return (
    <div className="min-h-screen p-8 md:p-14 selection:bg-brass/20 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="fixed top-0 right-0 w-48 h-48 border-t border-r border-brass/10 mt-8 mr-8 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-48 h-48 border-b border-l border-brass/10 mb-8 ml-8 pointer-events-none" />

      {/* Header */}
      <header className="max-w-6xl mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-ink/10 pb-10 gap-8">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.4em] text-brass font-semibold mb-4 opacity-70">Arxiv N-0421</span>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none">
            OILAVIY <span className="italic text-brass">SHAJORA</span>
          </h1>
        </div>

        <div className="flex flex-col items-end group">
          <button
            id="toggle-branch"
            onClick={() => setShowAlternative(!showAlternative)}
            className="relative w-20 h-20 rounded-full bg-ink text-canvas flex items-center justify-center text-3xl font-bold shadow-2xl transition-transform hover:scale-110 active:scale-95 duration-500 cursor-pointer overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showAlternative ? 'b' : 'a'}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="flex items-center gap-1"
              >
                {showAlternative ? '123' : <Hash className="w-8 h-8" />}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-brass opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          <span className="text-[10px] uppercase tracking-[0.2em] mt-3 opacity-40 font-semibold group-hover:text-brass transition-colors">
            {showAlternative ? 'Asosiy Shoxcha' : 'Faollashtirish (123)'}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-full overflow-x-auto pb-32 scrollbar-hide flex justify-center">
        <div className="min-w-fit px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={showAlternative ? 'alternative' : 'primary'}
              initial={{ opacity: 0, x: showAlternative ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: showAlternative ? -20 : 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <TreeNode node={showAlternative ? branchB : branchA} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 md:p-12 z-50 pointer-events-none">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-ink/10 pt-8 bg-canvas/80 backdrop-blur-sm pointer-events-auto">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-brass font-bold mb-1 opacity-60">Umumiy soni</span>
              <span className="text-xl font-light">16 Nafar</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-brass font-bold mb-1 opacity-60">Sana</span>
              <span className="text-xl font-light">2024</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-brass/80">
            <span className="italic text-lg font-light">"O'tmishsiz kelajak yo'q"</span>
            <ArrowRight className="w-5 h-5" />
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brass" />
              <span className="text-[10px] uppercase tracking-widest opacity-50">Ildiz</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 border border-brass" />
              <span className="text-[10px] uppercase tracking-widest opacity-50">Shoxcha</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
