import { Page } from "pages/components/page";
import style from "./styles.module.scss";
import { RoutePath } from "shared/config/route-path";
import { BlockTest } from "shared/components/block-test";
import { useParams } from "react-router-dom";
import { ProjectDetail, useGetProjectByIdQuery } from "entities/project-house";
import { BlockSection } from "shared/ui/block-section";

const ProjectDetailPage = () => {
  const { id = "" } = useParams();

  const { data, isLoading, isError } = useGetProjectByIdQuery(Number(id) || 0);

  return (
    <Page
      headerChildren={<BlockTest />}
      isDefaultComponents
      sections={[RoutePath.PROJECTS.name || "error", "Дома из бруса"]}
      name={data?.title || 'error'}
    >
      <BlockSection>
       {data &&  <ProjectDetail data={data}/>}
      </BlockSection>
    </Page>
  );
};

export default ProjectDetailPage;
