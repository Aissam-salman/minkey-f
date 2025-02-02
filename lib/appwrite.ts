import {Client, Storage} from "appwrite";

const clientAppWrite = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('679a6ca400138286c2b9');

const storage = new Storage(clientAppWrite);

const BUCKET_ID_PROFILE_IMG = "679fa2e300062e7146b9";

export {clientAppWrite, storage, BUCKET_ID_PROFILE_IMG};