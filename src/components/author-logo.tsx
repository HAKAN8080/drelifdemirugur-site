import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

export function AuthorLogo({ className = "", priority = false }: Props) {
  return (
    <Image
      src="/elif-nile-logo.png"
      alt="Elif Nile"
      width={480}
      height={480}
      priority={priority}
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}
