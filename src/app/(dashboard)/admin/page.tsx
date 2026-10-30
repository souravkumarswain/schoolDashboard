import Announcement from "@/components/Annoucements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <>
      <div className="flex w-full min-w-0 flex-col gap-4 p-4 lg:flex-row">
        {/* LEFT */}
        <div className="flex w-full min-w-0 flex-col gap-8 lg:flex-[2]">
            {/* USER CARDS */}
            <div className="flex gap-4 justify-between flex-wrap">
                <UserCard type="student"/>
                <UserCard type="teacher"/>
                <UserCard type="parent"/>
                <UserCard type="staff"/>
            </div>
            {/* MIDDLE CHARTS */}
            <div className="flex min-w-0 flex-col gap-4 lg:flex-row">
                {/* COUNT CHART */}
                <div className="h-[450px] w-full min-w-0 lg:flex-1">
                    <CountChart/>
                </div>
                {/* ATTENDANCE CHART */}
                <div className="h-[450px] w-full min-w-0 lg:flex-[2]">
                    <AttendanceChart/>
                </div>
            </div>
                {/* BOTTOM CHART */}
                <div className="w-full h-[500px]">
                    <FinanceChart/>
                </div> 
        </div>
        {/* RIGHT */}
        <div className="flex w-full min-w-0 flex-col gap-8 lg:flex-1">
            <EventCalendar/>
            <Announcement/>
        </div>
      </div>
    </>
  );
};

export default AdminPage;