const StatsSection = () => {
  const stats = [
    { number: "20+", label: "Glorious Years" },
    { number: "2K+", label: "Happy Customers" },
    { number: "5K+", label: "Services Completed" },
    { number: "99%", label: "Work Completion Rate" },
  ];

  return (
    <section className="bg-gray-900 py-20 px-4 border-b-4 border-orange-500">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-5xl font-extrabold text-primary mb-2 drop-shadow">
                {stat.number}
              </div>
              <div className="text-lg tracking-wide font-medium text-gray-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
