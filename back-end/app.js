var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const usuarioRouter = require('./routes/usuario');
const cupomRouter = require('./routes/cupom');
const vendasRouter = require('./routes/vendas');

// Conexão com o banco de dados
const db = require('./config/database');
db('mongodb://127.0.0.1:27017/crud-angular-new');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const produto = require('./routes/produto');
app.use('/produto', produto);

const categoria = require('./routes/categoria');
app.use('/categoria', categoria);

app.use('/usuario', usuarioRouter);
app.use('/cupom', cupomRouter);
app.use('/vendas', vendasRouter);


module.exports = app;
