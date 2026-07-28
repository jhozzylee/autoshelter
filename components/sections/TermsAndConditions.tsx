import Container from "@/components/ui/Container";

export default function TermsAndConditions() {
  const lastUpdated = "July 2026";

  return (
    <section className="bg-white py-12 pt-24 sm:pt-28 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="border-b border-neutral-200/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              Legal & Compliance
            </div>

            <h1 className="h1 text-neutral-950 tracking-tight">
              Terms & <span className="italic text-[var(--color-primary)]">Conditions.</span>
            </h1>

            <p className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Terms Body */}
          <div className="prose prose-neutral mt-10 max-w-none text-neutral-600 font-light leading-relaxed">
            <p className="text-base sm:text-lg font-normal leading-relaxed text-neutral-900">
              Welcome to Auto Shelter. By accessing or using our websites, applications, or services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully before using our platform.
            </p>

            <hr className="my-8 border-neutral-200/60" />

            <div className="space-y-10">
              {/* Section 1 - User Agreement */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  By accessing auto-shelter.com or using any associated applications, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these terms, you should immediately cease access to the site.
                </p>
              </div>

              {/* Section 2 - Confidential Information */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  2. Confidential Information & Public Forums
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Except for Auto Shelter Websites & Apps which are clearly identified as non-public forums (each a “Non-Public Forum”), the Auto Shelter Website is intended to be a public forum. You agree not to provide Auto Shelter or other users with any confidential or proprietary information that you or the owner of the information do not intend to become public information.
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  Except for User Content clearly labeled as confidential that you upload into a Non-Public Forum, any User Content that you send or upload to the Auto Shelter website or app will be deemed <strong className="font-semibold text-neutral-900">NOT</strong> to be confidential or proprietary, and you expressly agree that you waive any trade secret or other confidentiality rights with respect to such User Content.
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  You agree not to reproduce any Confidential Information to which you are provided access through auto-shelter.com in any form except as authorized at the time of disclosure. Any reproduction of Confidential Information shall remain the property of auto-shelter.com only. You agree to:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
                  <li>Take all reasonable steps to keep all Confidential Information strictly confidential.</li>
                  <li>Use Confidential Information solely as authorized by auto-shelter.com.</li>
                </ul>
              </div>

              {/* Section 3 - Intellectual Property */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  3. Intellectual Property Rights
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  All trademarks, OEM part descriptions, visual graphics, site interfaces, and logos rendered on auto-shelter.com are owned by or licensed to Auto Shelter. Unauthorized copy, modification, distribution, or reproduction of any site media without prior written permission is strictly prohibited.
                </p>
              </div>

              {/* Section 4 - Limitation of Liability */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  4. Limitation of Liability
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Auto Shelter provides inventory information and platform services on an "as is" and "as available" basis. While we strive for maximum accuracy across inventory listings and part specifications, Auto Shelter shall not be held liable for indirect, incidental, or consequential damages resulting from site access or reliance on displayed data.
                </p>
              </div>

              {/* Section 5 - Governing Law */}
              <div>
                <h2 className="text-lg font-semibold text-neutral-950 tracking-tight">
                  5. Governing Law & Modifications
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Auto Shelter reserves the right to revise or update these Terms & Conditions at any time without prior notice. Continued use of the platform following updates constitutes your binding acceptance of the revised terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}