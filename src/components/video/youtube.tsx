export const YoutubeVideo = ({
  id,
  vertical = false,
}: {
  id: string;
  vertical?: boolean;
}) => {
  return (
    <div
      className={`relative ${vertical ? "w-[360px]" : "w-[640px]"} max-w-full ${vertical ? "aspect-[9/16]" : "aspect-video"}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="absolute left-0 top-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
