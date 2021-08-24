import React, { Component } from 'react';
import Axios from 'axios';
import baseURL from '../api/Github';
import RepoCard from './RepoCard.js'
import { Grid } from '@material-ui/core';

export default class GitHubCards extends Component {
    Title = [];
    state = {
        repo: [],
        language: [],
    };

    async componentDidMount() {
        const api_key = process.env.REACT_APP_API_KEY;

        let repo = [
            baseURL(`writ`),
            baseURL(`writ_server`),
            baseURL(`Coin-Tracker`),
            baseURL(`flask_web_scraper`),
        ];

        await Axios.get("https://github-lang-deploy.herokuapp.com/").then(
            async (res) => await this.setState({ language: res.data })
        );
        repo.map(
            async (url) =>
                await Axios.get(url, {
                    headers: {
                        Authorization: `token ${api_key}`,
                    },
                }).then(async (res) => {
                    await this.setState({
                        repo: [...this.state.repo, res.data],
                    });
                })
        );
    }

    render() {
        const { repo, language } = this.state;
        repo.sort((a,b) =>
            a.stargazers_count > b.stargazers_count
                ? -1
                : b.stargazers_count > a.stargazers_count
                ? 1
                : 0
        );
        return (
            <Grid container spacing={1}>
                {repo.map((data, i) => (
                    <RepoCard repo={data} key={i} language={language} />
                ))}
            </Grid>
        );
    }
}
