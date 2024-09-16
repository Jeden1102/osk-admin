"use client";
import dynamic from "next/dynamic";
import React from "react";
import CardDataStats from "../CardDataStats";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { FaRegClock, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PiStudentFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { CardDataIncomingLesson } from "../CardDataIncomingLesson";

const Base: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row">
          <div>
            <h1 className="text-3xl font-semibold">Hello, Dominik</h1>
            <p>Ready to have a ride?</p>
          </div>

          <Button asChild size="lg" className="w-fit">
            <Link href="/">Book a lesson</Link>
          </Button>
        </div>
        <section className="flex flex-col gap-2">
          <Alert className="text-xl" variant="primary">
            <FaRegClock />
            <AlertTitle>Driving lessons icomming!</AlertTitle>
            <AlertDescription>
              Driving lesson with instructor Janek coming soon. Lesson start{" "}
              <b>12th May, 14:30</b>
            </AlertDescription>
          </Alert>
          <Alert className="text-xl" variant="info">
            <FaInfoCircle />
            <AlertTitle>New Notififactions</AlertTitle>
            <AlertDescription>
              You have 3 new notifications.{" "}
              <Link href="#" className="font-bold">
                Preview
              </Link>
            </AlertDescription>
          </Alert>
          <Alert className="text-xl" variant="secondary">
            <FaEnvelope />
            <AlertTitle>New Messages</AlertTitle>
            <AlertDescription>
              You have 6 new messages.{" "}
              <Link href="#" className="font-bold">
                Preview
              </Link>
            </AlertDescription>
          </Alert>
          <Alert className="text-xl" variant="destructive">
            <MdCancel />
            <AlertTitle>Lesson canceled</AlertTitle>
            <AlertDescription>
              Your lesson for <b>12th May, 14:30</b> has been cancelled.
            </AlertDescription>
          </Alert>
        </section>
        <section className="my-4 -mr-3 flex flex-col gap-2 pr-3">
          <h2 className="text-2xl font-semibold">Incoming lessons</h2>
          <div className="flex max-w-full gap-4 overflow-x-auto">
            <div className="flex gap-4">
              <CardDataIncomingLesson
                title="Driving lesson"
                description="Driving lesson incoming"
                date="12th May, 12:45"
                day="Monday"
                target="student"
              />
              <CardDataIncomingLesson
                title="Driving lesson"
                description="Driving lesson incoming"
                date="13th May, 10:45"
                day="Thuesday"
                target="student"
              />
              <CardDataIncomingLesson
                title="Driving lesson"
                description="Driving lesson incoming"
                date="15th May, 9:00"
                day="Friday"
                target="student"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Stats</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
              title="Driving lessons hours completed"
              total="20"
              rate="60%"
              completed
            >
              <FaRegClock />
            </CardDataStats>

            <CardDataStats title="Days to next lesson" total="3">
              <FaRegClock />
            </CardDataStats>
            <CardDataStats title="Students assigned to you" total="24">
              <PiStudentFill />
            </CardDataStats>
            <CardDataStats title="Driving lessons next week" total="24">
              <FaCar />
            </CardDataStats>
          </div>
        </section>
      </div>
    </>
  );
};

export default Base;
