import React from "react";
import { useLazyQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_LANGUAGES = gql`
  {
      languages {
        name
      }
  }
`;
export function DelayedLanguages() {
    const [getLanguages, { loading, data }] = useLazyQuery(GET_LANGUAGES);
    if (loading) return <p>Loading ...</p>;

    if (data && data.languages) {
        console.log(data.languages);
    }

    return (
        <div>
            <button onClick={() => getLanguages()}>
                Click me to print all languages!
            </button>
            {data &&
            data.languages &&
            data.languages.map((c, i) => <div key={i}>{c.name}</div>)}
        </div>
    );
}
