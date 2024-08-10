import { useParams } from "react-router-dom";
import style from "./styles.module.scss";
import { NewsBody, useGetNewsByIdQuery } from "entities/news";
import { Container } from "shared/ui/container";
import { Laoder } from "shared/ui/loader";
import { Error } from "shared/ui/error";
import { Page } from "../../components/page";

const NewsDetailPage = () => {
  const { id = "" } = useParams();

  const { data, isLoading, isError } = useGetNewsByIdQuery(Number(id));

  if(isLoading){
    return(
        <div className={style.page}>
            <Laoder/>
        </div>
    )
  }

  if(isError){
    return(
        <div className={style.page}>
            <Error message="Ошибка сервера."/>
        </div>
    )
  }

  return (
    <Page isDefaultComponents name={data?.title || 'Ошибка'}>
      <div className={style.body_wrap}>
        <Container>
          <p className={style.descr}>{data?.description}</p>
          <div className={style.body}>
            {data?.body.map((section) => (
              <NewsBody {...section} />
            ))}
          </div>
        </Container>
      </div>
    </Page>
  );
};

export default NewsDetailPage;
