import BioBlockList from "@/components/ui/general/BioBlockList";
import PageHeader from "@/components/ui/general/PageHeader2026";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const bios = [
  {
    name: "Miriam Ezzani",
    position: "Texas Christian University (Committee Chair)",
    description:
      "Miriam D. Ezzani is an Associate Professor of Educational Leadership in the College of Education at Texas Christian University (TCU). Her research examines the critical intersection of culturally responsive leadership with race and faith, and how these principles can be effectively implemented within school and district reform efforts to create more equitable learning environments. Dr. Ezzani provides distinctive expertise on the opportunities, challenges, and practices of Islamic school leadership. Her scholarly work has been published in prominent journals, including Educational Administration Quarterly, the International Journal of Qualitative Studies in Education, and the Journal of School Leadership. Her contributions have been recognized through several prestigious honors, including the American Educational Research Association, Division A, Emerging Scholar Award, and the University Council for Educational Administration Jack A. Culbertson Award. She is the co-author of Islam, Education and Freedom: An Uncommon Perspective on Leadership and co-editor of Great Muslim Leaders: Lessons for Education.",
    imageUrl: "https://ucea.org/photos/UCEA1769656247_Miriam_Ezzani_Headshot.jpg",
    variant: "default",
  },
  {
    name: "Earl Edwards",
    position: "Boston College",
    description:
      "Dr. Earl J. Edwards is a scholar, educator, and community-engaged researcher whose work examines how structural racism shapes the educational and housing experiences of youth and families experiencing homelessness. His scholarship advances equity-driven policy reforms and strengthens institutional responses to better support historically marginalized populations. Dr. Edwards is an Assistant Professor of Educational Leadership and Policy at Boston College’s Lynch School of Education and Human Development, where he directs the Housing, Education and Equity Lab. His scholarship appears in journals such as Urban Education, Children and Poverty, and Leadership and Policy in Schools. He is a co-author of All Students Must Thrive, a widely used text on educational equity and trauma-informed practice.",
    imageUrl: "https://ucea.org/photos/UCEA1769656245_Earl_Edwards_Headshot_T.JPG",
  },
  {
    name: "Thomas Ralston",
    position: "University of Pittsburgh",
    description:
      "Dr. Thomas Ralston is an Assistant Professor of Practice in the Department of Teaching, Learning, and Leading in the School of Education at the University of Pittsburgh. His primary focus is in education leadership and principal/superintendent preparation. In addition to his teaching duties at the University, Dr. Ralston also serves as the Executive Director of the Forum for Western Pennsylvania School Superintendents. Prior to joining the University of Pittsburgh, Dr. Ralston enjoyed a 30+ year career in public education as a middle school science teacher, principal, and district superintendent. In 2010, Dr. Ralston was named as the Administrator of the Year by the Pennsylvania Association of Middle Level Education. The University of Pittsburgh Tri-State Area School Study Council named Dr. Ralston as a Distinguished Educator in 2017. Dr. Ralston was also honored as the Superintendent of the Year by the Pennsylvania Music Educators Association in 2020.",
    imageUrl: "https://ucea.org/photos/UCEA1769656244_Tom_Ralston_Headshot__T.JPG",
  },
  {
    name: "Lok-sze Wong",
    position: "University of North Texas",
    description:
      "Dr. Lok-Sze Wong studies system reform policies as attempts to address systemic inequities. Drawing on education, sociocultural, and organization theories and mixed methods, her research unpacks how systems (re)produce inequities and how to humanely reform schools and districts as complex social systems. She focuses on professional learning opportunities that support teachers and administrators as they shift their practices while redesigning the very organizations in which they work. Dr. Wong began her career in education as an elementary school teacher in Los Angeles. In addition to serving as a Plenum Rep, Dr. Wong serves in leadership positions for the Systems Thinking in Education SIG and the Leadership for Social Justice SIG. Dr. Wong has a Ph.D. in Educational Administration and Policy from the University of Michigan.",
    imageUrl: "https://ucea.org/photos/UCEA1769656244_Lok-sze_Wong_Headshot.jpg",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader />
      <PageTitle title="Planning Committee" />

      <SectionWrapper>
        <SectionContent>
          The 2026 Convention Planning Committee includes Miriam Ezzani
          (Texas Christian University, Committee Chair), Earl Edwards
          (Boston College), Thomas Ralston (University of Pittsburgh), and
          Lok-sze Wong (University of North Texas).
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