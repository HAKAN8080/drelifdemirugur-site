import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

export function Portrait({ className = "", priority = false }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/portrait.png"
        alt="Dr. Elif Demir Uğur"
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 48vw"
        className="object-cover object-top"
      />
    </div>
  );
}
