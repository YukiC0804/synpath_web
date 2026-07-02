import { LegalDocumentLayout, LegalSection } from '../components/legal/LegalDocumentLayout';

const LAST_UPDATED = 'July 2, 2026';

export function TermsPage() {
  return (
    <LegalDocumentLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Acceptance of Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Synpath website,
          platform, and related services (collectively, the &quot;Services&quot;) provided by Synpath
          (&quot;Synpath,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using the Services, you agree to be bound by these Terms. If you are using the
          Services on behalf of an organization, you represent that you have authority to bind that
          organization.
        </p>
      </LegalSection>

      <LegalSection title="2. Services">
        <p>
          Synpath provides software and AI-enabled tools for manufacturing operations, including agents,
          dashboards, workflow automation, and integrations with customer systems. Features may change over
          time as we improve the platform.
        </p>
        <p>
          Access to production features may require a commercial agreement, onboarding, and configuration
          specific to your environment.
        </p>
      </LegalSection>

      <LegalSection title="3. Accounts and Access">
        <p>
          You are responsible for maintaining the confidentiality of account credentials and for all
          activity under your account. You agree to provide accurate information and to notify us promptly of
          any unauthorized access or security incident.
        </p>
      </LegalSection>

      <LegalSection title="4. Customer Data and AI Processing">
        <p>
          You retain ownership of data, content, and materials you submit to the Services (&quot;Customer
          Data&quot;). You grant Synpath the rights necessary to host, process, and use Customer Data solely
          to provide, secure, and improve the Services, including operating AI agents and workflows under
          your direction.
        </p>
        <p>
          You are responsible for ensuring that you have all rights, permissions, and legal bases required to
          submit Customer Data to Synpath and to enable automated processing within your operations.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the Services in violation of applicable law or third-party rights</li>
          <li>Attempt to gain unauthorized access to systems, accounts, or data</li>
          <li>Interfere with or disrupt the integrity or performance of the Services</li>
          <li>Reverse engineer or misuse the Services except where permitted by law</li>
          <li>Use the Services to develop competing products through unauthorized extraction of proprietary materials</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>
          Synpath and its licensors retain all rights, title, and interest in the Services, software,
          documentation, branding, and related intellectual property. Except for the limited rights expressly
          granted in these Terms or a separate agreement, no rights are transferred to you.
        </p>
      </LegalSection>

      <LegalSection title="7. Confidentiality">
        <p>
          Each party may receive confidential information from the other in connection with the Services. The
          receiving party will use reasonable care to protect such information and will not disclose it except
          as permitted by these Terms, a separate agreement, or applicable law.
        </p>
      </LegalSection>

      <LegalSection title="8. Fees and Trials">
        <p>
          Paid Services, if any, are governed by the pricing, order form, or commercial agreement between you
          and Synpath. Unless otherwise stated in writing, fees are non-refundable except where required by
          law.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimers">
        <p>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE MAXIMUM EXTENT
          PERMITTED BY LAW, SYNPATH DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>
          AI-generated outputs may require human review. You remain responsible for operational, commercial, and
          compliance decisions made using the Services.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYNPATH WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS
          OPPORTUNITIES, ARISING OUT OF OR RELATED TO THE SERVICES.
        </p>
        <p>
          SYNPATH&apos;S TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT
          EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO SYNPATH FOR THE SERVICES IN THE TWELVE (12)
          MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US$100), EXCEPT
          WHERE LIABILITY CANNOT BE LIMITED BY LAW.
        </p>
      </LegalSection>

      <LegalSection title="11. Termination">
        <p>
          We may suspend or terminate access to the Services if you materially breach these Terms or if
          required for security, legal, or operational reasons. You may stop using the Services at any time.
          Provisions that by their nature should survive termination will remain in effect.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing Law">
        <p>
          These Terms are governed by the laws applicable to the contracting Synpath entity identified in your
          commercial agreement, without regard to conflict-of-law principles. If no separate agreement exists,
          disputes will be handled in accordance with applicable law in the jurisdiction of Synpath&apos;s
          principal place of business, unless mandatory local law provides otherwise.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of the Services after changes become
          effective constitutes acceptance of the revised Terms, except where additional consent is required
          by law.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>
          Questions about these Terms may be sent to{' '}
          <a href="mailto:legal@synpath-ai.com" className="text-white underline-offset-2 hover:underline">
            legal@synpath-ai.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
