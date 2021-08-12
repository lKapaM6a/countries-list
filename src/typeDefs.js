import {gql} from "@apollo/client";

export const typeDefs = gql`
  type Continent {
    code: String
    name: String
    countries: [Country]
  }
  type Country {
    code: String
    name: String
    native: String
    phone: String
    continent: Continent
    currency: String
    languages: [Language]
    emoji: String
    emojiU: String
    states: [State]
  }
  type State {
    code: String
    name: String
    country: Country
  }
  type Language {
    code: String
    name: String
    native: String
    rtl: Int
  }
  type Query {
    continents: [Continent]
    continent(code: String): Continent
    countries: [Country]
    country(code: String): Country
    languages: [Language]
    language(code: String): Language
  }
`;
