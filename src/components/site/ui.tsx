import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { isLang, type Lang } from "@/i18n/strings";

export function useLang(): Lang {
  const p = useParams({ strict: false }) as { lang?: string };
  return p.lang && isLang(p.lang) ? p.lang : "en";
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setIn(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", inView && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Img({
  src,
  alt,
  ratio,
  className,
  eager,
  imgClassName,
}: {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
  eager?: boolean;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn("overflow-hidden rounded-lg bg-muted", className)}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={cn("img-zoom h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5 rtl:-scale-x-100", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function SectionHead({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12">
      {label && <div className="label-caps mb-4 text-primary">{label}</div>}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-2xl text-3xl md:text-5xl">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export function BtnLink({
  children,
  variant = "primary",
  className,
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "night" | "light";
  className?: string;
  to: string;
  params?: Record<string, string>;
  search?: Record<string, unknown>;
}) {
  const v = {
    primary: "bg-primary text-primary-foreground hover:bg-night",
    secondary: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
    night: "bg-primary text-primary-foreground hover:bg-night-foreground hover:text-night",
    light: "bg-background text-foreground hover:bg-secondary",
  }[variant];
  return (
    <Link
      {...(props as unknown as ComponentProps<typeof Link>)}
      className={cn(
        "btn-3d inline-flex min-h-[52px] items-center gap-3 rounded-full px-7 text-base font-medium",
        v,
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Crumbs({ items }: { items: { label: string; node?: ReactNode }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label-caps">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {it.node ?? (
              <span aria-current="page" className="text-foreground">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
