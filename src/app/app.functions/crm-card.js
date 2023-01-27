const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections: [
        {
          type: 'text',
          format: 'markdown',
          text: 'View relevant data about specific deals',
        },
        {
          "type": "buttonRow",
          "buttons": [
            {
              type: 'button',
              text: 'View all deals',
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
            text: 'Open iframe to view all deals',
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
                  "type": "SERVERLESS_ACTION_HOOK",
                  "serverlessFunction": "associate-engagements",
                  "associatedObjectProperties": ["hs_object_id"]
              },
          },
          {
              type: 'button',
              text: 'View Contact Embed',
              onClick: {
                type: 'IFRAME',
                // Width and height of the iframe (in pixels)
                width: 1200,
                height: 800,
                uri: 'https://app.hubspot.com/contact-timeline-embed/7640608/login?id=101',
              },
          },
            {
              type: 'button',
              text: 'View embedded Google Sheet',
              onClick: {
                type: 'IFRAME',
                // Width and height of the iframe (in pixels)
                width: 1200,
                height: 800,
                uri: `https://docs.google.com/spreadsheets/d/1YGL_ae_NizHJfUeOVF7I60wIuC8v5GHFSBCYRDSXvGM/edit#gid=0?hs_object_id=${context.propertiesToSend.hs_object_id}`,
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