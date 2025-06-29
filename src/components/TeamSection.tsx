const TeamSection = () => {
  const teamMembers = [
    {
      image: "/images/team/Azeem.png",
      name: "Abdul Azeem",
    },
    {
      image: "/images/team/Aleem.png",
      name: "Abdul Aleem",
    },
    {
      image: "/images/team/Qaseer.png",
      name: "Malik Qasir",
    },
    {
      image: "/images/team/Rehman.png",
      name: "Abdul Rehman",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-[#F3F4F6] overflow-hidden">
      {/* Decorative SVG Dots Background */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ minHeight: 400 }}
        >
          <defs>
            <pattern
              id="team-dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="2" fill="#e5e7eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-dots)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="text-primary text-xs font-bold mb-2 flex items-center justify-center tracking-wider uppercase">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Our Team
          </div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Meet Our Expert Technicians
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Our certified team combines years of experience with a passion for
            bringing your devices back to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg group hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-primary/40 to-transparent z-10" />
              </div>
              <div className="text-center px-6 py-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
