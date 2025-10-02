import React, { useState } from 'react';
import '../styles/discuss.css';

// Google Form mapping (from your pre-fill URL)
// First Name: entry.1600944023
// Last Name:  entry.1589067734
// Email:      entry.1727921108
// Wish Text:  entry.1817901624
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdmaTq2oX-v226Q2RJ2ZPE3hgdVWFU2OflCyZX4KovaKuMF0Q/formResponse';

export default function Discuss(){
  const [form, setForm] = useState({ first:'', last:'', email:'', wish:'' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function update(field, value){
    setForm(f => ({ ...f, [field]: value }));
  }

  async function submit(e){
    e.preventDefault();
    setError('');
    if(!form.email.trim() || !form.first.trim()) { setError('Please provide at least first name and a valid email.'); return; }
    try {
      const fd = new FormData();
      fd.append('entry.1600944023', form.first.trim());
      fd.append('entry.1589067734', form.last.trim());
      fd.append('entry.1727921108', form.email.trim());
      fd.append('entry.1817901624', form.wish.trim());
      // Send with no-cors so it succeeds silently (Google Forms doesn't set CORS headers)
      fetch(GOOGLE_FORM_ACTION, { method:'POST', mode:'no-cors', body: fd });
      setSent(true);
      setTimeout(()=> { setSent(false); }, 5000);
      // Optionally clear fields
      setForm({ first:'', last:'', email:'', wish:'' });
    } catch (err) {
      setError('Submission failed locally (data may not have been recorded).');
    }
  }

  return (
    <section id="discuss" className="discuss-section">
      <div className="d-container">
        <h2 className="d-heading">Have an <span className="d-accent">Awesome Project</span><br/>Idea? <span className="d-accent highlight">Let's Discuss</span></h2>
        <form className="d-form" onSubmit={submit} aria-label="Project enquiry form" noValidate>
          <div className="d-grid">
            <label className="d-field">
              <span className="d-label">First Name</span>
              <input name="entry.1600944023" type="text" value={form.first} onChange={e=> update('first', e.target.value)} placeholder="Jane" required />
            </label>
            <label className="d-field">
              <span className="d-label">Last Name</span>
              <input name="entry.1589067734" type="text" value={form.last} onChange={e=> update('last', e.target.value)} placeholder="Doe" />
            </label>
            <label className="d-field full">
              <span className="d-label">Email Address</span>
              <div className="d-input-icon-wrap">
                <span className="d-icon" aria-hidden="true"><img src="/emailaddress.png" alt="" /></span>
                <input name="entry.1727921108" type="email" value={form.email} onChange={e=> update('email', e.target.value)} placeholder="you@example.com" required />
              </div>
            </label>
            <label className="d-field full">
              <span className="d-label">What do you wish had become easier in your business?</span>
              <textarea name="entry.1817901624" value={form.wish} onChange={e=> update('wish', e.target.value)} rows={4} placeholder="Describe the bottleneck, workflow, or outcome you want improved..." />
            </label>
            <div className="d-actions full">
              <button type="submit" className="d-send-btn" disabled={sent}>{sent ? 'Sent ✓' : 'Send Inquiry'}</button>
            </div>
            {(sent || error) && (
              <div className="d-feedback full" aria-live="polite">
                {sent && !error && <span className="success-msg">Thanks! Your inquiry was sent.</span>}
                {error && <span className="error-msg">{error}</span>}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
