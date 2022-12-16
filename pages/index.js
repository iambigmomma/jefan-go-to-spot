import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  // server side: Below console.log will only print in terminal rather than browser console
  console.log("hi getStaticProps!!!!")
  // const data=fetch(coffeestores);
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () =>{
    console.log("banner button click")
  } 


  return (
    <div className={styles.container}>
      <Head>
        <title>Go-To-Spot by Jefan</title>
        <meta name="description" content="Jeff Fan's fvaorite spots!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          <a>Jefan Go-To-Spot</a>
        </h1> */}
        <Banner 
        buttonText="View recommendations nearby" 
        handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
        <Image src="/static/icons8-germany-96.png" width={96} height={96} alt=""></Image>
        </div>
        <div className={styles.cardLayout}>
          {
            props.coffeeStores.map((coffeeStore) => {
              return (
                <Card 
                  key={coffeeStore.id}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  href={`/coffee-store/${coffeeStore.id}`}
                  className={styles.card}
                />
              );
            })
          }

        </div>
        

      </main>

      </div>
  )
}
