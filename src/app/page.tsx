import styles from "../app/styles/page.module.css";
import "../app/styles/general.sass"
import HomePage from '../components/homepage'


async function getPropsFromServer() {
  const data = await import('../../public/data/data.json')
  return {
    data: data.default,
  };
}

export default async function Home() {
  const { data } = await getPropsFromServer();

  return (
    <div className={styles.page}>
    
      <HomePage data={data} />
    
    </div>
  );
}

