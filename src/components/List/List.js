import React, {FC, useState} from 'react'
import styles from './List.module.scss'

interface Props {
    localization?: ListLocalization
}

export const List: FC<Props> = props => {

    const [activeContinent, setActiveContinent] = useState()
    const [activeCountry, setActiveCountry] = useState()

    const continents = [
        {
            id: 1,
            name: 'Europe',
            countries: [
                {
                    id: 1,
                    name: 'Ukraine',
                    languages: [
                        {
                            id: 1,
                            name: 'Ukrainian'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'France',
                    languages: [
                        {
                            id: 2,
                            name: 'French'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Germany',
                    languages: [
                        {
                            id: 3,
                            name: 'German'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Italy',
                    languages: [
                        {
                            id: 4,
                            name: 'Italian'
                        }
                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'Asia',
            countries: [
                {
                    id: 5,
                    name: 'China',
                    languages: [
                        {
                            id: 5,
                            name: 'Chinese'
                        }
                    ]
                }
            ]
        },
    ]

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{localization.title}</h1>

                <div className={styles.listWrapper}>

                    {continents.map(continent => (
                        <>
                            <div className={styles.listItem} key={continent.id}>
                                <div className={`${styles.listName} ${styles.toggle}`}
                                     onClick={() => setActiveContinent(continent.id)}>
                                    {continent.name}
                                </div>

                                {continent.countries.map(country => (
                                    <div className={styles.listItem}
                                         key={country.id}>
                                        <div className={`${styles.listName} ${styles.toggle}`}
                                             onClick={() => setActiveCountry(country.id)}>
                                            {country.name}
                                        </div>

                                        {country.languages.map(lang => (
                                            <div className={styles.listItem} key={lang.id}>
                                                <div className={styles.listName}>
                                                    {lang.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

const localization = {
    title: 'Countries list'
}

export interface ListLocalization {
    title: string
}
