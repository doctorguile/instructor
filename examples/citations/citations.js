1 validation error for AnswerWithCitaton
answer.0.substring_quote
  Value error, Could not find substring_quote `Paris is the capital of France` in contexts [type=value_error, input_value='Paris is the capital of France', input_type=str]
    For further information visit https://errors.pydantic.dev/2.7/v/value_error
// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "user",
      "content": "Does the following citation exist in the following context?\n\nCitation: Paris is the capital of France\n\nContext: {1: 'Jason is a pirate', 2: 'Paris is the capital of France', 3: 'Irrelevant data'}"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "Validation"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "Validation",
        "description": "Verfication response from the LLM,\nthe error message should be detailed if the is_valid is False\nbut keep it to less than 100 characters, reference specific\nattributes that you are comparing, use `...` is the string is too long",
        "parameters": {
          "properties": {
            "is_valid": {
              "title": "Is Valid",
              "type": "boolean"
            },
            "error_messages": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "default": null,
              "description": "Error messages if any",
              "title": "Error Messages"
            }
          },
          "required": [
            "is_valid"
          ],
          "type": "object"
        }
      }
    }
  ]
}

{
  "question": "What is the capital of France?",
  "answer": [
    {
      "body": "Paris",
      "substring_quote": "Paris is the capital of France"
    }
  ]
}
// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "user",
      "content": "Does the following citation exist in the following context?\n\nCitation: Paris is the capital of France\n\nContext: {1: 'Jason is a pirate', 2: 'Paris is not the capital of France', 3: 'Irrelevant data'}"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "Validation"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "Validation",
        "description": "Verfication response from the LLM,\nthe error message should be detailed if the is_valid is False\nbut keep it to less than 100 characters, reference specific\nattributes that you are comparing, use `...` is the string is too long",
        "parameters": {
          "properties": {
            "is_valid": {
              "title": "Is Valid",
              "type": "boolean"
            },
            "error_messages": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "default": null,
              "description": "Error messages if any",
              "title": "Error Messages"
            }
          },
          "required": [
            "is_valid"
          ],
          "type": "object"
        }
      }
    }
  ]
}

1 validation error for AnswerWithCitaton
answer.0
  Value error, Cited content ('Paris is the capital of France') contradicts the context ('Paris is not the capital of France') [type=value_error, input_value={'body': 'Paris', 'substr... the capital of France'}, input_type=dict]
    For further information visit https://errors.pydantic.dev/2.7/v/value_error
// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "user",
      "content": "Does the following citation exist in the following context?\n\nCitation: Paris is the capital of France\n\nContext: {1: 'Jason is a pirate', 2: 'Paris is the capital of France', 3: 'Irrelevant data'}"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "Validation"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "Validation",
        "description": "Verfication response from the LLM,\nthe error message should be detailed if the is_valid is False\nbut keep it to less than 100 characters, reference specific\nattributes that you are comparing, use `...` is the string is too long",
        "parameters": {
          "properties": {
            "is_valid": {
              "title": "Is Valid",
              "type": "boolean"
            },
            "error_messages": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "default": null,
              "description": "Error messages if any",
              "title": "Error Messages"
            }
          },
          "required": [
            "is_valid"
          ],
          "type": "object"
        }
      }
    }
  ]
}

// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "user",
      "content": "Does the following answers match the question and the context?\n\nQuestion: What is the capital of France?\n\nAnswer: [Statements(body='Texas', substring_quote='Paris is the capital of France')]\n\nContext: {1: 'Jason is a pirate', 2: 'Paris is the capital of France', 3: 'Irrelevant data'}"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "Validation"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "Validation",
        "description": "Verfication response from the LLM,\nthe error message should be detailed if the is_valid is False\nbut keep it to less than 100 characters, reference specific\nattributes that you are comparing, use `...` is the string is too long",
        "parameters": {
          "properties": {
            "is_valid": {
              "title": "Is Valid",
              "type": "boolean"
            },
            "error_messages": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "default": null,
              "description": "Error messages if any",
              "title": "Error Messages"
            }
          },
          "required": [
            "is_valid"
          ],
          "type": "object"
        }
      }
    }
  ]
}

1 validation error for AnswerWithCitaton
  Value error, Answer's body does not match the correct capital of France, which is Paris. [type=value_error, input_value={'question': 'What is the...he capital of France'}]}, input_type=dict]
    For further information visit https://errors.pydantic.dev/2.7/v/value_error

