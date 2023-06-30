import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

// export default handleAuth();

const afterCallback = (req, res, session, state) => {
    console.log("Call newrelic API", session, state);

    return session;
};

export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            res.status(error.status || 500).end();
        }
    }
});
