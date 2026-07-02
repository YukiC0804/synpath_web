import { LegalDocumentLayout, LegalSection } from '../components/legal/LegalDocumentLayout';

const LAST_UPDATED = 'July 2, 2026';

export function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Introduction">
        <p>
          Synpath (&quot;Synpath,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides an
          AI-powered manufacturing operations platform. This Privacy Policy explains how we collect, use,
          disclose, and protect personal information when you visit our website, request a demo, or use our
          services.
        </p>
        <p>
          By using our website or services, you agree to the practices described in this policy. If you do not
          agree, please do not use our services.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-neutral-300">Contact and account information</span>, such as your name,
            business email address, company name, job title, and phone number.
          </li>
          <li>
            <span className="text-neutral-300">Commercial and operational data</span> that you or your
            organization provide when evaluating or using Synpath, including manufacturing workflows,
            production data, ERP integrations, and related business records.
          </li>
          <li>
            <span className="text-neutral-300">Usage and technical information</span>, such as IP address,
            browser type, device information, pages viewed, and interactions with our website or product.
          </li>
          <li>
            <span className="text-neutral-300">Communications</span>, including messages you send to us by
            email, demo requests, support inquiries, or sales conversations.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Information">
        <p>We use personal information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide, operate, maintain, and improve our platform and services</li>
          <li>Respond to demo requests, support inquiries, and commercial communications</li>
          <li>Configure AI agents, dashboards, and workflows for your manufacturing environment</li>
          <li>Monitor performance, security, and reliability of our systems</li>
          <li>Comply with legal obligations and enforce our agreements</li>
          <li>Send product updates or marketing communications where permitted by law</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. How We Share Information">
        <p>
          We do not sell personal information. We may share information with service providers that help us
          host infrastructure, provide analytics, deliver communications, or support customer operations.
          These providers are authorized to use information only as needed to perform services for Synpath.
        </p>
        <p>
          We may also disclose information if required by law, to protect rights and safety, or in connection
          with a merger, acquisition, financing, or sale of assets, subject to appropriate confidentiality
          protections.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain personal information for as long as necessary to provide services, fulfill the purposes
          described in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
          Retention periods may vary depending on the type of data and our relationship with you.
        </p>
      </LegalSection>

      <LegalSection title="6. Security">
        <p>
          We implement administrative, technical, and organizational safeguards designed to protect personal
          information against unauthorized access, loss, misuse, or alteration. No method of transmission or
          storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="7. International Transfers">
        <p>
          Synpath operates globally with teams in the United Kingdom, United States, and China. Information may
          be processed in countries other than where it was collected. Where required, we implement
          appropriate safeguards for cross-border data transfers.
        </p>
      </LegalSection>

      <LegalSection title="8. Your Rights">
        <p>
          Depending on your location, you may have rights to access, correct, delete, restrict, or object to
          certain processing of your personal information, and to receive a portable copy of your data. You may
          also withdraw consent where processing is based on consent.
        </p>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:privacy@synpath-ai.com" className="text-white underline-offset-2 hover:underline">
            privacy@synpath-ai.com
          </a>
          . We may need to verify your identity before responding.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies and Similar Technologies">
        <p>
          We use cookies and similar technologies to operate our website, remember preferences, measure
          performance, and improve user experience. You can control cookies through your browser settings,
          though some features may not function properly if cookies are disabled.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last
          updated&quot; date above. Material changes may be communicated through our website or by other
          appropriate means.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <p>
          If you have questions about this Privacy Policy or our data practices, contact us at{' '}
          <a href="mailto:privacy@synpath-ai.com" className="text-white underline-offset-2 hover:underline">
            privacy@synpath-ai.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
