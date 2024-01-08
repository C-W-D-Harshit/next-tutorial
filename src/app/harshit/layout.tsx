export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Header for Harshit</nav>
      <nav></nav>
      {children}
      <footer>footer</footer>
    </section>
  );
}
