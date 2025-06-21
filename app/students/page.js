// app/students/page.js
import db from '@/lib/db'

export default async function StudentsPage() {
  const res = await db.query('SELECT * FROM students')
  const students = res.rows

  return (
    <div>
      <h2>All Students</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Course</th></tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td><a href={`/students/${s.id}`}>{s.name}</a></td>
              <td>{s.email}</td>
              <td>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
