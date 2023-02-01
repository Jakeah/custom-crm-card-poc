const hubspot = require('@hubspot/api-client');
//Need to add code to render the card
exports.main = async (context = {}, sendResponse) => {
    console.log(context)
    sendResponse({
      sections:
        [
            {
                "type": "image",
                "src": "https://i.pinimg.com/236x/63/48/80/634880ebb53758d76b69d1f5bba350a7--prisma-software.jpg",
                "width": 100,
                "alt": "Prisma"
            },
              {
                "type": "statistics",
                "items": [
                  {
                    "label": "Your Ads Queued",
                    "number": "47",
                    "description": {
                      "type": "text",
                      "format": "markdown",
                      "text": "[View More Here](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
                    }
                  },
                  {
                    "label": "Ads Ready for Placement this Week",
                    "number": "3",
                    "description": {
                      "type": "trend",
                      "value": "2.25%",
                      "direction": "decrease"
                    }
                  },
                  {
                    "label": "Total Ads Placed this Month",
                    "number": "52",
                    "description": {
                      "type": "trend",
                      "value": "5.5 ads",
                      "direction": "increase"
                    }
                  }
                ]
              },
        ]
    });
  };