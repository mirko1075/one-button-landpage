import React from 'react';

function OneTap() {
  return (
    <section className="one-tap">
      <div className="section-container">
        <h2 className="section-title">One-Tap Experience</h2>
        <div className="one-tap-flow">
          <div className="flow-box">Press.</div>
          <div className="flow-arrow">
            <span className="connector" />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M4 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flow-box">Listen.</div>
          <div className="flow-arrow">
            <span className="connector" />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M4 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flow-box">Transcribe.</div>
          <div className="flow-arrow">
            <span className="connector" />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M4 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flow-box">Summaries.</div>
          <div className="flow-arrow">
            <span className="connector" />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M4 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flow-box">Action items.</div>
        </div>
        <p className="one-tap-subtitle">All from one button.</p>
      </div>
    </section>
  );
}

export default OneTap;
