"use client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { GalleryIcon, MusicIcon, VideoIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import { tutorApiRequest } from "@/apiRequest/tutor";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { Application } from "../schema/application";
import { columns_interview } from "./application-interview/columns";
import ApplicationInterview from "./application-interview/application-interview";
import ApplicationReview from "./application-review/application-review";
export const ApplicationData = [
  {
    id: 1,
    name: "Trương Luân",
    position: "Application for tutor",
    logo: "/golang2.png",
    status: "pending",
    createdAt: "17 oct 2024",
    updatedAt: "2024-04-29T15:45:00Z",
  },
  {
    id: 2,
    name: "Kim Luân",
    position: "Application for tutor",
    logo: "/components.jpeg",
    status: "pending",
    createdAt: "17 oct 2024",
    updatedAt: "2024-04-29T11:20:00Z",
  },
];

function useFetchApplications() {
  const { data, isLoading, error } = useQuery<Application[]>({
    queryKey: ["applications"],
    queryFn: tutorApiRequest.GetApplication as any,
  });
  return { data, isLoading, error };
}
export default function Applications() {
  // return <DataTable data={Applications} columns={columns} searchKey="name" />;
  const { data, isLoading, error } = useFetchApplications();
  const [result, setResult] = useState<Application[]>(); // Update the type of 'result' to 'any[]'

  useEffect(() => {
    if (data) {
      setResult(data);
    }
  }, [data]);
  if (isLoading) {
    return (
      <div>
        <BeatLoader />
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" color="primary" variant="bordered">
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <GalleryIcon />
                <span>Application</span>
              </div>
            }
          >
            <Card>
              <CardBody className="bg-background">
                <DataTable
                  data={result as any}
                  columns={columns}
                  searchKey="name"
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <MusicIcon />
                <span>Application review</span>
              </div>
            }
          >
            <Card>
              <CardBody className="bg-background">
                <ApplicationReview />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="videos"
            title={
              <div className="flex items-center space-x-2">
                <VideoIcon />
                <span>Personal Interview</span>
              </div>
            }
          >
            <Card>
              <CardBody className="bg-background">
                <ApplicationInterview />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
