'use client';

import dynamic from 'next/dynamic';

const CheckoutSection = dynamic(
  () => import('@/components/sections/CheckoutSection'),
  { ssr: false }
);

export default function CheckoutClientWrapper() {
  return <CheckoutSection />;
}