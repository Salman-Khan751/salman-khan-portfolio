import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PERSON } from "@/data/profile";
import { Logo } from "@/components/ui/Logo";

const socials = [
  { href: PERSON.github, label: "GitHub", Icon: FiGithub, external: true },
  { href: PERSON.linkedin, label: "LinkedIn", Icon: FiLinkedin, external: true },
  { href: `mailto:${PERSON.email}`, label: "Email", Icon: FiMail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-5 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <Logo className="h-9" sizes="36px" />
          <p className="text-sm text-fg-faint">
            Designed &amp; built by {PERSON.name} · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid size-10 place-items-center rounded-full border border-line text-fg-dim transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-text"
            >
              <Icon aria-hidden="true" className="size-[18px]" />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid size-10 place-items-center rounded-full border border-line text-fg-dim transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-text"
          >
            <FiArrowUp aria-hidden="true" className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
