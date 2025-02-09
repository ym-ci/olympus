export const DriveVideo = ({
  url,
  vertical = false,
}: {
  url: string;
  vertical?: boolean;
}) => {
  return (
    <div
      className={`relative ${vertical ? "w-[360px]" : "w-[640px]"} max-w-full ${vertical ? "aspect-[9/16]" : "aspect-video"}`}
    >
      <iframe
        src={url}
        className="absolute left-0 top-0 h-full w-full"
        allow="autoplay"
      ></iframe>
    </div>
  );
};
