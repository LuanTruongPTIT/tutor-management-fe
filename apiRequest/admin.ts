import http from "@/lib/http";

export const adminApiRequest = {
  GetAllUsers: () => {
    return http.get("/api/admin/get-all-user");
  },
  GetAllTutors: () => {
    return http.get("/api/admin/get-all-tutor");
  },
  GetTutorDetail: (id: number) => {
    return http.get(`/api/admin/get-tutor-detail/${id}`);
  },
  CreateTutorByAdmin: (data: any) => {
    return http.post("/api/admin/create-tutor-by-admin", data);
  },
  GetAllStudentByAdmin: () => {
    return http.get("/api/admin/get-all-student");
  },
};
