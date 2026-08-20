"use client";

import Image from "next/image";
import Link from "next/link";

export interface PartItem {
  _id: string;
  name?: string;
  title?: string;
  price: number;
  slug: string;
  imageUrl?: string;
}

interface ChatPartsWidgetProps {
  parts: PartItem[];
}

export default function ChatPartsWidget({ parts }: ChatPartsWidgetProps) {
  return (
    <div className="mt-3 w-full space-y-2">
      <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
        {parts.map((part) => {
          const displayName = part.name || part.title || "Auto Part";
          const partSlug = typeof part.slug === "string" ? part.slug : "";

          return (
            <div
              key={part._id}
              className="flex w-48 shrink-0 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white p-2.5 shadow-sm transition-all hover:border-neutral-300"
            >
              <div className="relative h-28 w-full overflow-hidden rounded-lg bg-neutral-100">
                {part.imageUrl ? (
                  <Image
                    src={part.imageUrl}
                    alt={displayName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] text-neutral-400">
                    No Image
                  </div>
                )}
              </div>

              <div className="mt-2 flex flex-1 flex-col justify-between">
                <div>
                  <p className="line-clamp-1 text-xs font-semibold text-neutral-900">
                    {displayName}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-emerald-600">
                    {part.price ? `₦${part.price.toLocaleString()}` : "Price on Request"}
                  </p>
                </div>

                <Link
                  href={partSlug ? `/inventory/${partSlug}` : "/inventory"}
                  target="_blank"
                  className="mt-2 block w-full rounded-lg bg-neutral-950 py-1.5 text-center text-[11px] font-medium text-white transition-colors hover:bg-[var(--color-primary)]"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-neutral-400">
        💡 Tip: You can also search all items under <span className="font-medium text-neutral-600">Inventory</span> in the main header.
      </p>
    </div>
  );
}