'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ToastType = 'error' | 'success' | 'warning' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
    title?: string;
}

interface ToastContextType {
    addToast: (message: string, type?: ToastType, options?: { title?: string; duration?: number }) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
}

// Global reference for non-React contexts
let globalAddToast: ToastContextType['addToast'] | null = null;

export function showToast(message: string, type: ToastType = 'error', options?: { title?: string; duration?: number }) {
    if (globalAddToast) {
        globalAddToast(message, type, options);
    } else {
        console.warn('[Toast] Provider not mounted, falling back to console:', message);
    }
}

const toastIcons: Record<ToastType, React.ReactNode> = {
    error: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
    ),
    success: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    ),
    warning: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    info: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
    ),
};

const toastStyles: Record<ToastType, string> = {
    error: 'bg-red-950/90 border-red-500/40 text-red-100',
    success: 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100',
    warning: 'bg-amber-950/90 border-amber-500/40 text-amber-100',
    info: 'bg-blue-950/90 border-blue-500/40 text-blue-100',
};

const toastIconColors: Record<ToastType, string> = {
    error: 'text-red-400',
    success: 'text-emerald-400',
    warning: 'text-amber-400',
    info: 'text-blue-400',
};

const toastProgressColors: Record<ToastType, string> = {
    error: 'bg-red-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    info: 'bg-blue-500',
};

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
    const duration = toast.duration || 5000;

    useEffect(() => {
        const timer = setTimeout(() => onRemove(toast.id), duration);
        return () => clearTimeout(timer);
    }, [toast.id, duration, onRemove]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={`relative flex items-start gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-2xl min-w-[320px] max-w-[440px] overflow-hidden ${toastStyles[toast.type]}`}
        >
            {/* Icon */}
            <div className={`flex-shrink-0 mt-0.5 ${toastIconColors[toast.type]}`}>
                {toastIcons[toast.type]}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                {toast.title && (
                    <div className="font-semibold text-sm mb-0.5">{toast.title}</div>
                )}
                <div className="text-sm opacity-90 leading-relaxed">{toast.message}</div>
            </div>

            {/* Close button */}
            <button
                onClick={() => onRemove(toast.id)}
                className="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors opacity-60 hover:opacity-100"
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>

            {/* Progress bar */}
            <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
                className={`absolute bottom-0 left-0 h-[2px] ${toastProgressColors[toast.type]}`}
            />
        </motion.div>
    );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const addToast = useCallback((message: string, type: ToastType = 'error', options?: { title?: string; duration?: number }) => {
        const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
        const newToast: Toast = {
            id,
            message,
            type,
            title: options?.title,
            duration: options?.duration,
        };
        setToasts(prev => [...prev.slice(-4), newToast]); // Keep max 5 toasts
    }, []);

    // Set global reference
    useEffect(() => {
        globalAddToast = addToast;
        return () => { globalAddToast = null; };
    }, [addToast]);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}

            {/* Toast container - fixed top-right */}
            <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
                <AnimatePresence mode="popLayout">
                    {toasts.map(toast => (
                        <div key={toast.id} className="pointer-events-auto">
                            <ToastItem toast={toast} onRemove={removeToast} />
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}
