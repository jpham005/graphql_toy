import { useQuery } from '@apollo/client';
import { gql } from './__generated__/gql';

const GET_AUTHOR = gql(/* GraphQL */ `
  query GetAuthor($id: String!) {
    author(id: $id) {
      id
      firstName
      lastName
      post {
        title
      }
    }
  }
`);

export const TestComponent = () => {
  const { loading, error, data } = useQuery(GET_AUTHOR, {
    variables: {
      id: '63f9f34db0ede8e7318ee821',
    },
  });

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>author not found</h1>;
  }

  console.log(data.author.post);

  return (
    <ul>
      {Object.entries(data.author).map((curr) => {
        return <li key={curr[0]}>{`${curr[0]}: ${curr[1]}`}</li>;
      })}
    </ul>
  );
};
