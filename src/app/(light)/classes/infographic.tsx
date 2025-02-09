import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export const Infographic = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image src={src} alt={alt} width={300} height={300} />
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle className="hidden">Why Engineering?</DialogTitle>
        </DialogHeader>
        <Image src={src} alt={alt} width={400} height={400} />
      </DialogContent>
    </Dialog>
  );
};
