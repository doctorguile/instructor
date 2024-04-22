// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "system",
      "content": "You are a world class PII scrubbing model, Extract the PII data from the following document"
    },
    {
      "role": "user",
      "content": "\n# Fake Document with PII for Testing PII Scrubbing Model\n\n## Personal Story\n\nJohn Doe was born on 01/02/1980. His social security number is 123-45-6789. He has been using the email address john.doe@email.com for years, and he can always be reached at 555-123-4567.\n\n## Residence\n\nJohn currently resides at 123 Main St, Springfield, IL, 62704. He's been living there for about 5 years now.\n\n## Career\n\nAt the moment, John is employed at Company A. He started his role as a Software Engineer in January 2015 and has been with the company since then.\n"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "PIIDataExtraction"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "PIIDataExtraction",
        "description": "Extracted PII data from a document, all data_types should try to have consistent property names",
        "parameters": {
          "$defs": {
            "Data": {
              "properties": {
                "index": {
                  "title": "Index",
                  "type": "integer"
                },
                "data_type": {
                  "title": "Data Type",
                  "type": "string"
                },
                "pii_value": {
                  "title": "Pii Value",
                  "type": "string"
                }
              },
              "required": [
                "index",
                "data_type",
                "pii_value"
              ],
              "title": "Data",
              "type": "object"
            }
          },
          "properties": {
            "private_data": {
              "items": {
                "$ref": "#/$defs/Data"
              },
              "title": "Private Data",
              "type": "array"
            }
          },
          "required": [
            "private_data"
          ],
          "type": "object"
        }
      }
    }
  ]
}

{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": null,
        "role": "assistant",
        "tool_calls": [
          {
            "function": {
              "arguments": "{\"private_data\":[{\"index\":0,\"data_type\":\"name\",\"pii_value\":\"John Doe\"},{\"index\":1,\"data_type\":\"date_of_birth\",\"pii_value\":\"01/02/1980\"},{\"index\":2,\"data_type\":\"social_security_number\",\"pii_value\":\"123-45-6789\"},{\"index\":3,\"data_type\":\"email_address\",\"pii_value\":\"john.doe@email.com\"},{\"index\":4,\"data_type\":\"phone_number\",\"pii_value\":\"555-123-4567\"},{\"index\":5,\"data_type\":\"physical_address\",\"pii_value\":\"123 Main St, Springfield, IL, 62704\"}]}",
              "name": "PIIDataExtraction"
            },
            "id": "call_IZAqFGl0USHEjYgX2DdT4tsZ",
            "type": "function"
          }
        ]
      }
    }
  ]
}

Extracted PII Data:
{
  "private_data": [
    {
      "index": 0,
      "data_type": "name",
      "pii_value": "John Doe"
    },
    {
      "index": 1,
      "data_type": "date_of_birth",
      "pii_value": "01/02/1980"
    },
    {
      "index": 2,
      "data_type": "social_security_number",
      "pii_value": "123-45-6789"
    },
    {
      "index": 3,
      "data_type": "email_address",
      "pii_value": "john.doe@email.com"
    },
    {
      "index": 4,
      "data_type": "phone_number",
      "pii_value": "555-123-4567"
    },
    {
      "index": 5,
      "data_type": "physical_address",
      "pii_value": "123 Main St, Springfield, IL, 62704"
    }
  ]
}
Scrubbed Document:

# Fake Document with PII for Testing PII Scrubbing Model

## Personal Story

<name_0> was born on <date_of_birth_1>. His social security number is <social_security_number_2>. He has been using the email address <email_address_3> for years, and he can always be reached at <phone_number_4>.

## Residence

John currently resides at <physical_address_5>. He's been living there for about 5 years now.

## Career

At the moment, John is employed at Company A. He started his role as a Software Engineer in January 2015 and has been with the company since then.


