import React, { useState } from 'react';
import Terminal from './Terminal';


interface TerminalItem {
  id: string;
  title: string;
  logo?: string;
  objectName: string;
  data: Record<string, string>;
  fileName: string;
}

interface StackedTerminalsProps {
  terminals: TerminalItem[];
}

const StackedTerminals: React.FC<StackedTerminalsProps> = ({ terminals }) => {
  const [activeTerminals, setActiveTerminals] = useState<Set<string>>(new Set());

  const toggleTerminal = (id: string) => {
    setActiveTerminals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="stacked-terminals-container">
      {terminals.map((terminal) => (
        <div 
          key={terminal.id} 
          className={`stacked-terminal-item ${activeTerminals.has(terminal.id) ? 'active' : ''}`}
        >
          {/* Header */}
          <div 
            className="stacked-terminal-header"
            onClick={() => toggleTerminal(terminal.id)}
          >
            <div className="stacked-terminal-dots">
              <div className="stacked-dot stacked-dot-red"></div>
              <div className="stacked-dot stacked-dot-yellow"></div>
              <div className="stacked-dot stacked-dot-green"></div>
            </div>
            
            {terminal.logo && (
              <img 
                src={terminal.logo} 
                alt={terminal.title} 
                className="stacked-terminal-logo"
              />
            )}
            
            <span className="stacked-terminal-title">{terminal.title}</span>
          </div>

          {/* Content */}
          {activeTerminals.has(terminal.id) && (
            <div className="stacked-terminal-content">
              <Terminal
                objectName={terminal.objectName}
                data={terminal.data}
                fileName={terminal.fileName}
                typingSpeed={50}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StackedTerminals;