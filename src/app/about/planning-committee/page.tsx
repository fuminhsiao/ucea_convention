import BioBlockList from "@/components/ui/general/BioBlockList";
import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const bios = [
    {
        name: "Shelby Cosner",
        position: "University of Georgia",
        description:
            "SHELBY COSNER is the Morrill M. Hall Endowed Chair in Educational Administration at the University of Georgia, Mary Frances Early College of Education, the Educational Administration and Policy program. Cosner is an expert on the capacity-building and improvement-oriented work of school leaders, the preparation and development of educational leaders, the continuous improvement and evaluation of preparation/development programs for educational leaders. She examines these issues more generally as well as for a variety of equity-oriented aims. She leads multi- disciplinary teams that design and test (e.g., randomized control trial, cluster randomized trial) learning designs for teachers, teacher leaders, school leaders, and district leaders. She also is an expert in partnerships including university-district partnerships, research practice partnerships, and public private partnerships. She has extensive experience with and passion for cultivating these sorts of partnerships in settings throughout the US and abroad. Working independently and with various colleagues Cosner (PI or Co-PI) has obtained over 16M in external funding from federal organizations to state and national/international foundations (e.g., National Science Foundation/NSF, US Department of Education, The Wallace Foundation, William T. Grant Foundation, Jeff Bezos Family Foundation, McCormick Foundation, Lyle Spencer Foundation, Broad Foundation, Lloyd A. Fry Foundation, Finnegan Family Foundation, Children’s First Foundation, Chicago Public Education Fund, and the Qatar Foundation). Her work appears in a variety of peer-reviewed journals including Educational Administration Quarterly, the Journal of Educational Administration, the Journal of School Leadership, Leadership and Policy in Schools, Urban Education, Education Sciences, Educational Management Administration and Leadership, the Journal of Research on Leadership Education, and Planning and Changing. She is currently working on a book for Harvard Education Press for publication in 2025 that examines the continuous improvement of educational leader preparation programs. Cosner is currently serving in several elected national leadership roles in the US. She is the president-elect for the University Council for Educational Administration (UCEA) for 2024-2025 and will become the organization’s president in 2025. She is also the Chair for the AERA Special Interest Group, Learning and Teaching in Educational Leadership (LTEL).",
        imageUrl: "/assets/SHELBY.png",
    },
    {
        name: "Kaneshia Dorsan",
        position: "University of Georgia",
        description:
            "Dr. Kaneshia Dorsan is a clinical assistant professor in the Educational Administration and Policy (EDAP) program at the University of Georgia. She teaches pivotal courses such as Educational Leadership for Instructional Improvement and Change, Leadership in High-Needs School Settings, and Clinical Practices in Educational Leadership, equipping leaders with the knowledge and skills to drive meaningful change in education. Before transitioning into higher education, Dr. Dorsan devoted 19 years of her career to K-12 education, serving as a middle school classroom teacher, assistant principal, instructional coach, and principal. Over the years, she has mentored and supported numerous aspiring leaders, helping them navigate their career paths. Dr. Dorsan’s scholarly interests center on the preparation and development of aspiring and practicing educational leaders. These interests reflect her commitment to advancing equity and excellence in schools, promoting positive outcomes for all students.",
        imageUrl: "/assets/KANESHIA.png",
    },
    {
        name: "Osly Flores",
        position: "University of Illinois at Urbana-Champaign",
        description:
            "Osly J. Flores is an Assistant Professor in the Department of Education Policy, Organization, and Leadership at the University of Illinois at Urbana-Champaign. His research focuses on two main areas: race-conscious leadership in K-12 schools and the persistence of graduate students of color in navigating higher education. In the first area, he explores three themes: equitable leadership practices, leadership ethics, and the experiences of school leaders of color. In the second area, he uses critical frameworks to highlight the successes and resilience of graduate students of color. His work has been published in various journals, including The Urban Review, Urban Education, Teachers College Record, Journal of College Student Development, AERA Open, and the International Journal of Qualitative Studies in Education.",
        imageUrl: "/assets/OSLY.png",
    },
    {
        name: "Hans Klar",
        position: "Clemson University",
        description:
            "Hans W. Klar, PhD, is a professor of educational leadership and the chair of the Department of Educational and Organizational Leadership Development in the College of Education at Clemson University. Dr. Klar’s research is centered on fostering leadership development in rural and high needs schools through research practice partnerships. He is the director of the Leading Educational Administrator Development for Excellent Rural Schools (LEADERS) Center of Excellence. Prior to arriving at Clemson, he served in a variety of teaching and leadership positions in Australia, China, Indonesia, and Japan, including Associate Dean for English Programs at the Sydney Institute of Language and Commerce (SILC) at Shanghai University. While at Clemson, he also served as a visiting scholar at the Universidad Andrés Bello in Santiago, Chile and at the Centre for Principal Development at Umeå University in Umeå, Sweden.",
        imageUrl: "/assets/HANS.png",
    },
    {
        name: "Patricia Virella",
        position: "Montclair State University",
        description:
            "Dr. Patricia M. Virella is an Assistant Professor in the Department of Educational Leadership at Montclair State University. Dr. Virella studies equity-oriented crisis leadership examining how school leaders can respond to crises without further harming marginalized communities. Her research focuses on implementing equity-oriented leadership through leader responses, organizational transformation, and preparation. She has published in prestigious journals including AERA Open and Educational Management, Administration and Leadership (EMAL). Dr. Virella is the author of three books, including the forthcoming **Crisis as Catalyst: Equity-Oriented School Leadership During Difficult Times** with Harvard Education Press.",
        imageUrl: "/assets/PATRICIA.png",
    },
];

export default function AboutPage() {
    return (
        <div>
            <PageHeader />
            <PageTitle title="Planning Committee"/>
            <SectionWrapper>

                    <SectionContent>
                       The 2025 Convention
                        Planning Committee includes Shelby Cosner (University of Georgia),
                        Kaneshia Dorsan (University of Georgia), Osly Flores (University of
                        Illinois at Urbana-Champaign), Hans Klar (Clemson University),
                        Patricia Virella (Montclair State), and Karl Gildner (UCEA Events
                        Manager).
                    </SectionContent>
            </SectionWrapper>
            <SectionWrapper>

                <SectionContent>
                    <BioBlockList bios={bios} />
                </SectionContent>
            </SectionWrapper>

        </div>
    );
}
