import React, {useState, useCallback} from 'react'
import styles from './List.module.scss'

const TopicCard = ({value, index}) => {

    const [activeState, setActiveState] = useState(false);
    const [activeStateDepth, setActiveStateDepth] = useState(false);

    const toggleState = useCallback(() => {
        setActiveState(prev => {
            !prev && setActiveStateDepth(false)
            return !prev
        })
    }, [])

    const toggleStateDepth = useCallback(() => {
        setActiveStateDepth(prev => {
            return !prev
        })
    }, [])

    return (
        <>
            <div className={`${styles.listName} ${styles.toggle} ${activeState ? `${styles.opened}` : ''}`}
                 onClick={toggleState}>
                {value.Continent}
            </div>

            {activeState && (
                <>
                    <div className={styles.listItem}>
                        <div
                            className={`${styles.listName} ${styles.toggle} ${activeStateDepth ? `${styles.opened}` : ''}`}
                            onClick={toggleStateDepth}>
                            {value.Country}
                        </div>

                        {activeStateDepth && (
                            <>
                                <div className={styles.listItem}>
                                    <div className={styles.listName}>
                                        {value.Language}
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </>
            )}
        </>
    );
};

export default TopicCard;
