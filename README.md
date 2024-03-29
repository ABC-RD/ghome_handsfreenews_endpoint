# Actions on Google: Morning Briefing - Hand Free News Experiment
Google actions endpoint + API.ai for Hands Free News project

## Setup Instructions

### Pre-requisites
 1. API.AI account: [https://api.ai](https://api.ai)
 2. Google Cloud project: [https://console.cloud.google.com/project](https://console.cloud.google.com/project)

See the developer guide and release notes at [https://developers.google.com/actions/](https://developers.google.com/actions/) for more details.

### Steps
1. Use the [Actions on Google Console](https://console.actions.google.com) to add a new project with a name of your choosing.
1. Click "Use API.AI" and then "Create Actions on API.AI".
1. Click "Save" to save the project.
1. Click on the gear icon to see the project settings.
1. Select "Export and Import".
1. Select "Restore from zip". Follow the directions to restore from the NumberGenie.zip file in this repo.
1. Host the wav files in the audio folder on a web server and modify the URLs in the index.js file.
1. Deploy the webhook function to your preferred hosting environment
(we recommend [Google Cloud Functions](https://cloud.google.com/functions/docs/tutorials/http)).
1. In the Fulfillment page of the API.AI console, enable Webhook, set the URL to the hosting URL, then save.
1. Open API.AI's Integrations page, open the Settings menu for Actions on Google, then click Test.
1. Click View to open the Actions on Google simulator.
1. Type "Talk to my [google action name]" in the simulator, or say "OK Google, talk to [my test app]" to any Actions on Google enabled device signed into your developer account.

For more detailed information on deployment, see the [documentation](https://developers.google.com/actions/samples/).