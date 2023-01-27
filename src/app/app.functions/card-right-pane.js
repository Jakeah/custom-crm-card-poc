const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections:
        [
            {
                "type": "heading",
                "text": "Heading text"
            },
            {
                "type": "image",
                "src": "https://www.ui-extensibility.com/hubfs/welcome-sign.png",
                "alt": "A Welcome Sign sample image"
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