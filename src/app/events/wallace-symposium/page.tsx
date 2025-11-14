"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

export default function WallaceSymposiumPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="UCEA–Wallace Foundation Symposium on Educational Leadership" />

      <SectionWrapper>
        <SectionContent>
          <p className="text-lg mb-4 text-gray-700">
            <strong>Relationships Matter: Improving Principal Preparation Through Equity-Focused District Partnerships</strong>
          </p>

          <p className="mb-4 text-gray-700">
            How can districts and leadership preparation programs partner to develop sustainable,
            equity-centered pipelines? How are these partnerships shaping district and preparation
            program improvement? This symposium features the work of school districts and
            UCEA-member university partners who are part of the <strong>Equity Centered Pipeline Initiative (ECPI)</strong>.
            Launched by <strong>The Wallace Foundation</strong>, ECPI partners eight large school districts and
            local university preparation programs. Their collective goal is to co-develop
            comprehensive, aligned pipelines that produce principals who advance educational equity.
          </p>

          <p className="mb-4 text-gray-700">
            Our conversation will explore how districts and preparation programs are working to
            recruit, prepare, develop, and support the next generation of school principals. As ECPI
            nears its conclusion, we’ll use this symposium to reflect on lessons learned with
            colleagues who were deeply involved in these challenging but rewarding pipeline design
            efforts.
          </p>

          <div className="text-sm text-gray-600 italic mb-6">
            <p>📅 <strong>Friday, Nov. 21</strong> &nbsp; | &nbsp; 2:40–3:50 PM</p>
            <p>📍 Sheraton Puerto Rico Resort & Casino — Miramar 4</p>
            <p>Session 182</p>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Facilitator Section */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-4">Facilitator</h3>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src="https://ucea.org/photos/UCEA1763088006_Rotunda_Floyd-Cooper.png"
              alt="Rotunda Floyd-Cooper"
              className="w-40 h-40 object-cover rounded-lg shadow"
            />
            <p className="text-gray-700 text-base">
              <strong>Rotunda Floyd-Cooper, EdD</strong> — <em>The Wallace Foundation</em><br />
              Rotunda Floyd-Cooper leads The Wallace Foundation’s education leadership unit and the
              interdisciplinary strategy team, overseeing the Equity-Centered Pipeline Initiative (ECPI).
            </p>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Panelists Section */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-6">Panelists</h3>

          {/* Sharene Dixon */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src="https://ucea.org/photos/UCEA1763088006_Sharene_Dixon.jpg"
              alt="Sharene Dixon"
              className="w-40 h-40 object-cover rounded-lg shadow"
            />
            <p className="text-gray-700 text-base">
              <strong>Sharene L. Dixon, EdD</strong> — <em>San Antonio Independent School District</em><br />
              Dr. Dixon, Instructional Superintendent of Teaching, Learning, and Leadership at San Antonio ISD
              and Lecturer in the USLC graduate program at UTSA, is an accomplished instructional leader
              with over 25 years of experience. She empowers school leaders, drives equity-centered
              improvement, and advances teaching, learning, and student success districtwide.
            </p>
          </div>

          {/* Juan Manuel Niño */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src="https://ucea.org/photos/UCEA1763088006_Juan_Manuel_Nio.png"
              alt="Juan Manuel Niño"
              className="w-40 h-40 object-cover rounded-lg shadow"
            />
            <p className="text-gray-700 text-base">
              <strong>Juan Manuel Niño, PhD</strong> — <em>University of Texas at San Antonio</em><br />
              Dr. Niño’s public educator experience includes work as a secondary science teacher,
              ESL teacher, athletic coach, and district leader. His research focuses on school
              leadership for improvement and advancing equitable outcomes in educational systems.
            </p>
          </div>

          {/* Rebecca Thessin */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src="https://ucea.org/photos/UCEA1763088006_Rebecca_Thessin.jpg"
              alt="Rebecca Thessin"
              className="w-40 h-40 object-cover rounded-lg shadow"
            />
            <p className="text-gray-700 text-base">
              <strong>Rebecca A. Thessin, EdD</strong> — <em>George Washington University</em><br />
              Dr. Thessin is Associate Professor of Educational Administration at GWU’s Graduate
              School of Education and Human Development, and principal investigator for GWU on The
              Wallace Foundation’s ECPI initiative.
            </p>
          </div>

          {/* Shannon Waite */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src="https://ucea.org/photos/UCEA1763088006_Shannon_Waite.jpg"
              alt="Shannon Waite"
              className="w-40 h-40 object-cover rounded-lg shadow"
            />
            <p className="text-gray-700 text-base">
              <strong>Shannon R. Waite, EdD</strong> — <em>Howard University</em><br />
              Dr. Waite is Assistant Professor in Educational Leadership and Policy Studies at Howard
              University. She leads the partnership between Howard University and DC Public Schools as
              part of The Wallace Foundation’s ECPI.
            </p>
          </div>

          {/* Tynika Young-Aleibar */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src="https://ucea.org/photos/UCEA1763088006_Tynika_Young-Aleibar.png"
              alt="Tynika Young-Aleibar"
              className="w-40 h-40 object-cover rounded-lg shadow"
            />
            <p className="text-gray-700 text-base">
              <strong>Tynika Young-Aleibar, EdD</strong> — <em>DC Public Schools</em><br />
              Dr. Young-Aleibar has served as a teacher and school leader in DCPS and currently
              serves as Project Director for the Equity-Centered Pipeline Initiative.
            </p>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
