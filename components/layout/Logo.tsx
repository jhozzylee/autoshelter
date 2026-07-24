import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <Image
        src="/logo.svg"
        alt="Auto Shelter Logo"
        width={140}
        height={40}
        priority
        className="h-auto w-20 object-contain sm:w-28 md:w-32"
      />
    </Link>
  );
}