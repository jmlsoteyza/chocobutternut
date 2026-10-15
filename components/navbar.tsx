export default function Navbar() {
  const navbarList = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Service', link: '#service' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#Skills' },
    { label: 'Blog', link: '#blog' }
  ];
  return (
    <section className="w-full">
      {/* Inner navbar */}
      <section>
        {/* logo */}
        <div></div>
        {/* navbarList */}
        <div></div>
        {/* Connect with me */}
        <div></div>
      </section>
    </section>
  );
}
