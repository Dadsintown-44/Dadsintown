"use client"
import { useState } from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import styles from './page.module.css'

export default function AdminLogin() {
  const [adminId, setAdminId] = useState('admin')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function submit(e) {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ adminId, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) {
      window.location.href = '/admin/dashboard'
    } else {
      const body = await res.json().catch(() => ({}))
      setError(body.error || 'Login failed')
    }
  }

  return (
    <div className={styles.shell}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <div>
              <span className={styles.eyebrow}>Restricted admin access</span>
              <h1 className={styles.title}>Dadsintown Admin</h1>
              <p className={styles.copy}>
                Review contact submissions, see reviews, and update projects or services from one panel.
              </p>
            </div>

            <div className={styles.metaRow}>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Access</span>
                <div className={styles.metaValue}>Secure JWT session</div>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>Channels</span>
                <div className={styles.metaValue}>Contacts, reviews, CMS</div>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>API</span>
                <div className={styles.metaValue}>Mobile + web supported</div>
              </div>
            </div>
          </section>

          <section className={styles.loginCard}>
            <h2 className={styles.formTitle}>Sign in</h2>
            <p className={styles.formText}>Use your admin ID and password to open the dashboard.</p>

            <form onSubmit={submit} className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="adminId">Admin ID</label>
                <input
                  id="adminId"
                  aria-label="admin id"
                  type="text"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  placeholder="admin"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input
                  id="password"
                  aria-label="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className={styles.input}
                />
              </div>

              <button type="submit" className={styles.submit}>Sign in</button>
              {error && <div className={styles.error}>{error}</div>}
            </form>

            <p className={styles.hint}>
              Default login right now: ID <strong>admin</strong>, password <strong>DeepakJain44</strong>. Change these in environment variables before production.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
