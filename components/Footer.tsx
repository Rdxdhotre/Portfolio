import { GENERAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { GitFork, Github, Linkedin, Mail, Star } from "lucide-react";

interface RepoStats {
  stargazers_count: number;
  forks_count: number;
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
};

const Footer = async () => {
  let stargazers_count = 0;
  let forks_count = 0;

  try {
    const repoStats = await fetch(
      "https://api.github.com/users/Rdxdhotre",
      {
        next: { revalidate: 60 * 60 },
      },
    );
    if (repoStats.ok) {
      const data = (await repoStats.json()) as RepoStats;
      stargazers_count = data.stargazers_count ?? 0;
      forks_count = data.forks_count ?? 0;
    }
  } catch {
    // silently fail — show zeros
  }

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-secondary/6 blur-[60px] rounded-full" />
      </div>

      <div className="container relative">
        {/* Top divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* CTA headline */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Open to opportunities
          </p>
          <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl leading-none mb-6">
            <span className="gradient-text">LET&apos;S BUILD</span>
            <br />
            <span className="text-foreground/20">SOMETHING</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Have a project in mind? Looking for a full-stack developer? I&apos;d
            love to hear about it.
          </p>
        </div>

        {/* Email CTA */}
        <div className="flex justify-center mb-16">
          <a
            id="footer-email-cta"
            href={`mailto:${GENERAL_INFO.email}?subject=${GENERAL_INFO.emailSubject}&body=${GENERAL_INFO.emailBody}`}
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-anton uppercase tracking-widest text-lg overflow-hidden transition-all duration-300 hover:box-glow bg-primary text-primary-foreground"
          >
            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
            <Mail size={20} className="z-[1]" />
            <span className="z-[1]">{GENERAL_INFO.email}</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              id={`footer-social-${link.name}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              className="size-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:box-glow-sm"
            >
              {SOCIAL_ICONS[link.name] ?? <span className="capitalize text-xs">{link.name[0]}</span>}
            </a>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 text-sm text-muted-foreground">
          <a
            href="https://github.com/Rdxdhotre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Design &amp; built by{" "}
            <span className="text-primary font-semibold">Rohit Dhotre</span>
          </a>

          {/* GitHub stats */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rdxdhotre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Star size={14} /> {stargazers_count} stars
            </a>
            <span className="text-border">·</span>
            <a
              href="https://github.com/Rdxdhotre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <GitFork size={14} /> {forks_count} forks
            </a>
          </div>

          <p className="text-muted-foreground/50">
            © {new Date().getFullYear()} Rohit Dhotre
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
