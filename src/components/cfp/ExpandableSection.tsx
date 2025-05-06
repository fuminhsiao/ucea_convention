"use client";
import { useState } from "react";

export default function ExpandableSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <em>“Fostering Leadership Resilience Through Collaboration and Community”</em>
      <br />
      <em>“Fomentando la Resiliencia de Liderazgo a través de Colaboración y Comunidad.”</em>
      <br />
      <br />
      <p>
      A variety of factors, both internal and external, have shaped our
          theme, call for proposals, and intentions for this year’s Convention.
          From an internal perspective, our organization has learned a great
          deal over the last several years through our equity self-study and
          from related learning and work groups (e.g., clinical faculty, equity
          learning). Among other things, we recognize the need to cultivate a
          more inclusive community within UCEA (broadly and within our
          Convention)—a community that actively breaks down the kinds of
          organizational micropolitics that have been experienced by some
          members of our community based on individual identities (e.g.,
          institution type, discipline, epistemology, research methods, academic
          roles, race, culture, gender, gender identity, and sexual
          orientation). These sorts of issues have led some individuals to feel
          on the margins of our organization and/or where they have less access
          and opportunity within our organization.
      </p>
      <br />

      {/* 動畫展開段落 */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        From a national perspective, we draw attention to the fact that PK-12
          school leaders, a group of educators central to UCEA’s aims, are
          currently tasked with leading their schools during a time
          characterized as a “frontal assault on education” (Vasquez Heilig,
          2025b). They are facing challenges that are multiple, are complex, and
          where notable risks to funding are present. In their work to ensure
          that all students thrive in their schools, district and school leaders
          are being forced to navigate through an assortment of attempts to halt
          a broad range of equity-oriented pursuits within their schools. This
          is work enacted by school leaders to strengthen inclusion, expand
          educational opportunities, and cultivate greater overall levels of
          student well-being and success (Vasquez Heilig, 2025b). Actions to
          stop such work in schools are poised to harm the most vulnerable
          students—particularly Black, Brown, and Indigenous students, LGBTQIA+
          students, students with disabilities, bilingual emergent students,
          refugees, and migrants. Additionally, these actions are clear
          indications of the minimization of race as a systemic, structural, and
          fundamental ideology in U.S. society (Alexander, 2020; Bell, 1992;
          Bonilla-Silva, 1997; Katznelson, 2005). Importantly, our host setting
          has endured a range of challenges and threats that predate these
          recent assaults to education, educational leaders, and schools that
          are critical for our consideration. These include such issues as (a)
          colonialism; (b) economic, political, and policy pressures; and (c)
          hurricane and other severe weather devastations (Meléndez-Badillo,
          2024; Petrun Sayers et al., 2023; Virella, 2022, 2023a, 2023b; Virella
          & Weiner, 2020). We also recognize that many settings throughout the
          globe are grappling with their own sets of challenges (e.g., Arar et
          al., 2020). <br />
          <br />
          We also recognize that higher education institutions and members of
          the professoriate are also confronting a set of highly destructive
          forces. Various authors have recognized such actions as those
          attacking the research enterprise of universities, DEI policies and
          practices, academic freedom, and faculty governance as pervasive
          threats to the university community (e.g., Bogost, 2025a, 2024b;
          Vasquez Heilig, 2025a, 2024b). As a result, members of the UCEA
          community are being forced to navigate through politicized assaults on
          higher education while simultaneously working to advance efforts of
          consequence to PK-12 schools and the preparation and development of
          future educational leaders. <br />
          <br />
          With these issues in mind, this year’s Convention will be not only a
          space for the presentation of research, but also a setting that
          emphasizes learning and capacity development. We view learning and
          capacity development as critical to organizations, like UCEA, that are
          working to make progress on organization goals (Cosner, 2009). At the
          same time, we recognize Puerto Rico as a rich context for our learning
          and capacity development. <br />
          <br />
          Importantly, Puerto Rico provides an opportunity to explore themes
          that we view as highly relevant for our current learning and capacity
          development—themes of collectivity, community, and resilience. Puerto
          Rico’s multiple devastations and challenges are primarily rooted in
          its colonial relationship with the United States, severely limiting
          the island’s ability to determine its destiny and address critical
          issues such as disaster relief, economic development, and
          environmental protection. Through personal conversations and the
          review of articles and artifacts (e.g., Petrun Sayers et al., 2023;
          Unanue et al., 2020; Virella, 2002, 2023a, 2023b; Virella & Weiner,
          2020; Whitney Museum of American Art, 2022), these themes became
          evident to us as a critical part of the story of Puerto Rico and its
          people as they have navigated and continue to navigate these sorts of
          challenges and devastations. These themes were also amplified through
          a meaningful personal story shared with us during the Convention
          Planning Committee’s time on the island in February. <br />
          <br />
          As we consider the Spanish translation of our theme, we want to draw
          particular attention to the term comunidad. Comunidad finds expression
          through interpersonal connections and relationships, shared values, a
          spirit of cooperation and collective engagement, and considerations of
          group well-being (de Montilla, 1990; Pérez-Bullard, 2019). It
          underscores the importance of belonging and being a part of a larger
          group. It also calls us to cultivate a shared sense of responsibility,
          where individuals consider their responsibilities to others and feel
          compelled to support others. <br />
          <br />
          As we consider resilience, we recognize that the concept of Puerto
          Rican “resilience” must be understood within this broader historical
          and political context. This means that we must recognize resilience as
          not simply an admirable trait but as a necessary response to systemic
          oppression, and we must acknowledge that discussions of resilience
          without addressing the underlying colonial dynamics perpetuate the
          problematic relationship between Puerto Rico and the mainland United
          States (Bonilla & LeBrón, 2019). The most recent album of Puerto
          Rico’s Bad Bunny has been hailed as “uniting generations through the
          spirit of resilience” because of the anticolonial sentiments discussed
          and the desire to be liberated from colonialism (Rosewater, 2025), and
          we seek to draw upon his inspiration in this year’s Convention.
          Lastly, we find the proclamations of Petrun Sayers et al. (2023), who
          studied Puerto Rico’s efforts to navigate through devastation,
          empowering as we look towards November’s Convention: “We will rise no
          matter what” (p. 126). <br />
          <br />
          With all these issues in mind, we will bring UCEA’s 39th Annual
          Convention to life by intentionally designing this gathering to
          <ul>
            <li>
              {" "}
              inspire and cultivate greater levels of collective work in four
              areas central to UCEA’s mission and aims: (a) work that improves
              the preparation and development of PK-12 educational leaders; (b)
              work that improves the achievement of all PK-12 students and
              supports equity-oriented pursuits in PK-12 schools; (c) work that
              generates knowledge of consequence to PK-12 education policy; and
              (d) work that focuses on the “pathways and development” of those
              in the “field of PK-12 educational leadership, policy, and
              organizations” (UCEA, 2025);
            </li>
            <li>
              strengthen and expand our professional community and build
              personal and collective resilience; and{" "}
            </li>

            <li>
              cultivate effective communication and advocacy practices for (a)
              helping educators gain more benefit from our work, (b) enhancing
              communication to the broader public to better understand our work
              and its impact on education, and (c) addressing unjust and harmful
              policies and practices in education
            </li>
          </ul>
          <br />
          <br />
          UCEA is “dedicated to the improvement of preK-12 educational
          leadership, policy, and organizations, including conducting and
          disseminating research that benefits schools, communities, and
          society” (UCEA, 2025). To support this aim, the 39th Annual Convention
          Planning Committee invites collective work in four foci areas: (a)
          work that improves the preparation and development of PK-12
          educational leaders; (b) work that improves the achievement of all
          PK-12 students and supports equity-oriented pursuits in PK-12 schools;
          (c) work that generates knowledge of consequence to PK-12 education
          policy; or (d) work that focuses on the “pathways and development” of
          those in the “field of PK-12 educational leadership, policy and
          organizations” (UCEA, 2025). <br />
          <br />
          We also will orchestrate the UCEA Convention to strengthen and expand
          community—our UCEA community and PK-12 school communities. We will
          enact the Convention to deepen our appreciation for the varied and
          intersectional identities of individuals within our organization
          (e.g., institutional, disciplinary, epistemological, methods, roles,
          racial/cultural, gender, gender identity, sexuality). We will work to
          cultivate wider and deeper levels of inclusion and engagement and
          disrupt any micropolitics that might have previously undermined
          engagement, connection, or collaboration within our organization. We
          will also work to deliberately cultivate a community that extends to
          our international colleagues because we recognize the deep value of
          collaborating or partnering with these individuals as we learn and
          work. To complement these actions, we invite proposals that foreground
          issues of identity for their consideration. We also invite proposals
          that support community building within our organization as well as
          those that animate community, coalition or partnership building by
          educational leaders within PK-12 schools, or within the educational
          leader preparation and development community. <br />
          <br />
          The cultivation of resilience and r(ac)esilience will also be
          important considerations for this year’s UCEA Convention design. We
          recognize resilience—both personal and community—as critical in times
          of threat (Buzzanell, 2010; Petrun Sayers et al., 2023). We also
          recognize resilience as an “interactional process” (Petrun Sayers et
          al., 2023, p. 3). Work by Patrón (2023) also draws our attention to
          r(ac)esilience. That work considers intersectional identities and
          issues of oppression and does so through the experiences of gay
          Latinos (Patrón, 2023). Patrón conceptualized r(ac)esilience as a
          process in which individuals undergo adversity related to the
          intersection of their social identities, which are often inextricably
          linked to systems of oppression, and manage to successfully overcome
          or cope with various forms of adversity. As we witness the push for
          color-evasiveness (Annamma et al., 2017) in leadership, we must
          understand that race matters (West, 1993) and develop tools to
          effectively counter challenges. With these issues in mind, we also
          invite proposals that support or examine these sorts of issues in
          relation to those in the field of educational policy and leadership,
          programs that prepare or develop educational leaders, Pk-12
          educational leaders, or PK-12 schools. <br />
          <br />
          This year’s UCEA Convention also will be enacted to strengthen our
          communication and advocacy efforts. We recognize communication and
          advocacy as especially critical to our work ahead. Vasquez Heilig
          (2025a, 2025b) helps us to understand the importance of such work as
          we continue to confront challenges and attacks to PK-12 and higher
          education. Accordingly, this year’s Convention will support the
          translation of our research and work to forums that are accessible to
          practitioners. We also will cultivate strategies for helping the
          broader public better understand our work and its impact on education
          as well as for challenging actions that are unjust and harmful to
          education. To complement these activities, we also invite proposals
          that support or examine these sorts of issues in relation to
          educational leaders, PK-12 schools, and programs that prepare or
          develop educational leaders.
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer border border-blue-600 text-blue-600 px-4 py-2 text-xl font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          {isExpanded ? "READ LESS" : "READ MORE"}
        </button>
      </div>
    </>
  );
}
