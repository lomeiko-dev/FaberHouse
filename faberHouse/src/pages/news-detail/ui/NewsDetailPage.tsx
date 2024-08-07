import { useParams } from "react-router-dom";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { NewsBody, useGetNewsByIdQuery } from "entities/news";
import { Container } from "shared/ui/container";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";
import { Laoder } from "shared/ui/loader";
import { Error } from "shared/ui/error";

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
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>{data?.title}</h2>
        </div>
      </Container>
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
      <Container>
        <Guarantees/>
        <About/>
      </Container>
    </div>
  );
};

export default NewsDetailPage;
