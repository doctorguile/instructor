// Request: POST https://aks-aoai-eastus.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "user",
      "content": "Please choose one action"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "TakeAction"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "TakeAction",
        "description": "Correctly extracted `TakeAction` with all the required parameters with correct types",
        "parameters": {
          "$defs": {
            "Finish": {
              "description": "Finish action class with an 'answer' field and a process method.",
              "properties": {
                "answer": {
                  "description": "The answer for finishing the process",
                  "title": "Answer",
                  "type": "string"
                }
              },
              "required": [
                "answer"
              ],
              "title": "Finish",
              "type": "object"
            },
            "Lookup": {
              "description": "Lookup action class with a 'keyword' field and a process method.",
              "properties": {
                "keyword": {
                  "description": "The lookup keyword",
                  "title": "Keyword",
                  "type": "string"
                }
              },
              "required": [
                "keyword"
              ],
              "title": "Lookup",
              "type": "object"
            },
            "Search": {
              "description": "Search action class with a 'query' field and a process method.",
              "properties": {
                "query": {
                  "description": "The search query",
                  "title": "Query",
                  "type": "string"
                }
              },
              "required": [
                "query"
              ],
              "title": "Search",
              "type": "object"
            }
          },
          "properties": {
            "action": {
              "anyOf": [
                {
                  "$ref": "#/$defs/Search"
                },
                {
                  "$ref": "#/$defs/Lookup"
                },
                {
                  "$ref": "#/$defs/Finish"
                }
              ],
              "title": "Action"
            }
          },
          "required": [
            "action"
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
              "arguments": "{\"action\":{\"answer\":\"Chosen\"}}",
              "name": "TakeAction"
            },
            "id": "call_278pNEcI9m2q1cL92xlyJ9Yh",
            "type": "function"
          }
        ]
      }
    }
  ]
}
// Finish method called with answer: Chosen



// Request: POST https://aks-aoai-eastus.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "user",
      "content": "Please choose one action"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "TakeAction"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "TakeAction",
        "description": "Correctly extracted `TakeAction` with all the required parameters with correct types",
        "parameters": {
          "$defs": {
            "Finish": {
              "description": "Finish action class with an 'answer' field and a process method.",
              "properties": {
                "answer": {
                  "description": "The answer for finishing the process",
                  "title": "Answer",
                  "type": "string"
                }
              },
              "required": [
                "answer"
              ],
              "title": "Finish",
              "type": "object"
            },
            "Lookup": {
              "description": "Lookup action class with a 'keyword' field and a process method.",
              "properties": {
                "keyword": {
                  "description": "The lookup keyword",
                  "title": "Keyword",
                  "type": "string"
                }
              },
              "required": [
                "keyword"
              ],
              "title": "Lookup",
              "type": "object"
            },
            "Search": {
              "description": "Search action class with a 'query' field and a process method.",
              "properties": {
                "query": {
                  "description": "The search query",
                  "title": "Query",
                  "type": "string"
                }
              },
              "required": [
                "query"
              ],
              "title": "Search",
              "type": "object"
            }
          },
          "properties": {
            "action": {
              "anyOf": [
                {
                  "$ref": "#/$defs/Search"
                },
                {
                  "$ref": "#/$defs/Lookup"
                },
                {
                  "$ref": "#/$defs/Finish"
                }
              ],
              "title": "Action"
            }
          },
          "required": [
            "action"
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
              "arguments": "{\"action\":{\"answer\":\"One action has been chosen.\"}}",
              "name": "TakeAction"
            },
            "id": "call_HcCMLdtl4ncoSf1V1EKfHkqQ",
            "type": "function"
          }
        ]
      }
    }
  ]
}
// Finish method called with answer: One action has been chosen.

