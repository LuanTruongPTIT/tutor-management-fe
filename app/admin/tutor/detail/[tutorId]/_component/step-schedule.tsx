// import { Steps } from "antd";
"use client";
import * as React from "react";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Chip from "@mui/joy/Chip";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
export default function StepSchedule({ data }: { data: any[] }) {
  // return (
  //   <Steps
  //     progressDot
  //     current={1}
  //     direction="vertical"
  //     className="bg-background text-foreground"
  //     items={[
  //       {
  //         title: "Finished",
  //         description: "This is a description. This is a description.",
  //       },
  //       {
  //         title: "Finished",
  //         description: "This is a description. This is a description.",
  //       },
  //       {
  //         title: "In Progress",
  //         description: "This is a description. This is a description.",
  //       },
  //       {
  //         title: "Waiting",
  //         description: "This is a description.",
  //       },
  //       {
  //         title: "Waiting",
  //         description: "This is a description.",
  //       },
  //     ]}
  //   />
  // );
  return (
    <Stepper orientation="vertical">
      {data.map((item, index) => {
        console.log("item", item);
        return (
          <>
            <Step
              indicator={
                <StepIndicator variant="solid" color="primary">
                  {item.status === "Active" && <CheckRoundedIcon />}
                </StepIndicator>
              }
            >
              <div className="flex flex-row justify-between">
                <Typography className="text-foreground">
                  {item.status}
                </Typography>
                <Typography className="text-gray-500 italic">
                  {item.start_date} - {item.duration_time}
                </Typography>
              </div>

              <Stack spacing={1}>
                <Typography className="text-foreground" level="body-sm">
                  {item.topic}
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography level="body-sm" className="text-foreground">
                  {item.class_name}
                </Typography>
              </Stack>
              <Stack
                // spacing={1}
                className="flex flex-row items-center justify-start"
              >
                {item.students &&
                  item.students.map((student: any) => {
                    console.log("student", student.imageUrl);
                    return (
                      <>
                        <Avatar>
                          <AvatarImage src={student.imageUrl} alt="@shadcn" />
                        </Avatar>
                      </>
                    );
                  })}
              </Stack>
            </Step>
          </>
        );
      })}
    </Stepper>
  );
}
