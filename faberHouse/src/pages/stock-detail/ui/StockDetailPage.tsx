import { useNavigate, useParams } from "react-router-dom";
import { useGetStockByIdQuery } from "entities/stock";
import { StockPreview } from "./components/preview/StockPreview";
import { Page } from "../../components/page";
import { Error } from "shared/ui/error";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { RoutePath } from "shared/config/route-path";
import { Skeleton } from "./components/preview/Skeleton";
import { BlockSection } from "shared/ui/block-section";

const StockDetailPage = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError, error } = useGetStockByIdQuery(Number(id));
  const navigate = useNavigate();

  if (isError) {
    if ((error as FetchBaseQueryError).status === 404) {
      navigate(RoutePath.NOT_FOUND.path);
    }

    return (
      <div>
        <Error message="Ошибка сервера" />
      </div>
    );
  }

  return (
    <Page isDefaultComponents name={data?.title || "Ошибка"}>
      <BlockSection>
      {isLoading && <Skeleton/>}
      {data && <StockPreview {...data} />}
      </BlockSection>
    </Page>
  );
};

export default StockDetailPage;
