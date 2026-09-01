function SkillCard({ skill }) {
  return (
    <div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">

      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-lg font-semibold">
            {skill.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {skill.category}
          </p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-400">
          {skill.level}
        </span>

      </div>

    </div>
  );
}

export default SkillCard;