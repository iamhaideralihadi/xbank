import  SideBar from "@/components/SideBar";
import Image from "next/image";
import MobileNavBar from "@/components/MobileNavBar";


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
          <div className="flex flex-col size-full">
            <div className="root-layout">
              <Image 
                src="/icons/logo.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <div>
                <MobileNavBar user={loggedIn}/>
              </div>
            </div>
            {children}
          </div>
          
        </main>
      </body>

    </html>
  );
}
