import Account from "@/components/molecules/header/user/account";
import GamesParticipating from "@/components/molecules/header/user/gamesParticipating";
import UserNavigation from "@/components/molecules/header/user/navigation";

export default function UserHeader() {
  return (
    <div className="w-61">
      <Account />
      <GamesParticipating />
      <UserNavigation />
    </div>
  );
}
