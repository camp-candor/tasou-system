import { GithubModel } from "../github.model";
import GithubBit from "../fce/github.bit";
import State from "../../99.core/state";

export const initGithub = (cpy: GithubModel, bal: GithubBit, ste: State) => {
    debugger
    return cpy;
};


export const listGithub = async (cpy: GithubModel, bal: GithubBit, ste: State) => {
    const OWNER = 'elliotbradly';
    const REPO = 'mythos.tattoo';
    const PATH = 'src/data/post';
    const BRANCH = 'main';

    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}?ref=${BRANCH}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch directory contents: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (bal.slv) {
            bal.slv({ gitBit: { idx: "list-github", lst: data } });
        }


    } catch (error) {
        console.error('Error:', error.message);
    }

    return cpy;
};

export const readGithub = async (cpy: GithubModel, bal: GithubBit, ste: State) => {
    
    bal.src = `https://github.com/elliotbradly/mythos.tattoo/blob/main/src/data/post/cihli.md`

    
    if (!bal.src) {
        console.error("No src provided for readGithub");
        if (bal.slv) bal.slv({ gitBit: { idx: "read-github-error", src: "No source URL provided" } });
        return cpy;
    }

    // expecting a full github url
    // https://github.com/elliotbradly/mythos.tattoo/blob/main/src/data/post/cihli.md


    const url = new URL(bal.src);
    const pathParts = url.pathname.split('/');

    const owner = pathParts[1];
    const repo = pathParts[2];
    const path = pathParts.slice(5).join('/'); // remove /blob/main

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch file content: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.content) {
            const content = Buffer.from(data.content, 'base64').toString('utf8');
            if (bal.slv) {
                bal.slv({ gitBit: { idx: "read-github", dat: content, src: bal.src } });
            }
        } else {
            throw new Error('Content not found in response');
        }

    } catch (error) {
        console.error('Error:', error.message);
        if (bal.slv) bal.slv({ gitBit: { idx: "read-github-error", src: error.message } });
    }

    return cpy;
};


export const updateGithub = (cpy: GithubModel, bal: GithubBit, ste: State) => {


    //const fetch = require('node-fetch');

    const OWNER = 'fictiq';
    const REPO = 'jonwilliamkershaw';
    const PATH = 'src/pages/terms.md';
    const BRANCH = 'main';

    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}?ref=${BRANCH}`;

    fetch(url, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
        }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to fetch file: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            if (data.content) {
                const content = Buffer.from(data.content, 'base64').toString('utf8');
                console.log(content);
            } else {
                throw new Error('Content not found in response');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });



    return cpy;
};


export const commitGithub = async (cpy: GithubModel, bal: GithubBit, ste: State) => {


    //const fetch = require('node-fetch');
    fetch

    const TOKEN = process.env.GITHUB_TOKEN;


    const OWNER = 'elliotbradly';
    const REPO = 'mythos.tattoo';
    const PATH = 'src/pages/terms.md';
    const BRANCH = 'main';
    const NEW_CONTENT = 'Update me to something so amazing it will never be forgotten';
    const COMMIT_MESSAGE = 'Update me';

    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`;

    if (!TOKEN) {
        console.error('GitHub token not found. Please set GITHUB_TOKEN environment variable.');
        return cpy;
    }

    try {
        // Get the current file SHA
        const getFileResponse = await fetch(`${url}?ref=${BRANCH}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${TOKEN}`,
            }
        });

        let sha = null;
        if (getFileResponse.status === 404) {
            // File doesn't exist, create it
        } else if (getFileResponse.ok) {
            const fileData = await getFileResponse.json();
            sha = fileData.sha;
        } else {
            throw new Error(`Failed to fetch file: ${getFileResponse.status} ${getFileResponse.statusText}`);
        }

        const contentBase64 = Buffer.from(NEW_CONTENT).toString('base64');

        const body: any = {
            message: COMMIT_MESSAGE,
            content: contentBase64,
            branch: BRANCH,
        };

        if (sha) {
            body.sha = sha;
        }

        // Update or create the file
        const updateFileResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!updateFileResponse.ok) {
            const err = await updateFileResponse.json();
            throw new Error(`Failed to commit file: ${updateFileResponse.status} ${updateFileResponse.statusText} - ${JSON.stringify(err)}`);
        }

        const data = await updateFileResponse.json();
        console.log('File committed successfully:', data.commit.html_url);

    } catch (error) {
        console.error('Error:', error.message);
    }

    return cpy;
};


