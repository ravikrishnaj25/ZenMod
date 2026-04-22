import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CodeApplicationState {
  stage: 'analyzing' | 'installing' | 'applying' | 'complete' | null;
  packages?: string[];
  installedPackages?: string[];
  filesGenerated?: string[];
  message?: string;
}

interface CodeApplicationProgressProps {
  state: CodeApplicationState;
}

const stageConfig = {
  analyzing: { label: 'Analyzing code...', color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30' },
  installing: { label: 'Installing packages...', color: 'text-amber-400', bg: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-500/30' },
  applying: { label: 'Applying to sandbox...', color: 'text-orange-400', bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/30' },
  complete: { label: 'Complete!', color: 'text-emerald-400', bg: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30' },
};

export default function CodeApplicationProgress({ state }: CodeApplicationProgressProps) {
  if (!state.stage || state.stage === 'complete') return null;

  const config = stageConfig[state.stage];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`inline-block bg-gradient-to-r ${config.bg} backdrop-blur-sm rounded-[14px] p-3 mt-2 border ${config.border}`}
      >
        <div className="flex items-center gap-3">
          {/* Rotating loading indicator */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4"
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="10"
                className={config.color}
              />
            </svg>
          </motion.div>

          {/* Loading text */}
          <div className={`text-sm font-medium ${config.color}`}>
            {config.label}
          </div>

          {/* Package names if installing */}
          {state.stage === 'installing' && state.packages && state.packages.length > 0 && (
            <div className="flex gap-1 flex-wrap">
              {state.packages.map((pkg, i) => (
                <span key={i} className="text-xs px-1.5 py-0.5 bg-white/5 rounded-md text-white/70 font-mono">
                  {pkg}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}