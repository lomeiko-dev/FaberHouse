import { contactApiReducer } from "entities/contact";
import { newsApiReducer } from "entities/news";
import { projectApiReducer } from "entities/project-house";
import { questionApiReducer } from "entities/question";
import { reviewApiReducer } from "entities/review";
import { serviceApiReducer } from "entities/service";
import { stockApiReducer } from "entities/stock";
import { IFilterScheme } from "features/house-filter";
import { projectOfferApiReducer } from "features/project-form";
import { IOfferScheme } from "features/project-form";
import { ISortScheme } from "features/project-sort";
import { addReviewApiReducer, IReviewFormScheme } from "features/review-form";

export interface IStore {
  ProjectApi: ReturnType<typeof projectApiReducer>;
  ProjectOfferApi: ReturnType<typeof projectOfferApiReducer>;
  ReviewApi: ReturnType<typeof reviewApiReducer>;
  AddReviewApi: ReturnType<typeof addReviewApiReducer>;
  StockApi: ReturnType<typeof stockApiReducer>;
  ContactApi: ReturnType<typeof contactApiReducer>;
  ServiceApi: ReturnType<typeof serviceApiReducer>;
  QuestionApi: ReturnType<typeof questionApiReducer>;
  NewsApi: ReturnType<typeof newsApiReducer>;
  ProjectOfferReducer: IOfferScheme;
  ReviewForm: IReviewFormScheme;
  FilterReducer: IFilterScheme;
  SortReducer: ISortScheme;
}
