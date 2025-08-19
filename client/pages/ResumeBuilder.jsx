import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [form, setForm] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    summary: '',
    skills: [],
    experience: [{ company: '', role: '', period: '', bullets: [''] }],
    education: [{ school: '', degree: '', period: '', details: '' }]
  });
  const [skillInput, setSkillInput] = useState('');
  

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));
  const updateNested = (field, index, key, value) => {
    setForm(prev => {
      const copy = [...prev[field]];
      copy[index] = { ...copy[index], [key]: value };
      return { ...prev, [field]: copy };
    });
  };

  const addSkill = () => {
    const s = skillInput.trim();
    if (!s) return;
    if (form.skills.includes(s)) return setSkillInput('');
    update('skills', [...form.skills, s]);
    setSkillInput('');
  };
  const removeSkill = (i) => update('skills', form.skills.filter((_, idx) => idx !== i));

  const addExperience = () => update('experience', [...form.experience, { company: '', role: '', period: '', bullets: [''] }]);
  const removeExperience = (i) => update('experience', form.experience.filter((_, idx) => idx !== i));
  const addBullet = (i) => update('experience', form.experience.map((e, idx) => idx === i ? { ...e, bullets: [...e.bullets, ''] } : e));
  const removeBullet = (i, bi) => update('experience', form.experience.map((e, idx) => idx === i ? { ...e, bullets: e.bullets.filter((_, bidx) => bidx !== bi) } : e));

  const addEducation = () => update('education', [...form.education, { school: '', degree: '', period: '', details: '' }]);
  const removeEducation = (i) => update('education', form.education.filter((_, idx) => idx !== i));

  const resetAll = () => setForm({
    name: '', title: '', email: '', phone: '', location: '', website: '', summary: '',
    skills: [], experience: [{ company: '', role: '', period: '', bullets: [''] }],
    education: [{ school: '', degree: '', period: '', details: '' }]
  });

  const saveLocal = () => {
    try {
      localStorage.setItem('resume_draft', JSON.stringify(form));
      alert('Draft saved locally');
    } catch (e) { console.error(e); }
  };

  const printPDF = () => window.print();

  return (
    <div className="rb-page">
      {/* local, component-scoped styles (single-file change) */}
      <style>{`
        :root {
          --rb-bg: #0f172a;      /* deep navy */
          --rb-card: #1e293b;    /* slate card */
          --rb-border: #334155;  /* slate border */
          --rb-text: #e5e7eb;    /* light text */
          --rb-sub: #cbd5e1;     /* sub text */
          --rb-gold: #facc15;    /* gold accent */
        }
        html, body, #root { height: 100%; margin: 0; }
        body { background: var(--rb-bg); color: var(--rb-text); font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        .rb-page { max-width: 1280px; margin: 0 auto; padding: 20px; }
        .rb-header { text-align: center; margin-bottom: 16px; }
        .rb-title { color: var(--rb-gold); margin: 0 0 6px 0; font-size: 28px; font-weight: 800; }
        .rb-sub { color: var(--rb-sub); margin: 0; }

        .rb-columns { display: flex; gap: 24px; }
        .rb-left { flex: 1 1 58%; min-width: 0; }
        .rb-right { flex: 1 1 42%; min-width: 320px; }
        .rb-sticky { position: sticky; top: 20px; }

        .rb-card { background: var(--rb-card); border: 1px solid var(--rb-border); border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,.25); }
        .rb-section { margin-bottom: 18px; }
        .rb-section h3 { margin: 0 0 10px; padding-bottom: 8px; border-bottom: 1px solid var(--rb-border); color: var(--rb-gold); font-size: 16px; }
        .rb-grid2 { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 800px) { .rb-grid2 { grid-template-columns: 1fr 1fr; } }

        .rb-label { display: block; margin-bottom: 6px; color: var(--rb-sub); font-size: 14px; }
        .rb-input, .rb-textarea { width: 100%; background: #334155; color: var(--rb-text); border: 1px solid var(--rb-border); border-radius: 8px; padding: 10px 12px; font-size: 14px; }
        .rb-textarea { min-height: 90px; resize: vertical; }
        .rb-input::placeholder, .rb-textarea::placeholder { color: #94a3b8; }

        .rb-row { display: flex; gap: 10px; }
        .rb-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .rb-tag { background: #475569; color: var(--rb-text); padding: 4px 10px; border-radius: 999px; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; }
        .rb-x { background: transparent; border: 0; color: #f87171; font-weight: 700; cursor: pointer; }

        .rb-item { background: #0b1220; border: 1px solid var(--rb-border); border-radius: 8px; padding: 12px; margin-bottom: 10px; }
        .rb-actions { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
        .rb-btn { border: 0; border-radius: 8px; padding: 10px 14px; font-weight: 600; cursor: pointer; }
        .rb-green { background: #059669; color: #fff; }
        .rb-blue { background: #2563eb; color: #fff; }
        .rb-amber { background: #d97706; color: #fff; }
        .rb-gray { background: #475569; color: #fff; }
        .rb-red { background: #dc2626; color: #fff; }

        /* Preview panel */
        .rb-preview-title { color: var(--rb-gold); margin: 0 0 12px; font-size: 18px; font-weight: 700; }
        .rb-preview { background: #0b1220; border: 1px solid var(--rb-border); border-radius: 10px; padding: 20px; }
        .rb-p-head { text-align: center; margin-bottom: 14px; border-bottom: 2px solid var(--rb-gold); padding-bottom: 10px; }
        .rb-p-name { color: #fff; font-size: 24px; font-weight: 800; margin: 0 0 6px; }
        .rb-p-title { color: var(--rb-sub); margin: 0 0 8px; }
        .rb-p-contact { color: #9ca3af; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; font-size: 13px; }
        .rb-p-sec { margin-top: 14px; }
        .rb-p-sec h4 { color: var(--rb-gold); margin: 0 0 8px; border-bottom: 1px solid var(--rb-border); padding-bottom: 6px; font-size: 14px; }
        .rb-p-item { margin-bottom: 10px; }
        .rb-p-item h5 { margin: 0 0 4px; color: #e5e7eb; font-size: 14px; }
        .rb-p-item p { margin: 0 0 4px; color: #cbd5e1; font-size: 13px; }
        .rb-p-list { margin: 6px 0 0 18px; color: #cbd5e1; }

        /* Print: only preview */
        @media print {
          @page { size: A4; margin: 12mm; }
          body { background: #0b1220 !important; }
          .rb-header, .rb-left, .rb-actions { display: none !important; }
          .rb-right, .rb-sticky, .rb-card { box-shadow: none !important; border: 0 !important; background: transparent !important; padding: 0 !important; }
          .rb-preview { border: 0 !important; background: #0b1220 !important; }
        }

        @media (max-width: 899px) {
          .rb-columns { flex-direction: column; }
          .rb-right { min-width: 0; }
          .rb-sticky { position: static; top: auto; }
          .rb-actions .rb-btn { width: 100%; }
        }
      `}</style>

      <header className="rb-header">
        <h1 className="rb-title">Resume Builder</h1>
        <p className="rb-sub">Fill the form and preview your resume instantly. Export matches this preview.</p>
      </header>

      <div className="rb-columns">
        {/* LEFT: FORM */}
        <section className="rb-left">
          <div className="rb-card">
            {/* Personal */}
            <div className="rb-section">
              <h3>Personal Information</h3>
              <div className="rb-grid2">
                <div>
                  <label className="rb-label">Full Name</label>
                  <input className="rb-input" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="rb-label">Title</label>
                  <input className="rb-input" value={form.title} onChange={(e) => update('title', e.target.value)} placeholder="e.g., Software Engineer" />
                </div>
                <div>
                  <label className="rb-label">Email</label>
                  <input className="rb-input" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="rb-label">Phone</label>
                  <input className="rb-input" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="rb-label">Location</label>
                  <input className="rb-input" value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="City, Country" />
                </div>
                <div>
                  <label className="rb-label">Website</label>
                  <input className="rb-input" value={form.website} onChange={(e) => update('website', e.target.value)} placeholder="yourwebsite.com" />
                </div>
              </div>
              <div>
                <label className="rb-label">Summary</label>
                <textarea className="rb-textarea" value={form.summary} onChange={(e) => update('summary', e.target.value)} placeholder="Brief profile and career goals" />
              </div>
            </div>

            {/* Skills */}
            <div className="rb-section">
              <h3>Skills</h3>
              <div className="rb-row">
                <input className="rb-input" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? (e.preventDefault(), addSkill()) : null} placeholder="Add a skill and press Enter" />
                <button className="rb-btn rb-blue" onClick={addSkill}>Add</button>
              </div>
              <div className="rb-tags" style={{ marginTop: 8 }}>
                {form.skills.map((s, i) => (
                  <span key={`${s}-${i}`} className="rb-tag">{s}<button className="rb-x" onClick={() => removeSkill(i)}>×</button></span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="rb-section">
              <h3>Experience</h3>
              {form.experience.map((exp, i) => (
                <div key={i} className="rb-item">
                  <div className="rb-grid2">
                    <div>
                      <label className="rb-label">Company</label>
                      <input className="rb-input" value={exp.company} onChange={(e) => updateNested('experience', i, 'company', e.target.value)} placeholder="Company" />
                    </div>
                    <div>
                      <label className="rb-label">Role</label>
                      <input className="rb-input" value={exp.role} onChange={(e) => updateNested('experience', i, 'role', e.target.value)} placeholder="Role" />
                    </div>
                    <div>
                      <label className="rb-label">Period</label>
                      <input className="rb-input" value={exp.period} onChange={(e) => updateNested('experience', i, 'period', e.target.value)} placeholder="e.g., 2022 - Present" />
                    </div>
                  </div>
                  <div>
                    <label className="rb-label">Highlights</label>
                    {exp.bullets.map((b, bi) => (
                      <div key={bi} className="rb-row" style={{ marginBottom: 8 }}>
                        <input className="rb-input" value={b} onChange={(e) => {
                          const nv = [...form.experience];
                          nv[i] = { ...nv[i], bullets: nv[i].bullets.map((x, xi) => xi === bi ? e.target.value : x) };
                          update('experience', nv);
                        }} placeholder="Achievement or responsibility" />
                        <button className="rb-btn rb-red" onClick={() => removeBullet(i, bi)}>×</button>
                      </div>
                    ))}
                    <button className="rb-btn rb-gray" onClick={() => addBullet(i)}>+ Add Highlight</button>
                  </div>
                  <div className="rb-actions">
                    <button className="rb-btn rb-red" onClick={() => removeExperience(i)}>Remove Experience</button>
                  </div>
                </div>
              ))}
              <button className="rb-btn rb-blue" onClick={addExperience}>+ Add Experience</button>
            </div>

            {/* Education */}
            <div className="rb-section">
              <h3>Education</h3>
              {form.education.map((ed, i) => (
                <div key={i} className="rb-item">
                  <div className="rb-grid2">
                    <div>
                      <label className="rb-label">School</label>
                      <input className="rb-input" value={ed.school} onChange={(e) => updateNested('education', i, 'school', e.target.value)} placeholder="School / University" />
                    </div>
                    <div>
                      <label className="rb-label">Degree</label>
                      <input className="rb-input" value={ed.degree} onChange={(e) => updateNested('education', i, 'degree', e.target.value)} placeholder="Degree" />
                    </div>
                    <div>
                      <label className="rb-label">Period</label>
                      <input className="rb-input" value={ed.period} onChange={(e) => updateNested('education', i, 'period', e.target.value)} placeholder="e.g., 2018 - 2022" />
                    </div>
                  </div>
                  <div>
                    <label className="rb-label">Details</label>
                    <input className="rb-input" value={ed.details} onChange={(e) => updateNested('education', i, 'details', e.target.value)} placeholder="GPA, honors, coursework" />
                  </div>
                  <div className="rb-actions">
                    <button className="rb-btn rb-red" onClick={() => removeEducation(i)}>Remove Education</button>
                  </div>
                </div>
              ))}
              <button className="rb-btn rb-blue" onClick={addEducation}>+ Add Education</button>
            </div>

            {/* Actions */}
            <div className="rb-actions">
              <button className="rb-btn rb-green" onClick={saveLocal}>Save Draft</button>
              <button className="rb-btn rb-amber" onClick={printPDF}>Export / Print</button>
              <button className="rb-btn rb-gray" onClick={resetAll}>Reset</button>
            </div>
          </div>
        </section>

        {/* RIGHT: PREVIEW */}
        <aside className="rb-right">
          <div className="rb-sticky">
            <div className="rb-card">
              <h3 className="rb-preview-title">Live Preview</h3>
              <div className="rb-preview">
                <div className="rb-p-head">
                  <h2 className="rb-p-name">{form.name || 'Your Name'}</h2>
                  <p className="rb-p-title">{form.title || 'Professional Title'}</p>
                  <div className="rb-p-contact">
                    {form.email && <span>{form.email}</span>}
                    {form.phone && <span>{form.phone}</span>}
                    {form.location && <span>{form.location}</span>}
                    {form.website && <span>{form.website}</span>}
                  </div>
                </div>

                {form.summary && (
                  <div className="rb-p-sec">
                    <h4>Summary</h4>
                    <p style={{ margin: 0, color: '#cbd5e1' }}>{form.summary}</p>
                  </div>
                )}

                {form.skills.length > 0 && (
                  <div className="rb-p-sec">
                    <h4>Skills</h4>
                    <p style={{ margin: 0, color: '#cbd5e1' }}>{form.skills.join(' • ')}</p>
                  </div>
                )}

                {form.experience.some(e => e.company || e.role || e.bullets.some(Boolean)) && (
                  <div className="rb-p-sec">
                    <h4>Experience</h4>
                    {form.experience.map((e, i) => (
                      (e.company || e.role || e.bullets.some(Boolean)) && (
                        <div key={i} className="rb-p-item">
                          <h5>{e.company || 'Company'}</h5>
                          <p><strong>{e.role || 'Role'}</strong>{e.period ? ` | ${e.period}` : ''}</p>
                          {e.bullets.some(Boolean) && (
                            <ul className="rb-p-list">
                              {e.bullets.map((b, bi) => b ? <li key={bi}>{b}</li> : null)}
                            </ul>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                )}
               
                {form.education.some(ed => ed.school || ed.degree) && (
                  <div className="rb-p-sec">
                    <h4>Education</h4>
                    {form.education.map((ed, i) => (
                      (ed.school || ed.degree) && (
                        <div key={i} className="rb-p-item">
                          <h5>{ed.school || 'School'}</h5>
                          <p><strong>{ed.degree || 'Degree'}</strong>{ed.period ? ` | ${ed.period}` : ''}</p>
                          {ed.details && <p>{ed.details}</p>}
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ResumeBuilder;
