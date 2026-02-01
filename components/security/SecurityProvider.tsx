'use client';

// =============================================================================
// SECURITY PROVIDER
// =============================================================================

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

// =============================================================================
// TYPES
// =============================================================================

interface SecurityContextType {
  isSecurityEnabled: boolean;
  isDevToolsOpen: boolean;
  securityViolations: number;
  toggleSecurity: () => void;
}

interface SecurityProviderProps {
  children: ReactNode;
  enabled?: boolean;
}

// =============================================================================
// CONTEXT
// =============================================================================

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

// =============================================================================
// PROVIDER
// =============================================================================

export function SecurityProvider({ children, enabled = true }: SecurityProviderProps) {
  const [isSecurityEnabled, setIsSecurityEnabled] = useState(enabled);
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
  const [securityViolations, setSecurityViolations] = useState(0);

  // Context Menu Blocker
  useEffect(() => {
    if (!isSecurityEnabled) return;

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' ||
        target.closest('[data-protected]') ||
        target.closest('.protected-image')
      ) {
        e.preventDefault();
        setSecurityViolations((prev) => prev + 1);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, [isSecurityEnabled]);

  // Keyboard Shortcut Blocker
  useEffect(() => {
    if (!isSecurityEnabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;

      // Block common shortcuts
      if (
        (ctrl && key === 's') ||
        (ctrl && key === 'u') ||
        (ctrl && shift && key === 'i') ||
        (ctrl && shift && key === 'j') ||
        (ctrl && shift && key === 'c') ||
        key === 'f12'
      ) {
        e.preventDefault();
        e.stopPropagation();
        setSecurityViolations((prev) => prev + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => document.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [isSecurityEnabled]);

  // Drag Blocker
  useEffect(() => {
    if (!isSecurityEnabled) return;

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('[data-protected]')) {
        e.preventDefault();
        setSecurityViolations((prev) => prev + 1);
      }
    };

    document.addEventListener('dragstart', handleDragStart);
    return () => document.removeEventListener('dragstart', handleDragStart);
  }, [isSecurityEnabled]);

  const toggleSecurity = useCallback(() => {
    setIsSecurityEnabled((prev) => !prev);
  }, []);

  return (
    <SecurityContext.Provider
      value={{
        isSecurityEnabled,
        isDevToolsOpen,
        securityViolations,
        toggleSecurity,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
}

// =============================================================================
// HOOK
// =============================================================================

export function useSecurity(): SecurityContextType {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within SecurityProvider');
  }
  return context;
}

export default SecurityProvider;