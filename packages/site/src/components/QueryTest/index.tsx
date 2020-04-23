import React from "react";
import {gql, useQuery} from "@apollo/client";

const getUsersQuery = gql`
    query GetUsers{
        users {
            name
            email
            groupId
            id
            points
        }
    }
`;

const QueryTest: React.FC = () => {
  const { loading, error, data } = useQuery(getUsersQuery);

  if (loading) return <p>Loading ...</p>;

  return (
    <code>
      {JSON.stringify(data, null, 2)}
    </code>
  );
};

export default QueryTest;
