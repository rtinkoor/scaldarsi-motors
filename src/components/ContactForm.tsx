import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(201,169,110,0.25)',
  color: '#fff',
  padding: '14px 18px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Cinzel', serif",
  fontSize: '10px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.5)',
  display: 'block',
  marginBottom: '8px',
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Emperor Collection',
    message: '',
  });

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) {
      setError('Please complete all required fields.');
      return;
    }
    setState('submitting');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (data.success) {
        setState('success');
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err: unknown) {
      setState('error');
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    }
  };

  if (state === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '16px' }}>
          Inquiry Received
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
          A Scaldarsi representative will be in contact shortly.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

      <div>
        <label style={labelStyle}>Name *</label>
        <input
          type="text"
          value={fields.name}
          onChange={e => set('name', e.target.value)}
          placeholder="Your name"
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = '#C9A96E')}
          onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.25)')}
        />
      </div>

      <div>
        <label style={labelStyle}>Email *</label>
        <input
          type="email"
          value={fields.email}
          onChange={e => set('email', e.target.value)}
          placeholder="your@email.com"
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = '#C9A96E')}
          onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.25)')}
        />
      </div>

      <div>
        <label style={labelStyle}>Phone</label>
        <input
          type="tel"
          value={fields.phone}
          onChange={e => set('phone', e.target.value)}
          placeholder="+1 000 000 0000"
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = '#C9A96E')}
          onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.25)')}
        />
      </div>

      <div>
        <label style={labelStyle}>Interest</label>
        <select
          value={fields.interest}
          onChange={e => set('interest', e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={e => (e.target.style.borderColor = '#C9A96E')}
          onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.25)')}
        >
          <option>Emperor Collection</option>
          <option>Yachts</option>
          <option>Private Jets</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div style={{ gridColumn: '1 / -1' }}>
        <label style={labelStyle}>Message *</label>
        <textarea
          value={fields.message}
          onChange={e => set('message', e.target.value)}
          placeholder="Tell us about your inquiry..."
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
          onFocus={e => (e.target.style.borderColor = '#C9A96E')}
          onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.25)')}
        />
      </div>

      {error && (
        <div style={{ gridColumn: '1 / -1', color: '#ff6b6b', fontFamily: "'DM Sans', sans-serif", fontSize: '13px' }}>
          {error}
        </div>
      )}

      <div style={{ gridColumn: '1 / -1' }}>
        <button
          onClick={handleSubmit}
          disabled={state === 'submitting'}
          className="btn-gold"
          style={{ opacity: state === 'submitting' ? 0.6 : 1, cursor: state === 'submitting' ? 'not-allowed' : 'pointer' }}
        >
          {state === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
        </button>
      </div>

    </div>
  );
}
