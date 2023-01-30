const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections: [
        {
          type: 'text',
          format: 'markdown',
          text: 'Take Action Relevant to this Ad Placement',
        },
        {
          "type": "buttonRow",
          "buttons": [
            {
              type: 'button',
              text: 'View Contract Status',
              onClick: {
                type: 'IFRAME',
                // Width and height of the iframe (in pixels)
                width: 1200,
                height: 800,
                uri: 'https://n.robertpainslie.com',
              },
            },
            {
              type: 'button',
              text: 'View Aptus Status',
              onClick: {
                type: 'IFRAME',
                // Width and height of the iframe (in pixels)
                width: 1200,
                height: 800,
                uri: 'https://www.robertpainslie.com/deal-table',
              },
            },
            {
              type: 'button',
              text: 'Associate most recent note with all associated contacts',
              onClick: {
                type: "IFRAME",
                width: 1200,
                height: 800,
                uri: 'https://www.google.com'
              },
            }
        ]
        },
        {
            "type": "divider",
            "distance": "small"
        },
        {
          "type": "crm::objectProperty",
          "objectTypeId":"contact",
          "objectId": 101, //Update the ID and Object to a relevant example
          "properties": [
           "firstname",
           "lastname",
           "hubspot_owner_id",
            "lifecyclestage",
          ]
         },
         //should add component to edit properties of 'primary' contact
        {
            "type": "tile",
            "content": [
              {
                "type": "text",
                "text": `Trend of past deals:`
              },
              {
                "type": "text",
                "format": "markdown",
                "text": `*Won:* 15\  
 
            *Lost:* 7\  `
              }
            ]
        },
          {
            "type": "statistics",
            "items": [
             {
              "label": "Next Recommended Action",
              "number": "Pitch upgrade opportunity for Product X"
             },
             {
              "label": "Sold Amount L30 Days",
              "number": "203",
              "description": {
                "type": "trend",
                "value": "23.36%",
                "direction": "increase"
                }
              },
              {
                "label": "Top Product Sold",
                "number": "Product 1",
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
        },
        {
            type: 'text',
            format: 'markdown',
            text: `Available 'context' data for development debugging: \   
             ${JSON.stringify(context)}`,
        },
      ],
    });
  };