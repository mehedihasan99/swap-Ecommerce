
import styles from '../styles/Home.module.css'
import NavBar from "../pages/NavBar"
import Hero from '../pages/Hero'
import CardIcon from './IconCard'
import CardItem from './CardItem'
import Review from './Review'
import Footer from './Footer'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <Hero/>
      <CardIcon/>
      <CardItem/>
      <Review/>
      <Footer/>
    </div>
  )
}
