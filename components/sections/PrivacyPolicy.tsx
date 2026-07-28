import Container from "@/components/ui/Container";

export default function PrivacyPolicy() {
  const lastUpdated = "July 2026";

  return (
    <section className="bg-white pt-24 sm:pt-28 py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="border-b border-neutral-200/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              Legal & Compliance
            </div>

            <h1 className="h1 text-neutral-950 tracking-tight">
              Privacy <span className="italic text-[var(--color-primary)]">Statement.</span>
            </h1>

            <p className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Policy Body */}
          <div className="prose prose-neutral mt-10 max-w-none text-neutral-600 font-light leading-relaxed">
            <p className="text-base sm:text-lg font-normal leading-relaxed text-neutral-900">
              Protecting individual privacy on the Internet is crucial to the future of Internet-based business and the move toward a true Internet economy. We have created this Privacy Statement to demonstrate our firm commitment to the individual’s right to data protection and privacy. This Privacy Statement outlines how we handle information that can be used to directly or indirectly identify an individual (“Personal Data”).
            </p>

            <hr className="my-8 border-neutral-200/60" />

            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  1. Information We Collect
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We collect information to provide better services to all our users. Personal Data may be collected in the following ways:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong className="font-medium text-neutral-900">Information you provide directly:</strong> Name, contact details, shipping/billing address, and payment information supplied during inquiry or order checkout.
                  </li>
                  <li>
                    <strong className="font-medium text-neutral-900">Automated Technical Data:</strong> IP address, browser type, device specifications, and page interaction metrics collected via standard web analytics.
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  2. How We Use Personal Data
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Your information is processed strictly in accordance with applicable data privacy laws. Primary uses include:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
                  <li>Processing product orders, shipping logistics, and customer support queries.</li>
                  <li>Improving platform security, site performance, and user experience.</li>
                  <li>Sending relevant transaction updates, technical notices, or promotional communications (where opted-in).</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  3. Cookies & Tracking Technologies
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We use cookies and similar session technologies to remember preferences, evaluate user navigation trends, and personalize interface elements. You may adjust your web browser settings to decline cookies, though certain interactive features may be limited as a result.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  4. Data Sharing & Third Parties
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We do not sell, rent, or trade your Personal Data to third parties. Data is shared exclusively with verified service partners (such as payment gateways, logistics services, and web infrastructure providers) necessary to fulfill our service contract with you.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  5. Your Rights & Contacts
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  You hold full rights to access, correct, or request deletion of your Personal Data stored in our systems. For any data protection inquiries or formal requests, please reach out via our primary communication channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}