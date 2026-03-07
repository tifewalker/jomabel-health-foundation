import React, { useState, useEffect } from 'react';

const TextToSpeech = () => {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported('speechSynthesis' in window);
    // Stop speech when user navigates away
    return () => window.speechSynthesis.cancel();
  }, []);

  const getPageText = () => {
    // Grabs all visible text, skips nav/footer
    const main = document.querySelector('main') || document.body;
    return main.innerText || '';
  };

  const handlePlay = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(getPageText());
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.lang = 'en-US';
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  if (!supported) return null;

  return (
    <button onClick={handlePlay} title={speaking ? 'Stop reading' : 'Read page aloud'}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        backgroundColor: speaking ? '#1e3a8a' : '#eff6ff',
        color: speaking ? '#ffffff' : '#1e3a8a',
        border: '1px solid #dbeafe',
        borderRadius: '999px', padding: '6px 14px',
        fontSize: '12px', fontWeight: '600', cursor: 'pointer',
        fontFamily: 'inherit', transition: 'all 0.2s',
      }}>
      {speaking ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
          Stop
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3l14 9-14 9V3z"/>
          </svg>
          Listen
        </>
      )}
    </button>
  );
};

export default TextToSpeech;