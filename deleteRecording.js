require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeclimb = freeclimbSDK(accountId, authToken)

// Users must provide the recordingId for the recording they wish to delete
freeclimb.api.recordings.delete(recordingId).catch (err => {/** Catch Errors */ })
