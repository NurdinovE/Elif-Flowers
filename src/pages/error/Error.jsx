import React from 'react';

import cls from "./Error.module.scss"

const Error = () => {
    return (
        <div className={cls.section}>
            <h1 className={cls.error}>404</h1>
            <div className={cls.page}>Oops!!! The page you are looking for is not found</div>
            <a className={cls.back_home} href="/">Back to home</a>
        </div>
    );
};

export default Error;