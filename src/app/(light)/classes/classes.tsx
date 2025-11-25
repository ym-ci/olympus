"use client"
import type React from "react"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { YoutubeVideo } from "@/components/video/youtube"
import { DriveVideo } from "@/components/video/drive"
import Image from "next/image"
import { Infographic } from "@/app/(light)/classes/infographic"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import QRCode from "react-qr-code"

type Class = {
  id: string
  gradeLevel: 9 | 10 | 11 | 12

  prereqs?: string[]
  description: React.ReactNode
  videos?: React.ReactNode | React.ReactNode[]
}

type Course = {
  id: string
  classes: Class[]
  description: React.ReactNode
  name: string
}

const courses: Course[] = [
  {
    id: "TEJ",
    classes: [
      {
        id: "TEJ3M",
        gradeLevel: 11,
        description: (
          <div className="flex flex-row gap-4">
            <Infographic src="/assets/classes/engineering/3m.png" alt="Why Engineering" />
            <div>
              <p>
                This course examines computer systems and control of external devices. Students will assemble computers
                and small networks by installing and configuring appropriate hardware and software. Students will
                develop knowledge and skills in electronics, robotics, programming, digital logic and will build systems
                that use computer programs and interfaces to control and/or respond to external devices.
              </p>
              <p className="pt-4">
                Students gain valuable hands-on experience in computer engineering, giving them a competitive edge in
                the job market and strong career prospects. This course provides an advantage for university admissions
                and future opportunities in technology, circuitry, and robotics.
              </p>
              <p className="pt-4">
                <strong>
                  Students who have successfully completed TEJ3M and TEJ4M have been accepted into top universities
                  (UofT, Waterloo, UBC, McMaster), paving the way for exciting opportunities in engineering, technology,
                  and mechatronics.
                </strong>
              </p>
            </div>
          </div>
        ),
        videos: (
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex min-w-0 flex-col gap-2">
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                {/* <DriveVideo url="https://drive.google.com/file/d/1zXv1DxL_Yx44gTwUlyqbjuWufxIXC_Dd/preview" /> */}
                <YoutubeVideo id="AvVXW7dvTBA" />
                <YoutubeVideo id="4D1mmO83ufo" />
              </div>
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 justify-items-center">
                <YoutubeVideo id="5tiF0xcV7Uw" vertical />
                <YoutubeVideo id="eKFr5Fq63_s" vertical />
                <YoutubeVideo id="Fya9y7kVNiU" vertical />
                <YoutubeVideo id="wkt8DENV97Q" vertical />
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "TEJ4M",
        gradeLevel: 12,
        prereqs: ["TEJ3M"],
        description: (
          <div className="flex flex-row gap-4">
            <Infographic src="/assets/classes/engineering/4m.png" alt="Why Engineering" />
            <div>
              <p>
                This course extends students&apos; understanding of computer systems and computer interfacing with
                external devices. Students will learn more about fundamental concepts of digital logic, electronics,
                robotics, programming, and networks. Projects will include working with the Arduino microcontroller and
                C programming, building digital circuits to accomplish arithmetic and logic operations as well as
                controlling motors and using sensors.
              </p>
              <p className="pt-4">
                Students work on advanced projects that showcase their skills in computer engineering, allowing them to
                build unique portfolios for university applications. These hands-on experiences set them apart in a
                competitive job market and provide a strong foundation for future opportunities in technology,
                circuitry, and robotics.
              </p>
              <p className="pt-4">
                <strong>
                  Students who have successfully completed TEJ3M and TEJ4M have been accepted into top universities
                  (UofT, Waterloo, UBC, McMaster), paving the way for exciting opportunities in engineering, technology,
                  and mechatronics.
                </strong>
              </p>
            </div>
          </div>
        ),
        videos: (
          <div className="flex flex-col gap-4">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 justify-items-center">
              <YoutubeVideo id="Jc7ePaNkMME" vertical />
              <YoutubeVideo id="Um6cMtcq3Dg" vertical />
              {/* <DriveVideo url="https://drive.google.com/file/d/1tkVzhGaGwj3CdHYfXDnbJCiEdu2BfE0e/preview" vertical /> */}
              {/* <DriveVideo url="https://drive.google.com/file/d/1dHphcMG8w0aej6YMtj0fx4eVqE5XN-6K/preview" vertical /> */}
            </div>
            <div className="flex flex-row gap-4 place-content-center">
              <div className="w-full md:w-auto">
                <Image
                  height={256}
                  width={256}
                  src="/assets/classes/engineering/20250202_103636.jpg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-auto">
                <Image
                  height={256}
                  width={256}
                  src="/assets/classes/engineering/IMG_20250202_124304964_HDR (1).jpg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>
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
          <div className="flex flex-row gap-4">
            <Infographic src="/assets/classes/cs/ICD2O.png" alt="Why Engineering" />
            <p>
              This course helps students develop cutting-edge digital technology and computer programming skills that
              will support them in contributing to and leading the global economic, scientific and societal innovations
              of tomorrow. Students will learn and apply coding concepts and skills to build hands-on projects and
              investigate artificial intelligence, cybersecurity, and other emerging digital technologies that connect
              to a wide range of fields and careers. Using critical thinking skills with a focus on digital citizenship,
              students will investigate the appropriate use and development of the digital technologies that they
              encounter every day, as well as the benefits and limitations of these technologies.
            </p>
          </div>
        ),
        videos: (
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <h1 className="text-2xl col-span-1 md:col-span-2 font-bold">Assignments</h1>
            <DriveVideo url="https://drive.google.com/file/d/1I3HAhfcBtVt5HGWH8jXvn9peMlBNaRhL/preview" /> {/* Snake-Christian */}
            <DriveVideo url="https://drive.google.com/file/d/1Mv1aiyo95CHxL3O8a7H-0Y8Yahpy8cNX/preview" /> {/* Snake-Lauryn */}
            <DriveVideo url="https://drive.google.com/file/d/1jafLg8jebG0GT04ywXIFMOXk0b5-V38r/preview" /> {/* Scene-Nathan */}
            <DriveVideo url="https://drive.google.com/file/d/1FKj8ty5NRwjJBOEKSEhb2XXm7yeIp3a-/preview" /> {/* Scene-Olivia */}

            <h1 className="text-2xl col-span-1 md:col-span-2 font-bold">Culminating Project Videos</h1>            
            <DriveVideo url="https://drive.google.com/file/d/1x2mXUCR-f3Y4ZLYlNfGpF1Am6Ee4MYf1/preview" /> {/* Exit the Dragon */}
            <DriveVideo url="https://drive.google.com/file/d/1fGrx-U3EMOlVHnjr_DVaDHZJk1THs-lI/preview" /> {/* Hole Escape */}
            <DriveVideo url="https://drive.google.com/file/d/1xpbdWkL9Z0kQNbuEbVAs2UoGQE5Ju-Kp/preview" /> {/* Key Blaster Demo */}
            <DriveVideo url="https://drive.google.com/file/d/1WuobnzzeB-kQKS0j7dF_z1KZge_JMFM8/preview" /> {/* Super Mario */}
            <DriveVideo url="https://drive.google.com/file/d/1HxeGHWOozp9RdqM1Nu_-FIAq6-ZSl1iY/preview" /> {/* Starship Runaway */}
            <DriveVideo url="https://drive.google.com/file/d/1XoAmucM-6S-a_H32YJpKsJzHelBVD94o/preview" /> {/* Splash and Solve */}

            <DriveVideo url="https://drive.google.com/file/d/1XGa3C_uzImqqqDXbhuPmMdqjXyNWtKH2/preview" /> {/* Police Pursuit */}  
            <DriveVideo url="https://drive.google.com/file/d/1I_YsM8vSGAu8o0lDI61W9fGJE3WhjXXA/preview" /> {/* Snakes & Ladders */}
            <DriveVideo url="https://drive.google.com/file/d/1QBqA-_8i_8jMP7cQpbAJsjf2E_2H8Ad8/preview" /> {/* Word Bunny */}
            <DriveVideo url="https://drive.google.com/file/d/1SZU2757KKdd4tBtQPdKWqWbX5vv8h-Hp/preview" /> {/* Zombie Shooter */}
            <DriveVideo url="https://drive.google.com/file/d/12bLy9sNgEwe0zMmSxesMdVo-pHFOCc_5/preview" /> {/* The Wizard & The Knight */}            
            <DriveVideo url="https://drive.google.com/file/d/1_9p_Vn5_GRgUmoURGDHw7t2ZMWwkZCIv/preview" /> {/* Furious Fireball */}       
          </div>
        ),
      },
      {
        id: "ICS3U",
        gradeLevel: 11,
        description: (
          <div className="flex flex-row gap-4">
            <Infographic src="/assets/classes/cs/ICS3U.png" alt="Why Computer Science" />
            <div className="space-y-4">
              <p>
                This course introduces students to computer science. Students will design software independently and as
                part of a team, using industry-standard programming tools and applying the software development
                life-cycle model. They will also write and use subprograms within computer programs.
              </p>
              <p>
                Students will develop creative solutions for various types of problems as their understanding of the
                computing environment grows. They will also explore environmental and ergonomic issues, emerging
                research in computer science, and global career trends in computer-related fields.
              </p>
              <p>
                <strong>
                  Students who have successfully completed our computer science courses have been accepted into top
                  universities, opening doors to exciting opportunities in software development, artificial
                  intelligence, and emerging technologies.
                </strong>
              </p>
            </div>
          </div>
        ),
        videos: (
          <div className="flex w-full max-w-full flex-col overflow-x-auto md:gap-4">
            {/*
            <DriveVideo url="https://drive.google.com/file/d/1rNm4PYJbJTQRZtZnH-r7HbRD8gY0FjxH/preview"></DriveVideo>
            <DriveVideo url="https://drive.google.com/file/d/1AH44qgDeHXTR2Y5po2t2kkEnS0iUE8Wn/preview"></DriveVideo>
            <DriveVideo url="https://drive.google.com/file/d/1J30p7Sz_W45cfQB3pKRTi_tBeimk_zqT/preview"></DriveVideo>
            */}
            <YoutubeVideo id="qLFiF6ZQlAE"/> 
            <YoutubeVideo id="G5lb-oTKE-A"/> 
            <YoutubeVideo id="g08OutJ2NjU"/> 
            <YoutubeVideo id="jGEUGBzywz4"/>  {/* Felicia Zhou */}
            <YoutubeVideo id="rZt6HUNvgT0"/> {/* Ian Min */}
            <YoutubeVideo id="q403E2kCh0U"/> {/* Satoru Katsuta */}
            <YoutubeVideo id="eRbv4Oq9Ob4"/> {/* Gian Pauyon */}
            <DriveVideo url="https://drive.google.com/file/d/1M2eoGDtCpWp72fLlYiGaybiHiMMGQtWd/preview"></DriveVideo> {/* Ethan Bravo */} 
            <DriveVideo url="https://drive.google.com/file/d/1UhLpKzDfeo8bAhklI4lq6OSKJbMNgQRD/preview"></DriveVideo> {/* Jakim Cau */} 
            <DriveVideo url="https://drive.google.com/file/d/1N0NqyP8m0QJ9QiRnhxOd0C6rM3ItvT2n/preview"></DriveVideo> {/* Chloe Lawrence */} 
            <DriveVideo url="https://drive.google.com/file/d/1NhY7P8RPvBczAyGFGqcVLBhc22BA6lj7/preview"></DriveVideo> {/* Panayiotis Vavaroutsos */} 
            <DriveVideo url="https://drive.google.com/file/d/1Ke1ocyj8MBuY370MW0uRx3eoIwnXb_-m/preview"></DriveVideo> {/* Adriano Tino */}       
          </div>
        ),
      },
      {
        id: "ICS4U",
        gradeLevel: 12,
        prereqs: ["ICS3U"],
        description: (
          <div className="flex flex-row gap-4">
            <Infographic src="/assets/classes/cs/ICS4U.png" alt="Why Engineering" />
            <div className="space-y-4">
              <p>
                This course enables students to further develop knowledge and skills in computer science. Students will
                use modular design principles to create complex and fully documented programs, according to industry
                standards. Student teams will manage a large software development project, from planning through to
                project review.
              </p>
              <p>
                Students will also analyse algorithms for effectiveness. They will investigate ethical issues in
                computing and further explore environmental issues, emerging technologies, areas of research in computer
                science, and careers in the field.
              </p>
              <p>
                <strong>
                  Students who have successfully completed our computer science courses have been accepted into top
                  universities, opening doors to exciting opportunities in software development, artificial
                  intelligence, and emerging technologies.
                </strong>
              </p>
            </div>
          </div>
        ),
        videos: (
          <div className="flex w-full max-w-full flex-col overflow-x-auto md:gap-4">
            {/*
            <YoutubeVideo id="Uiy7pGqdFlUs" />
            <DriveVideo url="https://drive.google.com/file/d/1SLakW7-nWj-e1OTyD2tMDsUCnkK1TS9B/preview"></DriveVideo>
            */}
            <DriveVideo url="https://drive.google.com/file/d/12j98NuIUBUzMLfY_o9YhQreuynqHQQBw/preview"></DriveVideo> {/* Elemental Escape */}
            <DriveVideo url="https://drive.google.com/file/d/1CP8Ze25qQyG-w_PqMumxd8t5uup15z7N/preview"></DriveVideo> {/* Nam Cap */}
            <DriveVideo url="https://drive.google.com/file/d/1S4DM3BV1tsz7-evfFN8CxRHhvQb_B5El/preview"></DriveVideo> {/* Omni Fighter */}
            <YoutubeVideo id="CPWX_HymZqg"/> {/* White Coats */}
            <YoutubeVideo id="ol21zBTqDXs"/> {/* Tetris */}
            <YoutubeVideo id="VtV1dqQbDyM"/> {/* Crusader */}
          </div>
        ),
      },
    ],
  },
]

export default function Classes() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(courses[0]?.id ?? null)
  const [selectedClass, setSelectedClass] = useState<string | null>(courses[0]?.classes[0]?.id ?? null)

  const c = useMemo(
    () => courses.find((c) => c.id === selectedCourse)?.classes.find((cls) => cls.id === selectedClass),
    [selectedCourse, selectedClass],
  )
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
  }, [c])

  const showQrCode = useMemo(() => {
    if (typeof window === "undefined") return false
    // if kiosk url param is present, return true and set local storage
    const url = new URL(window.location.href)
    if (url.searchParams.get("kiosk")) {
      localStorage.setItem("kiosk", "true")
      return true
    }
    return localStorage.getItem("kiosk") === "true"
  }, [])
  const kioskUrl = useMemo(() => {
    if (typeof window === "undefined") return "https://ymci.ca/classes"
    const url = new URL(window.location.href)
    url.searchParams.set("utm_campaign", "coursefair")
    url.searchParams.set("utm_source", "kiosk")
    url.searchParams.delete("kiosk")
    return url.toString()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-2 md:p-8 flex flex-col md:flex-row gap-4 w-full overflow-hidden">
      <Link
        href="/"
        className="hidden fixed top-4 left-4 md:flex flex-row gap-2 items-center hover:text-blue-500 transition-colors duration-300"
      >
        <ArrowLeft />
        Back
      </Link>
      {showQrCode && (
        <Card className="fixed right-4 top-4 p-6 bg-white/80 shadow-xl backdrop-blur-sm flex flex-col items-center gap-4 z-10">
          <CardHeader className="p-0">
            <CardTitle className="text-center text-xl">Scan to view on your device!</CardTitle>
          </CardHeader>
          <div className="p-4 bg-white rounded-lg">
            <QRCode
              value={kioskUrl}
              size={192}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
            />
            <div className="flex justify-center">
              <span className="text-center text-sm text-gray-500">https://ymci.ca</span>
            </div>
          </div>
        </Card>
      )}
      <Card className={`w-full mx-auto max-w-4xl bg-white/80 shadow-xl backdrop-blur-sm overflow-hidden ${showQrCode ? 'md:mt-32' : 'mt-2'}`}>
        {/* Course selection */}
        <div className="flex flex-wrap border-b border-gray-200">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourse(course.id)
                setSelectedClass(course.classes[0]?.id ?? null)
              }}
              className="relative flex-1 basis-full md:basis-auto px-4 md:px-6 py-3 md:py-4 text-base md:text-lg transition-colors"
            >
              {selectedCourse === course.id && (
                <motion.div
                  layoutId="coursePill"
                  className="absolute inset-0 rounded-t-lg bg-blue-100/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  selectedCourse === course.id ? "font-semibold text-blue-600" : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {course.name}
              </span>
            </button>
          ))}
        </div>

        {/* Class selection */}
        {selectedCourse && (
          <div className="space-y-6 p-6">
            <div className="flex flex-wrap gap-2">
              {courses
                .find((c) => c.id === selectedCourse)
                ?.classes.map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => setSelectedClass(cls.id)}
                    className={`relative rounded-full px-4 py-2 transition-colors ${
                      selectedClass === cls.id ? "font-medium text-purple-700" : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {selectedClass === cls.id && (
                      <motion.div
                        layoutId="classPill"
                        className="absolute inset-0 rounded-full bg-purple-100"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{cls.id}</span>
                  </button>
                ))}
            </div>

            {/* Details section */}
            {selectedClass && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="prose prose-blue max-w-none space-y-4">
                    <div className="flex flex-col md:flex-row w-full gap-4">
                      <p className="min-w-fit">
                        <span className="font-bold">Prerequisites:</span> {c?.prereqs?.join(", ") ?? "None"}
                      </p>
                      <p className="min-w-fit">
                        <span className="font-bold">Grade Level:</span> {c?.gradeLevel}
                      </p>
                      <p className="min-w-fit">
                        <span className="font-bold">Course Type:</span> {courseType}
                      </p>
                    </div>
                    {c?.description}
                  </div>
                </motion.div>
                {c?.videos && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <div className="prose prose-blue max-w-none space-y-4 text-center">
                      <h1 className="text-2xl font-bold">Some amazing work our students have made in {c.id}</h1>
                      {c.videos}
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>
        )}
      </Card>
    </main>
  )
}

