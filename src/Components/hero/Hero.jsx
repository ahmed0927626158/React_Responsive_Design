import React from 'react'
import styles from "./hero.module.css"
import { AiOutlineSearch } from 'react-icons/ai'
function Hero() {
  return (
    <div className={styles.hero}>
        <form>
            <div className={styles.text}>
                <label>Where</label>
                <input className={styles.intput_text} type='text' placeholder='Search location'/>

            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label>From</label>
                <input type='date'></input>
            </div>
            <div className={styles.until}>
                <span className={styles.border}></span>
                <label>Until</label>
                <input type='date'></input>
            </div>
            <div className={styles.search_btn}>
                <AiOutlineSearch className={styles.icon}></AiOutlineSearch>
                <button className={styles.btn}>Search for cars</button>

            </div>
        </form>

    </div>
  )
}

export default Hero