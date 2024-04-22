// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "system",
      "content": "\n            You are a world class CRM search career generator. \n            You will take the user query and decompose it into a set of CRM queries queries.\n            "
    },
    {
      "role": "user",
      "content": "find me all the pottery businesses in San Francisco and my friends in the east coast big cities"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "CRMSearchQuery"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "CRMSearchQuery",
        "description": "A set of CRM queries to be executed against a CRM system,\nfor large locations decompose into multiple queries of smaller locations",
        "parameters": {
          "$defs": {
            "CRMSearch": {
              "description": "A CRM search query\n\nThe search description is a natural language description of the search query\nthe backend will use semantic search so use a range of phrases to describe the search",
              "properties": {
                "source": {
                  "$ref": "#/$defs/CRMSource"
                },
                "city_location": {
                  "description": "City location used to match the desired customer profile",
                  "title": "City Location",
                  "type": "string"
                },
                "search_description": {
                  "description": "Search query used to match the desired customer profile",
                  "title": "Search Description",
                  "type": "string"
                }
              },
              "required": [
                "source",
                "city_location",
                "search_description"
              ],
              "title": "CRMSearch",
              "type": "object"
            },
            "CRMSource": {
              "enum": [
                "personal",
                "business",
                "work_contacts",
                "all"
              ],
              "title": "CRMSource",
              "type": "string"
            }
          },
          "properties": {
            "queries": {
              "items": {
                "$ref": "#/$defs/CRMSearch"
              },
              "title": "Queries",
              "type": "array"
            }
          },
          "required": [
            "queries"
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
              "arguments": "{\"queries\":[{\"source\":\"CRM_pottery_businesses\",\"city_location\":\"San Francisco\",\"search_description\":\"pottery businesses in San Francisco\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"New York\",\"search_description\":\"friends living in New York\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"Boston\",\"search_description\":\"friends living in Boston\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"Washington D.C.\",\"search_description\":\"friends living in Washington D.C.\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"Philadelphia\",\"search_description\":\"friends living in Philadelphia\"}]}",
              "name": "CRMSearchQuery"
            },
            "id": "call_efMFmtwpBfKuM81M6KNnpaes",
            "type": "function"
          }
        ]
      }
    }
  ]
}

// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "system",
      "content": "\n            You are a world class CRM search career generator. \n            You will take the user query and decompose it into a set of CRM queries queries.\n            "
    },
    {
      "role": "user",
      "content": "find me all the pottery businesses in San Francisco and my friends in the east coast big cities"
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_efMFmtwpBfKuM81M6KNnpaes",
          "function": {
            "arguments": "{\"queries\":[{\"source\":\"CRM_pottery_businesses\",\"city_location\":\"San Francisco\",\"search_description\":\"pottery businesses in San Francisco\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"New York\",\"search_description\":\"friends living in New York\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"Boston\",\"search_description\":\"friends living in Boston\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"Washington D.C.\",\"search_description\":\"friends living in Washington D.C.\"},{\"source\":\"CRM_personal_contacts\",\"city_location\":\"Philadelphia\",\"search_description\":\"friends living in Philadelphia\"}]}",
            "name": "CRMSearchQuery"
          },
          "type": "function"
        }
      ]
    },
    {
      "role": "tool",
      "tool_call_id": "call_efMFmtwpBfKuM81M6KNnpaes",
      "name": "CRMSearchQuery",
      "content": "Validation Error found:\n5 validation errors for CRMSearchQuery\nqueries.0.source\n  Input should be 'personal', 'business', 'work_contacts' or 'all' [type=enum, input_value='CRM_pottery_businesses', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nqueries.1.source\n  Input should be 'personal', 'business', 'work_contacts' or 'all' [type=enum, input_value='CRM_personal_contacts', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nqueries.2.source\n  Input should be 'personal', 'business', 'work_contacts' or 'all' [type=enum, input_value='CRM_personal_contacts', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nqueries.3.source\n  Input should be 'personal', 'business', 'work_contacts' or 'all' [type=enum, input_value='CRM_personal_contacts', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nqueries.4.source\n  Input should be 'personal', 'business', 'work_contacts' or 'all' [type=enum, input_value='CRM_personal_contacts', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nRecall the function correctly, fix the errors"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "CRMSearchQuery"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "CRMSearchQuery",
        "description": "A set of CRM queries to be executed against a CRM system,\nfor large locations decompose into multiple queries of smaller locations",
        "parameters": {
          "$defs": {
            "CRMSearch": {
              "description": "A CRM search query\n\nThe search description is a natural language description of the search query\nthe backend will use semantic search so use a range of phrases to describe the search",
              "properties": {
                "source": {
                  "$ref": "#/$defs/CRMSource"
                },
                "city_location": {
                  "description": "City location used to match the desired customer profile",
                  "title": "City Location",
                  "type": "string"
                },
                "search_description": {
                  "description": "Search query used to match the desired customer profile",
                  "title": "Search Description",
                  "type": "string"
                }
              },
              "required": [
                "source",
                "city_location",
                "search_description"
              ],
              "title": "CRMSearch",
              "type": "object"
            },
            "CRMSource": {
              "enum": [
                "personal",
                "business",
                "work_contacts",
                "all"
              ],
              "title": "CRMSource",
              "type": "string"
            }
          },
          "properties": {
            "queries": {
              "items": {
                "$ref": "#/$defs/CRMSearch"
              },
              "title": "Queries",
              "type": "array"
            }
          },
          "required": [
            "queries"
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
              "arguments": "{\"queries\":[{\"source\":\"business\",\"city_location\":\"San Francisco\",\"search_description\":\"pottery businesses in San Francisco\"},{\"source\":\"personal\",\"city_location\":\"New York\",\"search_description\":\"friends living in New York\"},{\"source\":\"personal\",\"city_location\":\"Boston\",\"search_description\":\"friends living in Boston\"},{\"source\":\"personal\",\"city_location\":\"Washington D.C.\",\"search_description\":\"friends living in Washington D.C.\"},{\"source\":\"personal\",\"city_location\":\"Philadelphia\",\"search_description\":\"friends living in Philadelphia\"}]}",
              "name": "CRMSearchQuery"
            },
            "id": "call_jIIVdFwpbWk4HnXypYXXrk9i",
            "type": "function"
          }
        ]
      }
    }
  ]
}

{
  "queries": [
    {
      "source": "business",
      "city_location": "San Francisco",
      "search_description": "pottery businesses in San Francisco"
    },
    {
      "source": "personal",
      "city_location": "New York",
      "search_description": "friends living in New York"
    },
    {
      "source": "personal",
      "city_location": "Boston",
      "search_description": "friends living in Boston"
    },
    {
      "source": "personal",
      "city_location": "Washington D.C.",
      "search_description": "friends living in Washington D.C."
    },
    {
      "source": "personal",
      "city_location": "Philadelphia",
      "search_description": "friends living in Philadelphia"
    }
  ]
}

