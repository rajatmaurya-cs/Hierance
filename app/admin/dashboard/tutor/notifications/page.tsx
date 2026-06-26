import { FaBell, FaEnvelope, FaMobileAlt, FaCog, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const TutorNotificationPage = () => {
  const feed = [
    { id: 1, type: "system", title: "Platform Maintenance Complete", description: "The scheduled maintenance for the virtual classroom infrastructure has been completed successfully.", time: "10 mins ago", read: false, icon: <FaCog />, color: "text-slate-600 bg-slate-100" },
    { id: 2, type: "email", title: "Weekly Digest Delivered", description: "The 'Top Courses' weekly digest was sent to 45,200 active students with a 68% open rate.", time: "2 hours ago", read: true, icon: <FaEnvelope />, color: "text-violet-600 bg-violet-100" },
    { id: 3, type: "push", title: "New Feature Announcement", description: "Push notification about the new 'Interactive Whiteboard' feature sent to all premium tutors.", time: "Yesterday", read: true, icon: <FaMobileAlt />, color: "text-emerald-600 bg-emerald-100" },
    { id: 4, type: "alert", title: "Payment Gateway Latency", description: "We detected a slight delay in processing payouts. The issue has been resolved.", time: "Yesterday", read: true, icon: <FaExclamationCircle />, color: "text-amber-600 bg-amber-100" },
    { id: 5, type: "system", title: "New Terms of Service", description: "Automated notification sent to all users regarding the updated terms of service.", time: "Oct 24", read: true, icon: <FaCheckCircle />, color: "text-slate-600 bg-slate-100" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full animate-in fade-in duration-500">
      
      {/* Left Navigation Sidebar */}
      <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">Filter Feed</h3>
          <nav className="flex flex-col gap-1">
            <button className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg bg-white shadow-sm border border-slate-100 text-slate-800">
              <div className="flex items-center gap-3">
                <FaBell className="text-slate-400" /> All Notifications
              </div>
              <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">145</span>
            </button>
            <button className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-white hover:shadow-sm text-slate-500 transition-all">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-violet-400" /> Emails
              </div>
              <span className="text-xs text-slate-400">89</span>
            </button>
            <button className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-white hover:shadow-sm text-slate-500 transition-all">
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-emerald-400" /> Push
              </div>
              <span className="text-xs text-slate-400">42</span>
            </button>
            <button className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-white hover:shadow-sm text-slate-500 transition-all">
              <div className="flex items-center gap-3">
                <FaCog className="text-slate-400" /> System
              </div>
              <span className="text-xs text-slate-400">14</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Feed Area */}
      <div className="flex-1 flex flex-col gap-4">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
          <h2 className="font-semibold text-slate-800 flex items-center gap-2">
            <FaBell className="text-violet-500" /> Activity Feed
          </h2>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Mark all as read</button>
            <div className="w-px h-4 bg-slate-200"></div>
            <button className="text-sm font-medium bg-violet-50 text-violet-600 px-4 py-1.5 rounded-lg hover:bg-violet-100 transition-colors">
              New Broadcast
            </button>
          </div>
        </div>

        {/* Feed List */}
        <div className="flex flex-col gap-3">
          {feed.map((item) => (
            <div 
              key={item.id} 
              className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 
                ${item.read ? 'bg-white border-slate-100 shadow-sm' : 'bg-violet-50/30 border-violet-100 shadow-sm'}`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h4 className={`text-sm font-semibold truncate ${item.read ? 'text-slate-700' : 'text-slate-900'}`}>
                    {item.title}
                  </h4>
                  <span className="text-xs font-medium text-slate-400 flex-shrink-0">{item.time}</span>
                </div>
                <p className={`text-sm leading-relaxed ${item.read ? 'text-slate-500' : 'text-slate-600'}`}>
                  {item.description}
                </p>
                
                {/* Optional Action Area (visible on hover) */}
                <div className="mt-3 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-xs font-medium text-violet-500 hover:text-violet-700">View Details</button>
                  {item.type === 'email' && (
                    <button className="text-xs font-medium text-slate-400 hover:text-slate-600">View Analytics</button>
                  )}
                </div>
              </div>
              {!item.read && (
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full py-3 mt-2 bg-white border border-slate-100 text-slate-500 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
          Load Older Notifications
        </button>

      </div>
    </div>
  );
};

export default TutorNotificationPage;
