const express = require('express');
const queryString = require('query-string');

const axiosInstance = require('./axiosInstance');
const { genericParameters } = require('./constants');

const app = express();
const port = 8080;

const baseApiUrl = '/api/v1';

app.get(baseApiUrl, (req, res) => res.send('Hello World'));

app.get(`${ baseApiUrl }/list`, (req, res) => {
    const params = queryString.stringify({ ...genericParameters, ...req.query });
    axiosInstance.get(`/${ req.query.resourceName }/?${ params }`).then(resp => {
        res.send(resp.data);
    }).catch(error => {
        res.send(error);
    });
})

app.get(`${ baseApiUrl }/detail`, (req, res) => {
    const params = queryString.stringify({ ...genericParameters, ...req.query });
    const { resourceName, resourceId, typeId } = req.query;
    axiosInstance.get(`/${ resourceName }/${ typeId }-${ resourceId }/?${ params }`).then(resp => {
        res.send(resp.data);
    }).catch(error => {
        res.send(error);
    });
});

app.listen(port, () => console.log(`Marvel heoes backend listening on port ${ port }`));

