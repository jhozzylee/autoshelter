import type { Metadata } from "next";
import MembershipForm from "@/components/sections/membership/MembershipForm";

export const metadata: Metadata = {
  title: "Join Auto Shelter Membership",
  description: "Sign up for exclusive priority diagnostics, discounted repairs, and VIP perks at Auto Shelter.",
};

export default function MembershipPage() {
  return (
    <main>
      <MembershipForm />
    </main>
  );
}