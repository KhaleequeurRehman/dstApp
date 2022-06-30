/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
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
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
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
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
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
