import Loading from "@/app/loading";
import MeetingTypeList from "@/components/meetingtypelist/MeetingTypeList";
import { Card, CardHeader } from "@/components/ui/card";
import { Suspense } from "react";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="md:px-10 pt-5 flex size-full flex-col gap-5">
          <Card className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
            <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
              <CardHeader className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
                Upcoming Meeting
              </CardHeader>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
                <p className="text-lg font-medium  lg:text-2xl">{date}</p>
              </div>
            </div>
          </Card>
          <MeetingTypeList />
        </section>
      </Suspense>
    </>
  );
};

export default Home;
