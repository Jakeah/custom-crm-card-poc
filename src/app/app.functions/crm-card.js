const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections: [
        {
          type: 'heading',
          format: 'markdown',
          text: 'ERP Status',
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
                uri: 'https://app.hubspot.com/reports-dashboard/7640608/view/4385664'
              }
            }
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
              text: "Ready To Publish?"
            },
            {
              type: "text",
              text: "No - Account Certification Under Review - Verfication Not Sent"
            },
            {
              type: "text",
              text: ""
            },
            {
              type: "button",
              text: "Publish Ad",
              variant: "primary",
              disabled: true,
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
        }
      ],
    });
  };