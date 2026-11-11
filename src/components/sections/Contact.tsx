import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { PERSON } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

const rowClass = "flex items-center gap-4 py-4";
const iconClass = "grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-text";

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let’s build something"
      description="Open to AI engineering and full-stack roles and collaborations. The form opens your email app with the message ready to send."
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <ul className="divide-y divide-line border-y border-line">
            <li className={rowClass}>
              <span className={iconClass}><FiMail aria-hidden="true" /></span>
              <a href={`mailto:${PERSON.email}`} className="min-w-0 flex-1 break-all font-medium transition-colors hover:text-accent-text">
                {PERSON.email}
              </a>
              <CopyEmailButton email={PERSON.email} />
            </li>
            <li className={rowClass}>
              <span className={iconClass}><FiPhone aria-hidden="true" /></span>
              <a href={`tel:${PERSON.phone.replace(/[^+\d]/g, "")}`} className="font-medium transition-colors hover:text-accent-text">
                {PERSON.phone}
              </a>
            </li>
            <li className={rowClass}>
              <span className={iconClass}><FiMapPin aria-hidden="true" /></span>
              <span className="font-medium">{PERSON.location}</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={PERSON.github} variant="ghost" external>
              <FiGithub aria-hidden="true" /> GitHub
            </Button>
            <Button href={PERSON.linkedin} variant="ghost" external>
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
