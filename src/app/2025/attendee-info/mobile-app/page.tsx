"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

export default function MobileAppPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Mobile App" />

      <SectionWrapper>
        <SectionContent>
          <p className="text-lg mb-4">
            <strong>Whova</strong> is the official mobile app of UCEA25.
          </p>

          <p className="mb-6">
            Download the Whova app if you don’t already have it on your mobile
            device.
          </p>

          <h3 className="font-semibold text-xl mb-2">Features</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              View the event <strong>agenda</strong> and plan your personal
              schedule
            </li>
            <li>
              Access <strong>documents</strong> and <strong>slides</strong> shared by organizers or speakers
            </li>
            <li>
              <strong>Find who else is attending</strong> and connect with
              others ahead of time
            </li>
            <li>
              Plan some social activities such as a{" "}
              <strong>morning run, coffee hours, or meet-ups</strong> with your
              fellow attendees. You can even <strong>post job openings</strong>.
            </li>
            <li>
              Receive updates such as{" "}
              <strong>last minute session changes</strong> from the organizers
            </li>
          </ul>

          <p className="mb-6">
            After downloading the Whova mobile app or accessing the event via
            the web portal, use your email address to sign up for a Whova
            account.
          </p>

          <p className="mb-4">
            To protect user data, Whova requires two-factor authentication at
            sign-in. After entering your email and password, a{" "}
            <strong>verification code</strong> will be sent to your email. Check both your{" "}
            <strong>inbox and spam folder</strong> for the code.
          </p>

          <p className="mb-6">
            Detailed instructions can be found{" "}
            <a
              className="text-blue-600 underline"
              href="https://whova.zendesk.com/hc/en-us/articles/23878656966427-If-I-didn-t-receive-my-verification-code-to-access-the-app-what-should-I-do"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>

          <p className="mb-2 font-semibold">Access the web app version:</p>
          <a
            href="https://whova.com/portal/webapp/sRoju5lIOD8VZiNtomyT/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to open the Whova Web App
          </a>

          <div className="mt-8">
            {/* Whova Button */}
            <a
              style={{
                background: "#2dacee",
                color: "#ffffff",
                padding: "12px 18px",
                borderRadius: "6px",
                fontSize: "18px",
                textDecoration: "none",
              }}
              href="https://whova.com/portal/wsZmtbdNW5ofYOKR@9Q87R5KMcRBixOhGRc9KI@rlgw=/?source=btn_link"
              target="_blank"
              rel="noreferrer"
            >
              Get Whova Now
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
