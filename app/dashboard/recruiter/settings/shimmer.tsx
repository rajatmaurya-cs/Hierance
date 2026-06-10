import AccountActions from "./components/AccountActions";
import AccountSecurity from "./components/AccountSecurity";
import BillingSubscription from "./components/BillingSubscription";
import Notifications from "./components/Notifications";
import ProfileCompany from "./components/ProfileCompany";
import TeamAccessManagement from "./components/TeamAccessManagement";

const page = () => {
  return (
    <div>
      <ProfileCompany />
      <TeamAccessManagement />
      <AccountSecurity />
      <BillingSubscription />
      <Notifications />
      <AccountActions />
    </div>
  );
};

export default page;
