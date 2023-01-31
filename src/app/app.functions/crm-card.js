const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections: [
        {
          type: 'text',
          format: 'markdown',
          text: 'ERP Verification',
        },
        {
          "type": "statistics",
          "items": [
            {
            "label": "Credit Check Status",
            "number": "Completed"
            },
            {
            "label": "Account Certification Status",
            "number": "Under Review",
            },
          ]
        },       
        {
            "type": "divider",
            "distance": "small"
        },
        {
          type: "tile",
          body: [
            {
              type: "heading",
              text: "Verification Status"
            },
            {
              type: "text",
              text: "Not Sent"
            },
            {
              type: "text",
              text: ""
            },
            {
              type: "button",
              text: "Send for verification",
              variant: "primary",
              onClick: {
                type: "IFRAME",
                width: 1200,
                height: 800,
                uri: 'https://www.hubspot.com/'
              }
            }
          ]
        },
        {
            "type": "divider",
            "distance": "small"
        },
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