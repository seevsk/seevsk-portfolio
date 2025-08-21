export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        {/* <Navbar/> */}
        <div className="text-slate-900 w-full p-2">{children}</div>
      </div>
    </div>
  );
}
