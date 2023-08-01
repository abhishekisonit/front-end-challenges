import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className="container text-center">
      <h1 className={styles.h1}>
        Frontend Challenges
        <a href="https://github.com/abhishekisonit/front-end-challenges">
          <img
            className={styles.github}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github repo"
          />
        </a>
      </h1>
      <h3>For practice and interview</h3>
      TODO: //link your own background picture
      <div className={styles.route}>
        <a href="https://github.com/abhishekisonit/front-end-challenges/native">
          View Challenges in
          <br />
          Javascript
        </a>
        <a href="https://github.com/abhishekisonit/front-end-challenges/react/dist">
          View Challenges in
          <br />
          React
        </a>
      </div>
    </div>
  );
};

export default Home;
