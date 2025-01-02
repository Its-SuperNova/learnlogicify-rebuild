import React from 'react'
import styles from "./styles.module.css"
import Header from "@/app/components/common/HeaderDark";
import Description from "./Description"
import Grid from "./grid"
const CoursePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Description />
        <Grid />
      </div>
    </div>
  )
}

export default CoursePage
