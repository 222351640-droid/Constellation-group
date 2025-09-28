"use client";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div className="flex-1 flex">
        {children}
        <RightSidebar />
      </div>
    </main>
  );
}
