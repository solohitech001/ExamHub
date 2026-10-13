import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ maxWidth: 560 }}>
      <h1>🎓 ExamHub CBT</h1>
      <p className="mut">Demo build: data lives in your browser (LocalStorage), there is no real login. Pick a role to preview.</p>
      <div className="grid">
        <Link href="/student"><div className="card"><b>Student</b><p className="mut">Take an exam, see results.</p></div></Link>
        <Link href="/teacher"><div className="card"><b>Teacher</b><p className="mut">Grade essays, see results.</p></div></Link>
      </div>
    </main>
  );
}
