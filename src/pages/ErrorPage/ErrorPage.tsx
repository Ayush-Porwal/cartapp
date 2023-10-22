import { useRouteError } from 'react-router-dom';

import * as classes from './ErrorPage.module.scss';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page" className={classes.errorContainer}>
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>{error.statusText || error.message}</p>
            </div>
        </div>
    );
}
