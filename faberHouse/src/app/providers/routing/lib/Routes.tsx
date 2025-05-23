import { AboutPageLazy } from "pages/about";
import { ContactsPageLazy } from "pages/contacts";
import { HomePageLazy } from "pages/home";
import { NewsPageLazy } from "pages/news";
import { NewsDetailPageLazy } from "pages/news-detail";
import { NotFoundPageLazy } from "pages/not-found";
import { ProjectDetailPageLazy } from "pages/project-detail";
import { ProjectsPageLazy } from "pages/projects";
import { QuestionPageLazy } from "pages/question";
import { ReviewsPageLazy } from "pages/reviews";
import { ServicesPageLazy } from "pages/services";
import { StockDetailPageLazy } from "pages/stock-detail";
import { StocksPageLazy } from "pages/stocks";
import { RouteProps } from "react-router-dom";
import { RoutePath } from "shared/config/route-path";

export const Routes: RouteProps[] = [
    {
        path: '/',
        element: <HomePageLazy/>
    },
    {
        path: RoutePath.HOME.fullPath,
        element: <HomePageLazy/>
    },
    {
        path: RoutePath.PROJECTS.fullPath,
        element: <ProjectsPageLazy/>
    },
    {
        path: RoutePath.REVIEWS.fullPath,
        element: <ReviewsPageLazy/>
    },
    {
        path: RoutePath.ABOUT.fullPath,
        element: <AboutPageLazy/>
    },
    {
        path: RoutePath.CONTACTS.fullPath,
        element: <ContactsPageLazy/>
    },
    {
        path: RoutePath.SERVICES.fullPath,
        element: <ServicesPageLazy/>
    },
    {
        path: RoutePath.STOCKS.fullPath,
        element: <StocksPageLazy/>
    },
    {
        path: RoutePath.NOT_FOUND.fullPath,
        element: <NotFoundPageLazy/>
    },
    {
        path: RoutePath.STOCK_DETAIL.fullPath,
        element: <StockDetailPageLazy/>
    },
    {
        path: RoutePath.QUESTION.fullPath,
        element: <QuestionPageLazy/>
    },
    {
        path: RoutePath.NEWS.fullPath,
        element: <NewsPageLazy/>
    },
    {
        path: RoutePath.NEWS_DETAIL.fullPath,
        element: <NewsDetailPageLazy/>
    },
    {
        path: RoutePath.PROJECT_DETAIL.fullPath,
        element: <ProjectDetailPageLazy/>
    }
]