import React, { useState, useEffect } from 'react';


interface TerminalProps {}

const Terminal: React.FC<TerminalProps> = () => {
  const [displayedCode, setDisplayedCode] = useState<string>('');
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [isDark, setIsDark] = useState<boolean>(true);
  
  const codeLines: string[] = [
    '// Education Information',
    'const education = {',
    '  degree: "MASTERS DEGREE",',
    '  major: "Computer Science (Artificial Intelligence / Machine Learning Track)",',
    '  university: "University at Buffalo, SUNY",',
    '  period: "2024-2026",',
    '  status: "In Progress"',
    '};',
    '',
    'export default education;'
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev: string) => prev + codeLines[currentLine] + '\n');
        setCurrentLine((prev: number) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentLine, codeLines]);

  const highlightSyntax = (code: string): React.ReactElement[] => {
    return code.split('\n').map((line: string, i: number) => {
      // Comments
      if (line.trim().startsWith('//')) {
        return <div key={i} className={isDark ? "terminal-comment-dark" : "terminal-comment-light"}>{line}</div>;
      }
      
      // Split line into parts and apply styling
      const parts: React.ReactNode[] = [];
      let remaining = line;
      
      // Match keywords
      const keywordRegex = /\b(const|export|return|styled)\b/g;
      let lastIndex = 0;
      let match;
      
      // First pass: handle keywords
      const tempParts: Array<{text: string, type: 'keyword' | 'text'}> = [];
      while ((match = keywordRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          tempParts.push({text: line.substring(lastIndex, match.index), type: 'text'});
        }
        tempParts.push({text: match[0], type: 'keyword'});
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        tempParts.push({text: line.substring(lastIndex), type: 'text'});
      }
      
      // Render with proper spans
      return (
        <div key={i}>
          {tempParts.length === 0 ? (
            line || '\u00A0'
          ) : (
            tempParts.map((part, idx) => {
              if (part.type === 'keyword') {
                return (
                  <span key={idx} className={isDark ? 'terminal-keyword-dark' : 'terminal-keyword-light'}>
                    {part.text}
                  </span>
                );
              }
              
              // Handle strings, properties, and components in text parts
              const text = part.text;
              const stringRegex = /"[^"]*"/g;
              const propertyRegex = /(\w+):/g;
              
              if (stringRegex.test(text)) {
                return (
                  <span key={idx} className={isDark ? 'terminal-string-dark' : 'terminal-string-light'}>
                    {text}
                  </span>
                );
              } else if (propertyRegex.test(text)) {
                const propMatch = text.match(/(\w+):/);
                if (propMatch) {
                  return (
                    <span key={idx}>
                      <span className={isDark ? 'terminal-property-dark' : 'terminal-property-light'}>
                        {propMatch[1]}
                      </span>
                      {text.substring(propMatch[1].length)}
                    </span>
                  );
                }
              }
              
              return <span key={idx}>{text}</span>;
            })
          )}
        </div>
      );
    });
  };

  return (
    <div className="terminal-wrapper">
      <div className={`terminal-container ${isDark ? 'terminal-dark' : 'terminal-light'}`}>
        {/* Terminal Header */}
        <div className={`terminal-header ${isDark ? 'terminal-header-dark' : 'terminal-header-light'}`}>
          <div className="terminal-dots">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
          </div>
          <div className="terminal-title-wrapper">
            <span className={`terminal-title ${isDark ? 'terminal-title-dark' : 'terminal-title-light'}`}>MyComponent.jsx</span>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`terminal-toggle ${isDark ? 'terminal-toggle-dark' : 'terminal-toggle-light'}`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* Terminal Content */}
        <div className="terminal-content">
          <div className={`terminal-code ${isDark ? 'terminal-code-dark' : 'terminal-code-light'}`}>
            {highlightSyntax(displayedCode)}
            <span className={`terminal-cursor ${isDark ? 'terminal-cursor-dark' : 'terminal-cursor-light'}`}></span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Terminal;