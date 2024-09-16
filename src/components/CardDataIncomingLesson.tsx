import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";

type CardProps = React.ComponentProps<typeof Card>;

type Props = {
  className?: string;
  title: string;
  description: string;
  date: string;
  day: string;
  target: "student" | "instructor";
};

export function CardDataIncomingLesson({
  className,
  title,
  description,
  date,
  day,
  target,
}: Props) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Clock />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{date}</p>
            <p className="text-sm text-muted-foreground">{day}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">Call the student</Button>
        <Button className="w-full" variant="secondary">
          Message student
        </Button>
      </CardFooter>
    </Card>
  );
}
