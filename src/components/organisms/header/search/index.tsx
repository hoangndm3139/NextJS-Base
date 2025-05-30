"use client";
import { useEffect, useState } from "react";
import BoxSearch from "@/components/molecules/header/search/box";
import NoData from "@/components/molecules/header/search/box/noData";
import ClubResult from "@/components/molecules/header/search/club";
import LeagueResult from "@/components/molecules/header/search/league";
import PlayerResult from "@/components/molecules/header/search/player";

export default function HeaderSearch() {
  const [result, setResult] = useState<any>({
    players: [],
    leagues: [],
    clubs: [],
  });

  useEffect(() => {
    setResult({
      players: [],
      leagues: [],
      clubs: [],
    });
  }, []);
  return (
    <div className="bg-fblack-bg2 w-61 px-3 pt-4">
      <BoxSearch />
      {Boolean(result.players.length) && <PlayerResult players={result.players} />}
      {Boolean(result.clubs.length) && <ClubResult clubs={result.clubs} />}
      {Boolean(result.leagues.length) && <LeagueResult leagues={result.leagues} />}
      {Boolean(result.leagues.length || result.players.length || result.players.length) || <NoData value="MOFDSEw" />}
    </div>
  );
}
