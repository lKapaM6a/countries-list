import React, {FC, useState} from 'react'
import styles from './List.module.scss'
import ListElement from "./ListElement";

interface Props {
    localization?: ListLocalization
}

export const List: FC<Props> = props => {

    const [listData, setListData] = useState([
        {
            Continents: [
                {
                    name: 'Europe',
                    Countries: [
                        {
                            name: 'Ukraine',
                            Language: [
                                {
                                    name: 'Ukrainian'
                                }
                            ],
                        },
                        {
                            name: 'Turkey',
                            Language: [
                                {
                                    name: 'Turkish'
                                }
                            ]
                        }
                    ],
                },
                {
                    name: 'America',
                }
            ],
            Continent: 'Europe',
            Country: 'Andorra',
            Language: 'Catalan',
        },
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
            </div>
        </>
    )
}

const localization = {
    title: 'Countries list',
}

export interface ListLocalization {
    title: string,
}
