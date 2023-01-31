const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections:
        [
            {
                "type": "image",
                "src": "data:image/png;base64,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",
                "alt": "Oracle"
            },
            {
                "type": "tile",
                "content": [
                  {
                    "type": "text",
                    "text": "Use tiles to group related content together within a single card."
                  },
                  {
                    "type": "text",
                    "format": "markdown",
                    "text": "You can customize the content by adding other components, such as: text, images, etc. [Learn more about the tile component.](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
                  }
                ]
              },
              {
                "type": "statistics",
                "items": [
                  {
                    "label": "Statistics example",
                    "number": "347",
                    "description": {
                      "type": "text",
                      "format": "markdown",
                      "text": "[Learn more about this component](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
                    }
                  },
                  {
                    "label": "Bounce Rate",
                    "number": "18.4%",
                    "description": {
                      "type": "trend",
                      "value": "2.25%",
                      "direction": "decrease"
                    }
                  },
                  {
                    "label": "Time Spent",
                    "number": "64.2",
                    "description": {
                      "type": "trend",
                      "value": "2.1 seconds",
                      "direction": "increase"
                    }
                  }
                ]
              },
        ]
    });
  };