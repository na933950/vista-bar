import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import axios from "axios";
import Article from "../../assets/Article";
import Fade from "../../assets/Fade";

const Blog = () => {
  const [articles, setArticles] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@susansimone71"
      )
      .then((data) => {
        setArticles(data.data.items);
        console.log(data.data.items);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Fade className={styles.textContainer} scroll={true}>
        <h3>Blog</h3>
        <h1>My Medium</h1>
        <p>
          Stay up to date with my most recent blog publications by visiting my Medium account!
        </p>
        <a href="https://medium.com/@susansimone71">Medium</a>
      </Fade>
      <div className={styles.articleContainer}>
        {articles
          ? articles
              .slice(0, Math.min(3, articles.length))
              .map((article: any) => (
                <Article
                  title={article.title}
                  date={article.pubDate}
                  img={article.thumbnail}
                  link={article.link}
                ></Article>
              ))
          : null}
      </div>
    </div>
  );
};

export default Blog;
