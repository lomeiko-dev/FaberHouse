import { Page } from "pages/components/page";
import { RoutePath } from "shared/config/route-path";
import { BlockTest } from "shared/components/block-test";
import { useParams } from "react-router-dom";
import { ProjectDetail, useGetProjectByIdQuery } from "entities/project-house";
import { BlockSection } from "shared/ui/block-section";
import { BuildForm } from "features/build-form";
import { useWindowSize } from "@reactuses/core";
import { Laoder } from "shared/ui/loader";
import { Error } from "shared/ui/error";

const ProjectDetailPage = () => {
  const { id = "" } = useParams();

  const { data, isLoading, isError } = useGetProjectByIdQuery(Number(id) || 0);
  const {width} = useWindowSize()

  return (
    <Page
      headerChildren={width > 1320 && <BlockTest />}
      isDefaultComponents
      sections={[RoutePath.PROJECTS.name || "error", "Дома из бруса"]}
      name={data?.title || 'error'}
    >
      <BlockSection>
        {isError && <Error message="Ошибка сервера."/>}
        {isLoading && <Laoder/>}
       {data &&  <ProjectDetail data={data} slotForm={<BuildForm/>}/>}
      </BlockSection>
    </Page>
  );
};

export default ProjectDetailPage;
