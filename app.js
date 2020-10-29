const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// onProduction
const helmet = require('helmet');
const hpp = require('hpp');

dotenv.config();

class App {
    constructor() {
        this.app = express();

        // db 접속
        this.dbConnection();

        // 미들웨어 셋팅
        this.setMiddleWare();

        // 세션 셋팅
        this.setSession();

        // 패스포트 세팅
        this.setPassport();

        // 로컬 변수
        this.setLocals();

        // 라우팅
        this.getRouting();

        // 404 페이지를 찾을 수 없음
        this.status404();
    }

    dbConnection() {
        mongoose.Promise = global.Promise;

        mongoose.set('useCreateIndex', true);

        mongoose
            .connect(
                'mongodb+srv://' +
                    process.env.DB_USER +
                    ':' +
                    process.env.DB_PASSWORD +
                    '@node-react-oiru3.mongodb.net/node-react?retryWrites=true&w=majority',
                { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
            )
            .then(() => console.log('Successfully connection to MongoDB'))
            .catch((err) => console.log(`'connection error: '${err}`));
    }

    setMiddleWare() {
        if (process.env.NODE_ENV === 'production') {
            this.app.set('trust proxy', 1);
            this.app.use(logger('combined'));
            this.app.use(helmet());
            this.app.use(hpp());
            this.app.use(
                cors({
                    origin: [],
                    credentials: true,
                })
            );
        } else {
            this.app.use(logger('dev'));
            this.app.use(
                cors({
                    origin: [],
                    credentials: true,
                })
            );
        }

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser(process.env.COOKIESECRET));
    }

    setSession() {}

    setPassport() {}

    setLocals() {
        this.app.use((req, _, next) => {
            this.app.locals.req_path = req.path;
            this.app.locals.req_query = req.query;

            next();
        });
    }

    getRouting() {
        this.app.use(require('./routes'));
    }

    status404() {
        this.app.use((req, res, _) => {
            res.status(404).send({ success: false });
        });
    }

    errorHandler() {
        if (process.env.NODE_ENV == 'production') {
            this.app.use((err, req, res, _) => {
                res.status(500).send({ success: false });
            });
        }
    }
}

module.exports = new App().app;
