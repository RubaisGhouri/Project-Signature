import Container from "@/components/layout/Container";
import NavLogo from "./NavLogo";
import NavToggle from "./NavToggle";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-[100]
        pt-4
        pointer-events-none
      "
    >
      <Container>
        <nav
          className="
            pointer-events-auto
            relative
            flex
            h-[72px]
            items-center
            justify-center
            rounded-full
            border
            border-white/8
            bg-black/20
            backdrop-blur-3xl
            shadow-[0_12px_50px_rgba(0,0,0,.35)]
          "
        >
          <NavLogo />

          <div className="absolute right-6">
            <NavToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}