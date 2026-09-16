"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
type Advisor = {
  name: string;
  email: string;
  pronouns: string;
  clubs: string[];
};

export const Contact = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [advisors, setAdvisors] = useState<Advisor[]>([]);

  useEffect(() => {
    if (advisors.length > 0 || !isOpen || typeof window === "undefined") {
      return;
    }

    const advisorData = [
      {
        name: atob("TWFyaWUgS2FyaW1pemFkZWg="),
        email: atob("bWFyaWUua2FyaW1pemFkZWhAdGRzYi5vbi5jYQ=="),
        pronouns: "She/Her",
        clubs: [
          "Technology Council",
          "Robotics Team",
          "Programming Club",
        ],
      },
      {
        name: atob("SGVsZW4gQ2hhbg=="),
        email: atob("aGVsZW4uY2hhbjJAdGRzYi5vbi5jYQ=="),
        pronouns: "She/Her",
        clubs: [
          "Robotics Team",
        ],
      },
    ];

    setAdvisors(advisorData);
  }, [isOpen, advisors.length]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact our Staff Advisors</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {advisors.map((advisor) => (
            <div
              key={advisor.email}
              className="rounded-xl border border-gray-700 p-5"
            >
              <div className="flex w-full flex-col text-center">
                <p className="text-2xl font-bold">
                  {advisor.name}
                  <span className="pl-2 text-xl font-bold text-gray-500">
                    ({advisor.pronouns})
                  </span>
                </p>

                <p className="text-default-500 text-xl">
                  Staff Advisor
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {advisor.clubs.map((club) => (
                  <Badge key={club}>{club}</Badge>
                ))}
              </div>

              <div className="mt-4 flex w-full flex-col text-center">
                <p className="text-xl font-bold">
                  Contact Information
                </p>

                <p className="text-xl text-white">
                  <a href={`mailto:${advisor.email}`}>
                    {advisor.email}
                  </a>
                </p>
              </div>

              <a
                href={`mailto:${advisor.email}?subject=YMCI%20Club%20-%20Inquiries`}
                className="mt-4 block w-full"
              >
                <Button color="primary" className="w-full">
                  Send Email
                </Button>
              </a>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>     
  );
}
// export const Contact = ({ children }: { children: React.ReactNode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");

//   useEffect(() => {
//     if (email || !isOpen || typeof window === "undefined") {
//       return;
//     }
//     const binEmail = "bWFyaWUua2FyaW1pemFkZWhAdGRzYi5vbi5jYQ==";
//     const binName = "TWFyaWUgS2FyaW1pemFkZWg=";
//     setEmail(atob(binEmail));
//     setName(atob(binName));
//   }, [isOpen, email]);
//   const clubs = [
//     "Technology Council",
//     "Robotics Team",
//     "Programming Club",
//   ];
//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>{children}</DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Contact our Staff Advisor</DialogTitle>
//         </DialogHeader>
//         <div className="flex w-full flex-col text-center">
//           <p className="text-2xl font-bold">
//             {name}
//             <span className="pl-2 text-xl font-bold text-gray-500">
//               (She/Her)
//             </span>
//           </p>
//           <p className="text-default-500 text-xl">Staff Advisor</p>
//         </div>
//         <div className="flex flex-wrap items-center justify-center gap-2">
//           {clubs.map((club) => (
//             <Badge key={club}>{club}</Badge>
//           ))}
//         </div>
//         <div className="flex w-full flex-col text-center">
//           <p className="text-xl font-bold">Contact Information</p>
//           <p className="text-xl text-white">
//             <a href={`mailto:${email}`}>{email}</a>
//           </p>
//         </div>
//         <a href={`mailto:${email}?subject=YMCI%20Club%20-%20Inquiries`} className="w-full">
//           <Button color="primary" className="w-full">
//             Send Email
//           </Button>
//         </a>
//       </DialogContent>
//     </Dialog>
//   );
// };