var flag = 0;

export const writeGithub = async (cpy: GithubModel, bal: GithubBit, ste: State) => {


    //  if (flag == 1) {

    //     bal.slv({ gitBit: { idx: "write-github", src: 'in progress' } });
    //     return
    // }

    setTimeout(() => {

        flag = 0;
    }, 33333)

    flag = 1

    const TOKEN = process.env.GITHUB_TOKEN;

    var Chance = require('chance');

    // Instantiate Chance so it can be used
    var chance = new Chance();

    var WORD = chance.word({ length: 5 })

    const now = new Date();

    // 2. Convert it to the ISO 8601 string format in UTC.
    const NOW = now.toISOString();

    const OWNER = 'elliotbradly';
    const REPO = 'mythos.tattoo';
    const PATH = `src/data/post/${WORD}.md`;
    const BRANCH = 'main';
    const NEW_CONTENT = `---
publishDate: ${NOW}
author: John Smith
title: ${WORD}
excerpt: Start your web journey with AstroWind – harness Astro and Tailwind CSS for a stunning site. Explore our guide now.
image: https://images.unsplash.com/photo-1516996087931-5ae405802f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: Tutorials
tags:
  - astro
  - tailwind css
metadata:
  canonical: https://mythos.tattoo/${WORD}
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Nostra torquent consequat volutpat aliquet neque

Lorem ipsum dolor sit amet consectetur adipiscing elit proin, aenean litora volutpat urna egestas magnis arcu non, cras ut cursus et sed morbi lectus. Integer faucibus sagittis eu nunc urna aliquet a laoreet torquent, suspendisse penatibus nulla sollicitudin congue rutrum dictum. Ornare mi habitasse fermentum phasellus dui et morbi litora sodales dictum id erat, nibh purus class ligula aenean lectus venenatis euismod cras torquent ac. Senectus sagittis conubia hendrerit at egestas porta venenatis nisi metus gravida tempor, aenean facilisis nisl ante facilisi lacus integer hac iaculis purus. Scelerisque libero torquent egestas curae tellus viverra inceptos imperdiet urna, porta suspendisse interdum primis odio morbi tempor commodo dictumst, suscipit ornare habitasse semper feugiat cras quisque lobortis.
`;
    const COMMIT_MESSAGE = 'feat: create glory.md post';

    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`;

    if (!TOKEN) {
        console.error('GitHub token not found. Please set GITHUB_TOKEN environment variable.');
        return cpy;
    }

    try {
        // Get the current file SHA
        const getFileResponse = await fetch(`${url}?ref=${BRANCH}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${TOKEN}`,
            }
        });

        let sha = null;
        if (getFileResponse.status === 404) {
            // File doesn't exist, create it
        } else if (getFileResponse.ok) {
            const fileData = await getFileResponse.json();
            sha = fileData.sha;
        } else {
            throw new Error(`Failed to fetch file: ${getFileResponse.status} ${getFileResponse.statusText}`);
        }

        const contentBase64 = Buffer.from(NEW_CONTENT).toString('base64');

        const body: any = {
            message: COMMIT_MESSAGE,
            content: contentBase64,
            branch: BRANCH,
        };

        if (sha) {
            body.sha = sha;
        }

        // Update or create the file
        const updateFileResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!updateFileResponse.ok) {
            const err = await updateFileResponse.json();
            throw new Error(`Failed to commit file: ${updateFileResponse.status} ${updateFileResponse.statusText} - ${JSON.stringify(err)}`);
        }

        const data = await updateFileResponse.json();
        console.log('File committed successfully:', data.commit.html_url);
        flag = 0

    } catch (error) {
        console.error('Error:', error.message);
    }

    return cpy;
};

