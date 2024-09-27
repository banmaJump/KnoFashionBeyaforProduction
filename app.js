const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const connection = require('./src/services/blogs/models/blog_server.js'); // MySQL接続
const blogRouter = require('./src/services/blogs/controllers/controller.js'); // ルーター

const app = express();

// CORS設定
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// ミドルウェア設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静的ファイル提供
app.use('/static', express.static(path.join(__dirname, 'public/static')));
app.use('/slick', express.static(path.join(__dirname, 'public/slick')));
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use(express.static(path.join(__dirname, 'public')));

// EJS設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/services/blogs/views'));

// APIルーター設定
app.use('/api', blogRouter);

// EJSルート定義
app.get('/beneeeeeeeeefit', (req, res) => {
  res.render('beneeeeeeeeefit');
});

// クライアントサイドのルートを処理
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// サーバーの起動
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

