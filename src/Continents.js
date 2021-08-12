import React from "react";
import {useLazyQuery} from "@apollo/client";
import gql from "graphql-tag";
import {DelayedCountries} from "./Countries";

const GET_CONTINENTS = gql`
  {
     continents {
        code
    }
  }
`;

export function DelayedContinents() {
    const [getContinent, {loadingContinents, data}] = useLazyQuery(GET_CONTINENTS);
    if (loadingContinents) return <p>Loading ...</p>;

    if (data && data.continents) {
        console.log(data.continents);
    }

    return (
        <div>
            <button onClick={() => getContinent()}>
                Click me to print all Continents!
            </button>
            {data &&
            data.continents &&
            data.continents.map((c, i) =>
                <div key={i}>
                    {c.code}

                    <DelayedCountries/>
                </div>
            )}
        </div>
    );
}
