import React from "react";
import {useLazyQuery} from "@apollo/client";
import gql from "graphql-tag";
import {DelayedLanguages} from "./Languages";

const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
    }
  }
`;

export function DelayedCountries() {
    const [getCountries, {loading, data}] = useLazyQuery(GET_COUNTRIES);
    if (loading) return <p>Loading ...</p>;

    if (data && data.countries) {
        console.log(data.countries);
    }

    return (
        <div>
            <button onClick={() => getCountries()}>
                Click me to print all countries!
            </button>
            {data &&
            data.countries &&
            data.countries.map((c, i) =>
                <div key={i}>{c.name}
                    <DelayedLanguages/>
                </div>
            )}
        </div>
    );
}
