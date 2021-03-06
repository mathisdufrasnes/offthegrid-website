/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments {
    onCreateComments {
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
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments {
    onUpdateComments {
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
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments {
    onDeleteComments {
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
export const onCreateNews = /* GraphQL */ `
  subscription OnCreateNews {
    onCreateNews {
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
export const onUpdateNews = /* GraphQL */ `
  subscription OnUpdateNews {
    onUpdateNews {
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
export const onDeleteNews = /* GraphQL */ `
  subscription OnDeleteNews {
    onDeleteNews {
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
