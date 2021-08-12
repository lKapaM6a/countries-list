import React, {FC, useState, useEffect, useCallback} from 'react'
import {useLazyQuery} from '@apollo/client'
import gql from 'graphql-tag'
import styles from './List.module.scss'

interface Props {
    localization?: ListLocalization
}

const GET_CONTINENTS = gql`
  {
     continents {
        code
        name
        countries {
          code
          name
          languages {
            code
            name
          }
        }
    }
  }
`;

export const DelayedList: FC<Props> = props => {
    const [getContinent, {loadingContinents, data}] = useLazyQuery(GET_CONTINENTS)
    const [activeContinent, setActiveContinent] = useState()
    const [activeCountry, setActiveCountry] = useState()

    const toggleContinent = useCallback(code => {
        setActiveContinent(prev => {
            if (prev === code) {
                return null
            }
            return code
        })

        // remove opened Country if closed Continent
        setActiveCountry(prev => {
            return null
        })
    }, []);

    const toggleCountry = useCallback(code => {
        setActiveCountry(prev => {
            if (prev === code) {
                return null
            }
            return code
        })
    }, []);

    useEffect(() => {
        getContinent()
    }, []);

    return (
        <>
            {!data ? (
                    <>
                        <div className={styles.loaderBg}>
                            <div className={styles.loaderWrapper}>
                                <svg className={styles.loaderIcon} viewBox="25 25 50 50">
                                    <circle className={styles.loaderPath} cx="50" cy="50" r="20" fill="none" strokeWidth="2"
                                            strokeMiterlimit="10"/>
                                </svg>
                            </div>
                        </div>
                    </>
                ) :
                (
                    <>
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>{localization.title}</h1>

                            <div className={styles.listWrapper}>
                                {data?.continents?.map(continent => (
                                    <div className={styles.listItem} key={continent.code}>
                                        <span
                                            onClick={() => toggleContinent(continent.code)}
                                            className={`${styles.listName} 
                                            ${continent.name.length > 0 ? `${styles.toggle}` : ''}
                                            ${continent.code === activeContinent ? `${styles.opened}` : ''}`}
                                            title={continent.name}>
                                            {continent.name}
                                        </span>

                                        {continent.code === activeContinent && continent.countries.map(country => (
                                            <div key={country.code} className={styles.listItem}>
                                                <span
                                                    onClick={() => toggleCountry(country.code)}
                                                    className={`${styles.listName}
                                                    ${country.languages.length > 0 ? `${styles.toggle}` : ''}
                                                    ${country.code === activeCountry ? `${styles.opened}` : ''}`}
                                                    title={country.name}>
                                                    {country.name}
                                                </span>

                                                {country.code === activeCountry && country.languages.map(language => (
                                                    <div key={language.code} className={styles.listItem}>
                                                        <span className={styles.listName} title={language.name}>
                                                            {language.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
        </>
    );
}

const localization = {
    title: 'Continent/Countries/Language list'
}

export interface ListLocalization {
    title: string
}
