import Template1 from "@/components/templates/Template1";
import Template2 from "@/components/templates/Template2";
import Template3 from "@/components/templates/Template3";
import Template4 from "@/components/templates/Template4";
import Template5 from "@/components/templates/Template5";
import Template6 from "@/components/templates/Template6";
import Template7 from "@/components/templates/Template7";
import Template8 from "@/components/templates/Template8";
import Template9 from "@/components/templates/Template9";
import Template10 from "@/components/templates/Template10";

export default function ResumePreview({ selectedTemplateId, resume }) {
  switch (selectedTemplateId) {
    case 1:
      return <Template1 resume={resume} />;
    case 2:
      return <Template2 resume={resume} />;
    case 3:
      return <Template3 resume={resume} />;
    case 4:
      return <Template4 resume={resume} />;
    case 5:
      return <Template5 resume={resume} />;
    case 6:
      return <Template6 resume={resume} />;
    case 7:
      return <Template7 resume={resume} />;
    case 8:
      return <Template8 resume={resume} />;
    case 9:
      return <Template9 resume={resume} />;
    case 10:
      return <Template10 resume={resume} />;
    default:
      return <Template1 resume={resume} />;
  }
}
