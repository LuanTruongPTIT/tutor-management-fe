import { ApplicationInterview } from "@/app/admin/application/_components/application-interview/application-interview";
import { Application } from "@/app/admin/application/schema/application";
import http from "@/lib/http";
import { MessageResType } from "@/schema/common";

export const tutorApiRequest = {
  RegisterTutor: (body: any) => {
    return http.post<MessageResType>("/api/tutor/register-tutor", body);
  },
  GetApplication: () => {
    return http.get<MessageResType>("/api/tutor/get-all-application");
  },
  getApplicationById: (id: number) => {
    return http.get(`/api/tutor/get-detail-application/${id}`);
  },
  updateStatusApplication: (body: any) => {
    return http.put<Application>(`/api/tutor/update-status-application`, body);
  },
  GetAllAplicationReview: () => {
    return http.get<Application[]>("/api/tutor/get-all-application-review");
  },
  GetAllApplicationInterview: () => {
    return http.get<ApplicationInterview[]>(
      "/api/tutor/get-all-application-interview"
    );
  },
  UpdateStatusApplicationInterview: (body: any) => {
    return http.put<ApplicationInterview>(
      "/api/tutor/update-status-application",
      body
    );
  },
};
