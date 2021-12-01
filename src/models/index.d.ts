import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Language {
  EN = "EN",
  FR = "FR"
}



type CommentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comments {
  readonly id: string;
  readonly idNews?: string;
  readonly author?: string;
  readonly content?: string;
  readonly date?: string;
  readonly language?: Language | keyof typeof Language;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comments, CommentsMetaData>);
  static copyOf(source: Comments, mutator: (draft: MutableModel<Comments, CommentsMetaData>) => MutableModel<Comments, CommentsMetaData> | void): Comments;
}

export declare class News {
  readonly id: string;
  readonly idNews: number;
  readonly title: string;
  readonly titleFR: string;
  readonly author: string;
  readonly date?: string;
  readonly content?: string;
  readonly contentFR?: string;
  readonly type?: string;
  readonly typeFR?: string;
  readonly nbComments?: number;
  readonly nbCommentsFR?: number;
  readonly Comments?: (Comments | null)[];
  readonly img?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<News, NewsMetaData>);
  static copyOf(source: News, mutator: (draft: MutableModel<News, NewsMetaData>) => MutableModel<News, NewsMetaData> | void): News;
}