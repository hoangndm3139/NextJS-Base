import Typography, { TypographyVariant } from "@/components/atoms/typography";
interface Club {
  name: string;
  league: string;
}

interface ClubResultProps {
  clubs: Club[];
}

export default function ClubResult({ clubs }: ClubResultProps) {
  return (
    <div className="mt-4 w-full rounded px-4">
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3"
      >
        Club
      </Typography>
      <div className="mt-2">
        {clubs.map((club, index) => (
          <Typography
            key={index}
            variant={TypographyVariant.BODY_1}
            className="text-bw-gray-3 w-full overflow-hidden py-2 text-ellipsis whitespace-nowrap hover:text-white"
          >
            {club.name}
            <span className="ml-1">{`(${club.league})`}</span>
          </Typography>
        ))}
      </div>
    </div>
  );
}
