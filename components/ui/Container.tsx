import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}