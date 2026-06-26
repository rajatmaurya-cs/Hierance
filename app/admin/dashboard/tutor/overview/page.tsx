import { IoPeople } from "react-icons/io5";
import { 
  FaChalkboardTeacher, 
  FaUserGraduate, 
  FaBookOpen, 
  FaVideo,
  FaCheckCircle
} from "react-icons/fa";

const TutorOverviewPage = () => {
  const topMetrics = [
    { label: "Total Tutors", value: "320", icon: <FaChalkboardTeacher />, color: "text-slate-600", bg: "bg-slate-100" },
    { label: "Active Students", value: "8,500", icon: <FaUserGraduate />, color: "text-stone-600", bg: "bg-stone-100" },
    { label: "Active Courses", value: "450", icon: <FaBookOpen />, color: "text-zinc-600", bg: "bg-zinc-100" },
    { label: "Live Sessions", value: "1,250", icon: <FaVideo />, color: "text-neutral-600", bg: "bg-neutral-100" },
  ];

  const recentRegistrations = [
    { name: "Alice Freeman", subject: "Mathematics", status: "Verified", time: "2h ago" },
    { name: "Robert Chen", subject: "Computer Science", status: "Pending", time: "4h ago" },
    { name: "Sarah Jenkins", subject: "Literature", status: "Verified", time: "5h ago" },
    { name: "Michael Ross", subject: "Physics", status: "Verified", time: "1d ago" },
  ];

  const onlineTutors = [
    { name: "Dr. Emily Smith", subject: "Biology", students: 12 },
    { name: "James Wilson", subject: "History", students: 8 },
    { name: "Lisa Wong", subject: "Chemistry", students: 24 },
    { name: "David Miller", subject: "Economics", students: 5 },
  ];

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500">
      
      {/* Top Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topMetrics.map((metric, i) => (
          <div key={i} className={`flex items-center gap-4 p-5 rounded-xl border border-slate-100 bg-white shadow-sm`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${metric.bg} ${metric.color}`}>
              {metric.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{metric.label}</p>
              <p className="text-2xl font-semibold text-slate-800">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Wide) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Recent Registrations */}
          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
              <h3 className="font-medium text-slate-800">Recent Tutor Registrations</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {recentRegistrations.map((tutor, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium">
                      {tutor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">{tutor.name}</p>
                      <p className="text-xs text-slate-400">{tutor.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${tutor.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      {tutor.status}
                    </span>
                    <span className="text-xs text-slate-400 w-12 text-right">{tutor.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Narrow) */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm h-full">
            <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-medium text-slate-800">Tutors Online Now</h3>
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                45 Active
              </span>
            </div>
            <div className="p-4 space-y-3">
              {onlineTutors.map((tutor, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-50 bg-slate-50/50">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{tutor.name}</p>
                    <p className="text-xs text-slate-400">{tutor.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-600">{tutor.students}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Students</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TutorOverviewPage;
