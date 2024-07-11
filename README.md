# Node - Delete a Recording How-To Guide

This project serves as a guide to help you build an application with FreeClimb. View this how-to guide on [FreeClimb.com](https://docs.freeclimb.com/docs/delete-a-recording-2#section-nodejs). Specifically, the project will:

- Delete a Recording   

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the how-to guide

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this how-to guide uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | API_KEY              | API key which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                               |

3. Provide a value for the variable `recordingId` in deleteRecording.js. You can find the recording Id in the [recordings tab of the dashboard](https://www.freeclimb.com/dashboard/portal/recordings). To find out more about recordings, check out the [recording documentation](https://docs.freeclimb.com/docs/recordings-3)

## Runnning the how-to guide

1. Run the application using command:

   ```bash
   $ node deleteRecording.js
   ```


## Getting help

If you are experiencing difficulties, [contact support](https://freeclimb.com/support).
