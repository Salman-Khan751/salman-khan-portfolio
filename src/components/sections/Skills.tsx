import { LANGUAGES, SKILL_COLUMNS } from "@/data/profile";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

// Same colors as the hero emblem's chips, so each strength keeps one color across the site.
const RULE_COLORS: Record<string, string> = {
  ai: "border-accent",
  genai: "border-amber",
  fullstack: "border-[#38a8ff]",
};

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="The toolkit behind the work"
      description="Grouped by how I use them: AI and machine learning, generative AI and agents, and the full-stack layer that ships them."
      tone="soft"
    >
      <Reveal className="mb-14 flex flex-col gap-4 border-b border-line pb-10 md:flex-row md:items-baseline md:gap-8">
        <h3 className="w-40 shrink-0 font-display text-lg font-semibold">Languages</h3>
        <ul className="flex flex-wrap gap-2">
          {LANGUAGES.map((l) => (
            <li key={l}>
              <Tag className="px-3 py-1.5 text-[0.85rem] text-fg">{l}</Tag>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_COLUMNS.map((col, ci) => (
          <Reveal key={col.id} delay={ci * 0.08} className={cn("border-t-2 pt-6", RULE_COLORS[col.id], col.id === "fullstack" && "md:col-span-2 lg:col-span-1")}>
            <h3 className="font-display text-xl font-semibold">{col.title}</h3>
            <div className={cn("mt-7 space-y-7", col.id === "fullstack" && "md:grid md:grid-cols-2 md:gap-x-10 md:space-y-0 md:gap-y-7 lg:block lg:space-y-7")}>
              {col.groups.map((g) => (
                <div key={g.title}>
                  <h4 className="mb-3 text-[0.9rem] font-semibold text-fg-dim">{g.title}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
