import React, {FC, useState} from 'react'
import styles from './List.module.scss'
import ListElement from "./ListElement";

interface Props {
    localization?: ListLocalization
}

export const List: FC<Props> = props => {

    const [listData, setListData] = useState([
        {
            // Continents: [
            //     {
            //         name: 'Europe',
            //         Countries: [
            //             {
            //                 name: 'Ukraine',
            //                 Language: [
            //                     {
            //                         name: 'Ukrainian'
            //                     }
            //                 ],
            //             },
            //             {
            //                 name: 'Turkey',
            //                 Language: [
            //                     {
            //                         name: 'Turkish'
            //                     }
            //                 ]
            //             }
            //         ],
            //     },
            //     {
            //         name: 'America',
            //     }
            // ],
            Continent: 'Europe',
            Country: 'Andorra',
            Language: 'Catalan',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        },
        {
            Continent: 'Test',
            Country: 'Test',
            Language: 'Test',
        }
    ]);

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{localization.title}</h1>

                <div className={styles.listWrapper}>
                    {listData.map((value, index) => {
                        return (
                            <div className={styles.listItem} key={index}>
                                <ListElement
                                    value={value}
                                    key={index}
                                    index={index + 1}
                                />
                            </div>
                        );
                    })}
                </div>

                {listData.length > 10 && (
                    <>
                        <div className={styles.showMoreWrapper}>
                            <div className={styles.showMore}>
                                {localization.showMore}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

const localization = {
    title: 'Countries list',
    showMore: 'Show more'
}

export interface ListLocalization {
    title: string,
    showMore: string
}
