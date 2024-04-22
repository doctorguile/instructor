// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "system",
      "content": "You are a world class programming AI capable of writing correct python scripts and modules. You will name files correct, include __init__.py files and write correct python code. with correct imports."
    },
    {
      "role": "user",
      "content": "\n        Create a fastapi app with a readme.md file and a main.py file with\n        some basic math functions. the datamodels should use pydantic and\n        the main.py should use fastapi. the readme.md should have a title\n        and a description. The readme should contain some helpful infromation\n        and a curl example"
    }
  ],
  "max_tokens": 1000,
  "temperature": 0.1,
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "Program"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "Program",
        "description": "Set of files that represent a complete and correct program",
        "parameters": {
          "$defs": {
            "File": {
              "description": "Correctly named file with contents.",
              "properties": {
                "file_name": {
                  "description": "The name of the file including the extension",
                  "title": "File Name",
                  "type": "string"
                },
                "body": {
                  "description": "Correct contents of a file",
                  "title": "Body",
                  "type": "string"
                }
              },
              "required": [
                "file_name",
                "body"
              ],
              "title": "File",
              "type": "object"
            }
          },
          "properties": {
            "files": {
              "description": "List of files",
              "items": {
                "$ref": "#/$defs/File"
              },
              "title": "Files",
              "type": "array"
            }
          },
          "required": [
            "files"
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
              "arguments": "{\"files\":[{\"file_name\":\"README.md\",\"body\":\"# FastAPI Math Functions App\\n\\nThis is a simple FastAPI application that provides basic math operations through a REST API. The application uses Pydantic for data validation and FastAPI for the web framework.\\n\\n## Features\\n\\n- Addition\\n- Subtraction\\n- Multiplication\\n- Division\\n\\n## How to Run\\n\\n1. Install the required packages:\\n\\n```bash\\npip install fastapi uvicorn pydantic\\n```\\n\\n2. Run the server:\\n\\n```bash\\nuvicorn main:app --reload\\n```\\n\\n## Example Usage\\n\\nTo add two numbers, you can use the following `curl` command:\\n\\n```bash\\ncurl -X 'POST' \\\\\\n  'http://127.0.0.1:8000/add' \\\\\\n  -H 'accept: application/json' \\\\\\n  -H 'Content-Type: application/json' \\\\\\n  -d '{\\n    \\\"num1\\\": 5,\\n    \\\"num2\\\": 3\\n}'\\n```\"},{\"file_name\":\"main.py\",\"body\":\"from fastapi import FastAPI\\nfrom pydantic import BaseModel\\n\\napp = FastAPI()\\n\\nclass MathOperation(BaseModel):\\n    num1: int\\n    num2: int\\n\\n@app.post(\\\"/add\\\")\\ndef add(operation: MathOperation):\\n    return {\\\"result\\\": operation.num1 + operation.num2}\\n\\n@app.post(\\\"/subtract\\\")\\ndef subtract(operation: MathOperation):\\n    return {\\\"result\\\": operation.num1 - operation.num2}\\n\\n@app.post(\\\"/multiply\\\")\\ndef multiply(operation: MathOperation):\\n    return {\\\"result\\\": operation.num1 * operation.num2}\\n\\n@app.post(\\\"/divide\\\")\\ndef divide(operation: MathOperation):\\n    if operation.num2 == 0:\\n        return {\\\"error\\\": \\\"Cannot divide by zero.\\\"}\\n    return {\\\"result\\\": operation.num1 / operation.num2}\\n\"}]}",
              "name": "Program"
            },
            "id": "call_yjTkTz46UKmv73qJpN5fF2MA",
            "type": "function"
          }
        ]
      }
    }
  ]
}

README.md
-
# FastAPI Math Functions App

This is a simple FastAPI application that provides basic math operations through a REST API. The application uses Pydantic for data validation and FastAPI for the web framework.

## Features

- Addition
- Subtraction
- Multiplication
- Division

## How to Run

1. Install the required packages:

```bash
pip install fastapi uvicorn pydantic
```

2. Run the server:

```bash
uvicorn main:app --reload
```

## Example Usage

To add two numbers, you can use the following `curl` command:

```bash
curl -X 'POST' \
  'http://127.0.0.1:8000/add' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "num1": 5,
    "num2": 3
}'
```




main.py
-
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class MathOperation(BaseModel):
    num1: int
    num2: int

@app.post("/add")
def add(operation: MathOperation):
    return {"result": operation.num1 + operation.num2}

@app.post("/subtract")
def subtract(operation: MathOperation):
    return {"result": operation.num1 - operation.num2}

@app.post("/multiply")
def multiply(operation: MathOperation):
    return {"result": operation.num1 * operation.num2}

@app.post("/divide")
def divide(operation: MathOperation):
    if operation.num2 == 0:
        return {"error": "Cannot divide by zero."}
    return {"result": operation.num1 / operation.num2}

