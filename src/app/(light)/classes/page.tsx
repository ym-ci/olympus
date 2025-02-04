"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";


type Class = {
  id: string;
  gradeLevel: 9 | 10 | 11 | 12;
  prereqs?: string[];
  description: React.ReactNode;
}


type Course = {
  id: string;
  classes: Class[];
  description: React.ReactNode;
  name: string;
}

const courses: Course[] = [
  {
    id: "TEJ",
    classes: [
      {
        id: "TEJ3M",
        gradeLevel: 11,
        description: (
          <div>
            <p>
              This course examines computer systems and control of external devices. Students will assemble computers and small networks by installing and configuring appropriate hardware and software. Students will develop knowledge and skills in electronics, robotics, programming, digital logic and will build systems that use computer programs and interfaces to control and/or respond to external devices.
            </p>
            <iframe 
              src="https://drive.google.com/file/d/1zXv1DxL_Yx44gTwUlyqbjuWufxIXC_Dd/preview" 
              className="w-full aspect-video"
              allow="autoplay"
            ></iframe>
          </div>
        ),
      },
      {
        id: "TEJ4M",
        gradeLevel: 12,
        prereqs: ["TEJ3M"],
        description: (
          <div>
            <p>
              This course extends students&apos; understanding of computer systems and computer interfacing with external devices. Students will learn more about fundamental concepts of digital logic, electronics, robotics, programming, and networks. Projects will include working with the Arduino microcontroller and C programming, building digital circuits to accomplish arithmetic and logic operations as well as controlling motors and using sensors.
            </p>
          </div>
        ),
      },
    ],
    name: "Computer Engineering",
    description: "Computer Engineering Technology",
  },
  {
    id: "ICS",
    name: "Computer Science",
    description: "Computer Science",
    classes: [
      {
        id: "ICD2O",
        gradeLevel: 10,
        description: (
          <div>
            <p>
              This course helps students develop cutting-edge digital technology and computer programming skills that will support them in contributing to and leading the global economic, scientific and societal innovations of tomorrow. Students will learn and apply coding concepts and skills to build hands-on projects and investigate artificial intelligence, cybersecurity, and other emerging digital technologies that connect to a wide range of fields and careers. Using critical thinking skills with a focus on digital citizenship, students will investigate the appropriate use and development of the digital technologies that they encounter every day, as well as the benefits and limitations of these technologies.
            </p>
          </div>
        )
      },
      {
        id: "ICS3U",
        gradeLevel: 11,
        description: (
          <div>
            <p>
              This course introduces students to computer science. Students will design software independently and as part of a team, using industry-standard programming tools and applying the software development life-cycle model. They will also write and use subprograms within computer programs. Students will develop creative solutions for various types of problems as their understanding of the computing environment grows. They will also explore environmental and ergonomic issues, emerging research in computer science, and global career trends in computer-related fields.
            </p>
          </div>
        )
      },
      {
        id: "ICS4U",
        gradeLevel: 12,
        prereqs: ["ICS3U"],
        description: (
          <div>
            <p>
              This course enables students to further develop knowledge and skills in computer science. Students will use modular design principles to create complex and fully documented programs, according to industry standards. Student teams will manage a large software development project, from planning through to project review. Students will also analyse algorithms for effectiveness. They will investigate ethical issues in computing and further explore environmental issues, emerging technologies, areas of research in computer science, and careers in the field.
            </p>
          </div>
        )
      }
    ]
  }
]

export default function Classes() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(courses[0]?.id ?? null);
  const [selectedClass, setSelectedClass] = useState<string | null>(courses[0]?.classes[0]?.id ?? null);

  const c = useMemo(() => courses.find((c) => c.id === selectedCourse)?.classes.find((cls) => cls.id === selectedClass), [selectedCourse, selectedClass]);
  const courseType = useMemo(() => {
    if (c?.id.endsWith("U")) { 
      return "University"
    } else if (c?.id.endsWith("O")) {
      return "Open"
    } else if (c?.id.endsWith("C")) {
      return "College"
    } else if (c?.id.endsWith("M")) {
      return "Mixed - College & University"
    }
    return c?.id.slice(c?.id.length - 1)
  }, [c]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl">
        {/* Course selection */}
        <div className="flex border-b border-gray-200">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourse(course.id)
                setSelectedClass(course.classes[0]?.id ?? null)
              }}
              className="relative flex-1 px-6 py-4 text-lg transition-colors"
            >
              {selectedCourse === course.id && (
                <motion.div
                  layoutId="coursePill"
                  className="absolute inset-0 bg-blue-100/50 rounded-t-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 ${selectedCourse === course.id ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"
                  }`}
              >
                {course.name}
              </span>
            </button>
          ))}
        </div>

        {/* Class selection */}
        {selectedCourse && (
          <div className="p-6 space-y-6">
            <div className="flex flex-wrap gap-2">
              {courses
                .find((c) => c.id === selectedCourse)
                ?.classes.map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => setSelectedClass(cls.id)}
                    className={`relative px-4 py-2 rounded-full transition-colors ${selectedClass === cls.id ? "text-purple-700 font-medium" : "text-gray-600 hover:text-purple-600"
                      }`}
                  >
                    {selectedClass === cls.id && (
                      <motion.div
                        layoutId="classPill"
                        className="absolute inset-0 bg-purple-100 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{cls.id}</span>
                  </button>
                ))}
            </div>

            {/* Details section */}
            {selectedClass && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="prose prose-blue max-w-none space-y-4">
                  <div className="flex flex-row gap-4">
                    <p><span className="font-bold">Prerequisites:</span> {c?.prereqs?.join(", ") ?? "None"}</p>
                    <p><span className="font-bold">Grade Level:</span> {c?.gradeLevel}</p>
                    <p><span className="font-bold">Course Type:</span> {courseType}</p>
                  </div>
                  {c?.description}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </Card>
    </main>
  )
}
