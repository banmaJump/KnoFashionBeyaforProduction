import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleView = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/article/${articleId}`);
        setArticle(response.data.article);
        setLoading(false);
      } catch (err) {
        setError('記事の読み込みに失敗しました。');
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!article) {
    return <p>記事が見つかりませんでした。</p>;
  }

  const ArticleContent = React.lazy(() => import(`../data/${String(articleId).padStart(5, '0')}.jsx`));

  return (
    <div className="article-view">
      <h1>{article.title}</h1>
      <h2>{article.subtitle}</h2>
      <p>Brand: {article.brand_name}</p>
      <p>Collection: {article.collection_name}</p>
      <React.Suspense fallback={<p>コンテンツを読み込み中...</p>}>
        <ArticleContent />
      </React.Suspense>
    </div>
  );
};

export default ArticleView;