import { css, cx } from "@emotion/css";
import Typography, { TypographyVariant } from "@/components/atoms/typography";
import Notification from "@/components/molecules/header/notification/item";
import NoNotification from "@/components/molecules/header/notification/noData";

export default function Notifications() {
  const notifications = [
    {
      title: "EPL OPEN",
      description: "The EPL Stars in 7days. Try card upgrades or join the game",
      time: "2m ago",
      isReaded: false,
    },
    {
      title: "Register a new game card upgrades",
      description: "EPL Game 13 registered.",
      time: "2m ago",
      isReaded: true,
    },
    {
      title: "Game 3 Start",
      description: "The EPL Stars in 7days. Try card upgrades or join the game",
      time: "30m ago",
      isReaded: true,
    },
    {
      title: "EPL OPEN",
      description: "The EPL Stars in 7days. Try card upgrades or join the game",
      time: "2m ago",
      isReaded: false,
    },
    {
      title: "Register a new game card upgrades",
      description: "EPL Game 13 registered.",
      time: "2m ago",
      isReaded: false,
    },
    {
      title: "Game 3 Start",
      description: "The EPL Stars in 7days. Try card upgrades or join the game",
      time: "30m ago",
      isReaded: false,
    },
  ];
  return (
    <div className="w-61">
      <div className="bg-fblack-th flex h-10 items-center justify-between rounded-t-lg px-4">
        <Typography
          variant={TypographyVariant.BODY_2_B}
          className="text-white"
        >
          Notifications
        </Typography>
        <Typography
          variant={TypographyVariant.BODY_2}
          className="text-bw-gray-ra"
        >
          Read All
        </Typography>
      </div>
      <div
        className={cx(
          "max-h-110 overflow-y-auto rounded-b-lg",
          css`
            -ms-overflow-style: none; /* IE và Edge */
            scrollbar-width: none; /* Firefox */
            &::-webkit-scrollbar {
              display: none; /* Chrome, Safari và Opera */
            }
          `,
        )}
      >
        {notifications.length ? (
          <>
            {notifications.map((d, index) => (
              <Notification
                description={d.description}
                time={d.time}
                isReaded={d.isReaded}
                title={d.title}
                key={d.title + d.time + index}
                index={index}
              />
            ))}
          </>
        ) : (
          <NoNotification />
        )}
      </div>
    </div>
  );
}
