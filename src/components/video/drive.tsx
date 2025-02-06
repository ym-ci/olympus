export const DriveVideo = ({ url, vertical = false }: { url: string, vertical?: boolean }) => {
  return (
    <div className={`relative ${vertical ? 'w-[360px]' : 'w-[640px]'} max-w-full ${vertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
      <iframe
        src={url}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay"
      ></iframe>
    </div>
  )
}
