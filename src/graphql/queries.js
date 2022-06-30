/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      fname
      lname
      org
      size
      state
      phone
      email
      info
      createdAt
      updatedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fname
        lname
        org
        size
        state
        phone
        email
        info
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
