const Navbar = () => {
  const links = [
    { label: "Store", href: "#store" },
    { label: "Mac", href: "#mac" },
    { label: "iPhone", href: "#iphone" },
    { label: "Watch", href: "#watch" },
    { label: "Vision", href: "#vision" },
    { label: "AirPods", href: "#airpods" },
  ];

  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
