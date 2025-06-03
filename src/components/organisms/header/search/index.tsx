import BoxSearch from "@/components/molecules/header/search/box";
import NoData from "@/components/molecules/header/search/box/noData";
import ClubResult from "@/components/molecules/header/search/club";
import LeagueResult from "@/components/molecules/header/search/league";
import PlayerResult from "@/components/molecules/header/search/player";

export default function HeaderSearch() {
  const result = {
    players: [
      { name: "Cristiano Ronaldo", team: "Al Nassr", avatarSrc: "/icons/icon_player/ic_player_avatar.svg" },
      { name: "Lionel Messi", team: "Inter Miami", avatarSrc: "/icons/icon_player/ic_player_avatar.svg" },
      { name: "Cristiano Ronaldo", team: "Al Nassr", avatarSrc: "/icons/icon_player/ic_player_avatar.svg" },
      { name: "Lionel Messi", team: "Inter Miami", avatarSrc: "/icons/icon_player/ic_player_avatar.svg" },
    ],
    clubs: [
      { name: "Manchester United", league: "EPL" },
      { name: "Real Madrid", league: "EPL" },
      { name: "Manchester United", league: "EPL" },
    ],
    leagues: [
      { name: "La Liga", nation: "spain" },
      { name: "Premier League", nation: "england" },
      { name: "La Liga", nation: "spain" },
    ],
  };
  return (
    <div className="bg-fblack-bg2 w-61 rounded-lg px-3 pt-4">
      <BoxSearch />
      {Boolean(result.players.length) && <PlayerResult players={result.players} />}
      {Boolean(result.clubs.length) && <ClubResult clubs={result.clubs} />}
      {Boolean(result.leagues.length) && <LeagueResult leagues={result.leagues} />}
      {Boolean(result.leagues.length || result.players.length || result.players.length) || <NoData value="MOFDSEw" />}
    </div>
  );
}
