'use strict';
const ApiAiApp = require('actions-on-google').ApiAiApp;

exports.main = (req, res) => {
    const app = new ApiAiApp({request: req, response: res});
    const COLLECTION_TYPE = 'play_collection';
    const EPISODE_NUMBER = 'play_episode';
    const HEADLINE_NUMBER = 'play_headline';
    const DETAILS = 'play_detail';
    const ENTITY_DETAIL = 'details';

    function responseHandler (app) {
        // intent contains the name of the intent you defined in the Actions area of API.AI
        let intent = app.getIntent();
        switch (intent) {
            case COLLECTION_TYPE:
                let collection = app.getArgument(COLLECTION_TYPE);

                var ssml_message = '<speak>Here\'s your morning briefing. <audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8557886/v2/01_intro.mp3\"></audio>' +
                    '<audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8557932/v1/02_cycloneDebbie.mp3\"></audio>' +
                    '<audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8557982/v1/03_onenationStrike.mp3\"></audio>' +
                    '<audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8557986/v1/04_abuseDisabled.mp3\"></audio>' +
                    '<audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8557988/v1/05_flouride.mp3\"></audio>' +
                    '<audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8557998/v1/06_frenzalRhomb.mp3\"></audio>' +
                    '<break time=\"1s\"/> This concludes your morning briefing. Do you have more questions?' +
                    '</speak>';

                if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                    app.askWithList(ssml_message,
                        app.getIncomingList());
                } else {
                    app.ask(ssml_message);
                }

                break;

            case EPISODE_NUMBER:
                let episode = app.getArgument(EPISODE_NUMBER);
                app.ask('You said ' + episode);
                break;
            case DETAILS:
                let details = app.getContextArgument(DETAILS, ENTITY_DETAIL);
                if(details.value == "cyclone debbie"){
                    app.ask('<speak>Here\'s a segment from ABC Breakfast. <audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8558270/v1/abb-2017-03-17-preparing-for-tropical-cyclone-debbie.mp3\"></audio></speak>');
                }
                if(details.value == "one nation"){

                    var onenation_message = '<speak>' +
                        '<p>Here\'s an article about the One Nation strike over sugarcane.</p><break time="1s"/>.' +
                        '<p>It is the final sitting week before the May budget, but the Coalition\'s attempts to pass legislation could be derailed because of an unrelated dispute involving Queensland sugarcane growers.</p>' +
                        '<p>One Nation senators say they will effectively go on strike until a dispute involving Queensland sugarcane growers, sugar mill Wilmar and sugar marketer QSL is resolved.</p>' +
                        '<p>Arriving in Canberra, Pauline Hanson said she was just standing up for the people who voted for her.</p>' +
                        '<p>\"I\'ve made a stance that myself and One Nation senators will not be supporting any Government legislation or any legislation before Parliament until the Wilmar dispute is sorted between the cane growers and Wilmar,\", she said.<break time=\"1s\"/>Senator Hanson wants the Federal Government to intervene to help growers have more of a say in the marketing and sale of their crop.<break time=\"1s\"/>\"I believe that they need to actually have a code of conduct, a mandatory code of conduct,", she said.</p>' +
                        '</speak>';
                    app.ask(onenation_message);
                    //if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                    //    app.askWithCarousel(onenation_message,
                    //         app.getIncomingRichResponse()
                    //         );
                    //   } else {
                    //     app.ask(onenation_message);
                    //   }

                }

                if(details.value == "disabled people"){
                    app.ask('<speak>Here\'s a segment from Four corners. <audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8558308/v1/fourcorners-2017-03-17-fighting-the-system.mp3\"></audio></speak>');
                }
                if(details.value == "flouride"){
                    app.ask('<speak>Here\'s a segment from ABC Radio. <audio src=\"https://abc-wcms-media-prod.s3-ap-southeast-2.amazonaws.com/media/8558304/v1/aae-2017-03-27-fluoride.mp3\"></audio></speak>');
                }
                if(details.value == "frenzal rhomb"){
                    app.ask('<speak><p></p></speak>');
                }
                break;
        }
    }
// you can add the function name instead of an action map
    app.handleRequest(responseHandler);

}