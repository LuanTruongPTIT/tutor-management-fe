type CustomOptions = Omit<RequestInit, "method"> & {
  baseUrl?: string | undefined;
};
export class HttpError extends Error {
  status: number;
  payload: {
    message: string;
    [key: string]: any;
  };
  constructor({ status, payload }: { status: number; payload: any }) {
    super("Http Error");
    this.status = status;
    this.payload = payload;
  }
}
// const request = async <Response>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, options?: CustomOptions | undefined) => {
//   const body = options?.body ? options.body instanceof FormData ? options.body : JSON.stringify(options.body) : undefined
//   const baseHeaders = body instanceof FormData ? {
//        Authroi
//   }
// }
