export const YoutubeVideo = ({ id, vertical = false }: { id: string, vertical?: boolean }) => {
  return (
    <div className={`relative ${vertical ? 'w-[360px]' : 'w-[640px]'} max-w-full ${vertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
      <iframe 
        src={`https://www.youtube.com/embed/${id}`}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
