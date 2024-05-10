import dynamic from "next/dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ReduxProvider = dynamic(() => import("@/lib/providers"), {
    ssr: false,
  });
  return (
    <>
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
}
