export default function App() {
  const resume = {
    name: "Dr. Lordsfavour Anukam",
    title: "AI in Medicine & Public Health Expert | Biomedical Scientist",
    email: "lordsfavour@example.com",
    phone: "+18696639793",
    summary:
      "Innovative healthcare AI strategist combining biomedical science, public health, and leadership to build digital solutions that transform patient care and global health systems.",
    experience: [
      {
        role: "AI in Medicine Consultant",
        period: "2025 – Present",
        details:
          "Advises clinics and startups on implementing AI tools in diagnostics, patient engagement, and data automation."
      }
    ],
    education: [
      {
        degree: "B.Sc. Biomedical Science",
        school: "IUHS",
        period: "Graduated with Distinction"
      },
      {
        degree: "Master’s in Public Health & Business Administration",
        school: "AIU",
        period: "In Progress"
      }
    ]
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        color: "#222",
        padding: "40px",
        maxWidth: "800px",
        margin: "40px auto",
        borderRadius: "16px",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)"
      }}
    >
      <h1 style={{ color: "#111", fontSize: "2rem" }}>{resume.name}</h1>
      <h3 style={{ color: "#555", marginBottom: "20px" }}>{resume.title}</h3>

      <p>
        📧 {resume.email} <br />
        📞 {resume.phone}
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ borderBottom: "2px solid #111", paddingBottom: "6px" }}>
          Summary
        </h2>
        <p>{resume.summary}</p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ borderBottom: "2px solid #111", paddingBottom: "6px" }}>
          Experience
        </h2>
        {resume.experience.map((job, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            <strong>{job.role}</strong> <br />
            <em>{job.period}</em>
            <p>{job.details}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ borderBottom: "2px solid #111", paddingBottom: "6px" }}>
          Education
        </h2>
        {resume.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            <strong>{edu.degree}</strong> <br />
            <em>{edu.school}</em> — {edu.period}
          </div>
        ))}
      </section>
    </div>
  );
}
