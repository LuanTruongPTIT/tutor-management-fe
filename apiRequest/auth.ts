// const authApiRequest = {
//   auth: (body: { sessionToken: string; expiresAt: string }) =>
//     http.post("/api/auth", body, {
//       baseUrl: "",
//     }),
// }

import http from "@/lib/http";
import { MessageResType } from "@/schema/common";

export const authApiRequest = {
  logout: (force: boolean | undefined, signal: AbortSignal | undefined) => {
    http.post<MessageResType>(
      "/api/auth/logout",
      { force },
      { baseUrl: "", signal }
    );
  },
};
