import styles from './banner.module.css';


const Banner = (props) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Jefan Go-To-Spot </span>
            <span className={styles.title2}>in Germany</span>
        </h1>
        <p className={styles.subTitle}>Explore the best spot in the Germany</p>
        <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
    </div>
}

export default Banner;