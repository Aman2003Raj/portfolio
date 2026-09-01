import SkillCard from "./SkillCard";

function Skills() {

  const skills = [
    {
      name: "JavaScript",
      category: "Language",
      level: "Advanced",
    },
    {
      name: "React",
      category: "Frontend",
      level: "Intermediate",
    },
    {
      name: "HTML",
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "CSS",
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "Node.js",
      category: "Backend",
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      category: "Database",
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-2">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;