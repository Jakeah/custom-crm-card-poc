const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections: [
        {
          "type": "crm::report",
          "reportId": 70109412 
         },
         {
          "type": "crm::report",
          "reportId": 70109415
         },
         {
          "type": "descriptionList",
          "items": [
            {
              "label": "Recommended Promotion",
              "value": `abc-123 promotion \   
              some new line \  
              another new line`
            },
            {
              "label": "Recommended Promotion",
              "value": "asdf-456 promotion"
            },
            {
              "label": "Recommended Promotion",
              "value": {
                "type": "text",
                "format": "markdown",
                "text": "[View Promotion Details for promotion qwerty-456](https://app.hubspot.com/contacts/7640608/deal/8936256299)"
              }
            }
            ]
          },
          {
            type: 'text',
            format: 'markdown',
            text: 'High Value Open Deals',
          },  
        {
            "type": "crm::propertyList",
            "objectTypeId": "tickets",
            "objectId": "841400337", //update ticket id
            "properties": ["subject","hs_pipeline_stage","content"]
        }
      ],
    });
  };