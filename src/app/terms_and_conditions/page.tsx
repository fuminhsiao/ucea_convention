"use client";

import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import PageTitle from "@/components/ui/general/PageTitle";

export default function TermsOfUsePage() {
  return (
    <div className="w-full pt-50">
      <PageTitle title="Terms of Use" />
      <SectionWrapper>
        <SectionContent className="space-y-6">
          <p>
            The University Council for Educational Administration (UCEA) provides this website and its related content and services in furtherance of UCEA’s nonprofit and tax-exempt mission. While UCEA strives to provide accurate and reliable information, it does not endorse, approve, or certify the accuracy, completeness, timeliness, or efficacy of any content. Use of this information is voluntary and should only proceed following independent review by qualified professionals. References to commercial products, processes, or services do not constitute or imply endorsement by UCEA.
          </p>

          <p>
            This website and all its content (including but not limited to text, images, graphics, video, and audio) are protected by copyright as a collective work or compilation under U.S. and international copyright laws. Unauthorized reproduction or redistribution is strictly prohibited. However, you may create links to any public URL on this website without prior written permission.
          </p>

          <p>
            All information on this website is provided “as is,” without any warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. UCEA does not warrant uninterrupted or error-free operation of the site. Some jurisdictions may not allow the exclusion of implied warranties, so parts of this disclaimer may not apply to you.
          </p>

          <p>
            Content on this site may contain technical inaccuracies or typographical errors. Content may be changed or updated without notice. UCEA may also make improvements or changes to its programs or services described on the site at any time.
          </p>

          <p>
            Any feedback, comments, or suggestions you send to UCEA (collectively, “Feedback”) shall be considered non-confidential. UCEA shall be free to use and share such Feedback without restriction. UCEA may use ideas, concepts, or techniques submitted via Feedback for any purpose, including but not limited to enhancing its services or developing new programs.
          </p>

          <p>
            UCEA hosts discussion boards and other user-generated content platforms. UCEA does not necessarily endorse or take responsibility for statements posted on those boards. All posted content reflects the views of the individual users.
          </p>

          <p>
            Content published on the UCEA website may include references to UCEA services or programs not available in your country. Such references do not imply UCEA’s intent to make such services available elsewhere.
          </p>

          <p>
            UCEA makes no representations about any external websites linked from its own. External websites are independent, and UCEA has no control over their content or availability. A link to a third-party site does not imply UCEA endorsement or responsibility. It is your responsibility to ensure external sites are free of malware or other harmful components.
          </p>

          <p>
            Under no circumstances shall UCEA be liable for any direct, indirect, or consequential damages arising from use of this site or any linked site, including loss of data, business interruption, or loss of profits, even if UCEA has been advised of the possibility of such damages.
          </p>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
