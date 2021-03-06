/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      idNews
      author
      content
      date
      language
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCommentss = /* GraphQL */ `
  query ListCommentss(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idNews
        author
        content
        date
        language
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        idNews
        author
        content
        date
        language
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
      id
      idNews
      title
      titleFR
      author
      date
      content
      contentFR
      type
      typeFR
      nbComments
      nbCommentsFR
      img
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          idNews
          author
          content
          date
          language
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listNewss = /* GraphQL */ `
  query ListNewss(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idNews
        title
        titleFR
        author
        date
        content
        contentFR
        type
        typeFR
        nbComments
        nbCommentsFR
        img
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNews = /* GraphQL */ `
  query SyncNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        idNews
        title
        titleFR
        author
        date
        content
        contentFR
        type
        typeFR
        nbComments
        nbCommentsFR
        img
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
