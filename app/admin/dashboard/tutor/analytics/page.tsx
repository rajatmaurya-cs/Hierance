import { FaChartBar, FaUserGraduate, FaBookOpen, FaRegClock, FaStar, FaTrophy } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TutorAnalyticsPage = () => {
  const dataPoints = [
    { label: "Avg Course Completion Rate", value: "72%", trend: "+4%", icon: <FaChartBar />, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Total Active Learners", value: "8,430", trend: "+120", icon: <FaUserGraduate />, color: "text-zinc-600", bg: "bg-zinc-50" },
    { label: "Avg Session Duration", value: "48m", trend: "-2m", icon: <FaRegClock />, color: "text-slate-600", bg: "bg-slate-50" },
  ];

  const topTutors = [
    { rank: 1, name: "Dr. Emily Smith", subject: "Biology", rating: 4.9, students: 1240 },
    { rank: 2, name: "James Wilson", subject: "History", rating: 4.8, students: 980 },
    { rank: 3, name: "Lisa Wong", subject: "Chemistry", rating: 4.8, students: 850 },
    { rank: 4, name: "David Miller", subject: "Economics", rating: 4.7, students: 620 },
  ];

  const chartData = [
    { day: "Mon", enrollments: 120 },
    { day: "Tue", enrollments: 180 },
    { day: "Wed", enrollments: 150 },
    { day: "Thu", enrollments: 210 },
    { day: "Fri", enrollments: 280 },
    { day: "Sat", enrollments: 310 },
    { day: "Sun", enrollments: 250 },
  ];

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500">
      
      {/* Top Wide Chart Area */}
      <div className="w-full bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm flex flex-col h-96">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-800">Enrollment Trends</h3>
            <p className="text-sm text-zinc-500">Course enrollments over the last 7 days</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
            <span className="text-xs font-medium text-zinc-500">New Enrollments</span>
          </div>
        </div>
        
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#a1a1aa', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a1a1aa', fontSize: 12 }} />
              <Tooltip 
                cursor={{ fill: '#f4f4f5' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="enrollments" fill="#818cf8" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Middle Data Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dataPoints.map((point, i) => (
          <div key={i} className="bg-white border border-zinc-100 rounded-xl p-6 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-500">{point.label}</p>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-3xl font-semibold text-zinc-800">{point.value}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${point.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {point.trend}
                </span>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${point.bg} ${point.color}`}>
              {point.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Table */}
      <div className="bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-zinc-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaTrophy className="text-indigo-400" />
            <h3 className="font-semibold text-zinc-800">Top Performing Tutors</h3>
          </div>
          <button className="text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors">View All Report</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 text-xs uppercase tracking-wider text-zinc-400 border-b border-zinc-50">
                <th className="px-6 py-4 font-medium">Rank</th>
                <th className="px-6 py-4 font-medium">Tutor Name</th>
                <th className="px-6 py-4 font-medium">Subject Focus</th>
                <th className="px-6 py-4 font-medium">Avg Rating</th>
                <th className="px-6 py-4 font-medium">Total Students</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {topTutors.map((tutor) => (
                <tr key={tutor.rank} className="hover:bg-zinc-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${tutor.rank === 1 ? 'bg-amber-100 text-amber-600' : tutor.rank === 2 ? 'bg-slate-200 text-slate-600' : tutor.rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-zinc-100 text-zinc-500'}`}>
                      {tutor.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-zinc-700">{tutor.name}</td>
                  <td className="px-6 py-4 text-zinc-500 text-sm">
                    <span className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md text-xs font-medium">
                      {tutor.subject}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-700">
                      <FaStar className="text-amber-400" size={12} />
                      {tutor.rating}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-600 font-medium">{tutor.students.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default TutorAnalyticsPage;
