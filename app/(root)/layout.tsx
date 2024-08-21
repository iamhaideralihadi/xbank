import  SideBar from "@/components/SideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {};
  return (
    <html lang="en">
      
      <body>
        <main className="flex h-screen w-full font-inter">
          <SideBar user={loggedIn}/>
          {children}
        </main>
      </body>

    </html>
  );
}
