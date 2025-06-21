import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Student Directory</h1>
      <Link href="/students">Go to Student List</Link>
    </main>
  )
}
