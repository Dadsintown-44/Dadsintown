"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import styles from './page.module.css'

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [contacts, setContacts] = useState([])
  const [reviews, setReviews] = useState([])
  const [projects, setProjects] = useState([])
  const [services, setServices] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const ok = await fetch('/api/admin/checkAuth')
      if (!ok.ok) {
        window.location.href = '/admin'
        return
      }
      const [cRes, rRes, pRes, sRes] = await Promise.all([
        fetch('/api/admin/contacts'),
        fetch('/api/admin/reviews'),
        fetch('/api/admin/projects'),
        fetch('/api/admin/services'),
      ])
      const cJson = await cRes.json().catch(() => ({}))
      const rJson = await rRes.json().catch(() => ({}))
      const pJson = await pRes.json().catch(() => ({}))
      const sJson = await sRes.json().catch(() => ({}))
      if (cJson.data) setContacts(cJson.data)
      if (rJson.data) setReviews(rJson.data)
      if (pJson.data) setProjects(pJson.data)
      if (sJson.data) setServices(sJson.data)
    }
    load()
  }, [])

  async function updateItem(type, id) {
    const updates = prompt('Enter JSON updates for the item (e.g. {"title":"New"})')
    if (!updates) return
    let parsed
    try {
      parsed = JSON.parse(updates)
    } catch (e) {
      alert('Invalid JSON')
      return
    }
    const res = await fetch(`/api/admin/${type}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, updates: parsed }) })
    if (!res.ok) {
      const b = await res.json().catch(() => ({}))
      setError(b.error || 'Update failed')
      return
    }
    alert('Updated')
    window.location.reload()
  }

  const filteredContacts = contacts.filter((item) => {
    const haystack = `${item.name || ''} ${item.email || ''} ${item.business || ''} ${item.message || ''}`.toLowerCase()
    return haystack.includes(search.toLowerCase())
  })

  const filteredReviews = reviews.filter((item) => {
    const haystack = `${item.name || ''} ${item.role || ''} ${item.review || ''}`.toLowerCase()
    return haystack.includes(search.toLowerCase())
  })

  const filteredProjects = projects.filter((item) => {
    const haystack = `${item.title || item.name || ''} ${item.description || ''}`.toLowerCase()
    return haystack.includes(search.toLowerCase())
  })

  const filteredServices = services.filter((item) => {
    const haystack = `${item.title || item.name || ''} ${item.description || ''}`.toLowerCase()
    return haystack.includes(search.toLowerCase())
  })

  return (
    <div className={styles.shell}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.headerCard}>
            <div>
              <span className={styles.eyebrow}>Admin workspace</span>
              <h1 className={styles.title}>Manage content and submissions from one place</h1>
              <p className={styles.subtext}>
                Use the dashboard to review contact form entries, read reviews, and update projects or services.
              </p>
            </div>

            <div className={styles.actions}>
              <button className={styles.button} onClick={() => window.location.href = '/admin'}>Logout / Login</button>
            </div>
          </section>

          <section className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Contacts</span>
              <span className={styles.statValue}>{contacts.length}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Reviews</span>
              <span className={styles.statValue}>{reviews.length}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Projects</span>
              <span className={styles.statValue}>{projects.length}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Services</span>
              <span className={styles.statValue}>{services.length}</span>
            </div>
          </section>

          {error && <div className={styles.error}>{error}</div>}

          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <h2 className={styles.panelTitle}>Search records</h2>
                <div className={styles.badge}>Filter across all sections</div>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email, project, service..."
                className={styles.button}
                style={{ minWidth: 280 }}
              />
            </div>
          </section>

          <div className={styles.grid}>
            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Contacts</h2>
                <span className={styles.badge}>{filteredContacts.length} results</span>
              </div>
              <div className={styles.list}>
                {filteredContacts.length === 0 && <div className={styles.empty}>No contact records found.</div>}
                {filteredContacts.map((c) => (
                  <article key={c.id} className={styles.row}>
                    <div className={styles.rowTop}>
                      <div>
                        <div className={styles.rowTitle}>{c.name || 'Unnamed contact'}</div>
                        <div className={styles.rowMeta}>{c.email || 'No email'} · {c.business || 'No business'} · {c.received_at || ''}</div>
                      </div>
                    </div>
                    <div className={styles.rowText}>{c.message || 'No message'}</div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Reviews</h2>
                <span className={styles.badge}>{filteredReviews.length} results</span>
              </div>
              <div className={styles.list}>
                {filteredReviews.length === 0 && <div className={styles.empty}>No review records found.</div>}
                {filteredReviews.map((r) => (
                  <article key={r.id} className={styles.row}>
                    <div className={styles.rowTop}>
                      <div>
                        <div className={styles.rowTitle}>{r.name || 'Anonymous reviewer'}</div>
                        <div className={styles.rowMeta}>Rating: {r.rating ?? '—'} · {r.role || 'No role'} · {r.received_at || ''}</div>
                      </div>
                    </div>
                    <div className={styles.rowText}>{r.review || 'No review text'}</div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Projects</h2>
                <span className={styles.badge}>{filteredProjects.length} results</span>
              </div>
              <div className={styles.list}>
                {filteredProjects.length === 0 && <div className={styles.empty}>No project records found.</div>}
                {filteredProjects.map((p) => (
                  <article key={p.id} className={styles.row}>
                    <div className={styles.rowTop}>
                      <div>
                        <div className={styles.rowTitle}>{p.title || p.name || 'Untitled project'}</div>
                        <div className={styles.rowMeta}>{p.slug || 'no-slug'}</div>
                      </div>
                      <button className={styles.buttonDark} onClick={() => updateItem('projects', p.id)}>Edit</button>
                    </div>
                    <div className={styles.rowText}>{p.description || 'No description'}</div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Services</h2>
                <span className={styles.badge}>{filteredServices.length} results</span>
              </div>
              <div className={styles.list}>
                {filteredServices.length === 0 && <div className={styles.empty}>No service records found.</div>}
                {filteredServices.map((s) => (
                  <article key={s.id} className={styles.row}>
                    <div className={styles.rowTop}>
                      <div>
                        <div className={styles.rowTitle}>{s.title || s.name || 'Untitled service'}</div>
                        <div className={styles.rowMeta}>{s.slug || 'no-slug'}</div>
                      </div>
                      <button className={styles.buttonDark} onClick={() => updateItem('services', s.id)}>Edit</button>
                    </div>
                    <div className={styles.rowText}>{s.description || 'No description'}</div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
