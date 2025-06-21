import db from '@/lib/db'

export default async function StudentDetail({ params }) {
  const res = await db.query('SELECT * FROM students WHERE id = $1', [params.id])
  const student = res.rows[0]

  if (!student) return <p>Student not found</p>

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
    </div>
  )
}
