// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "system",
      "content": "The following is a transcript of a meeting between a manager and their team. The manager is assigning tasks to their team members and creating action items for them to complete."
    },
    {
      "role": "user",
      "content": "Create the action items for the following transcript: \nAlice: Hey team, we have several critical tasks we need to tackle for the upcoming release. First, we need to work on improving the authentication system. It's a top priority.\n\nBob: Got it, Alice. I can take the lead on the authentication improvements. Are there any specific areas you want me to focus on?\n\nAlice: Good question, Bob. We need both a front-end revamp and back-end optimization. So basically, two sub-tasks.\n\nCarol: I can help with the front-end part of the authentication system.\n\nBob: Great, Carol. I'll handle the back-end optimization then.\n\nAlice: Perfect. Now, after the authentication system is improved, we have to integrate it with our new billing system. That's a medium priority task.\n\nCarol: Is the new billing system already in place?\n\nAlice: No, it's actually another task. So it's a dependency for the integration task. Bob, can you also handle the billing system?\n\nBob: Sure, but I'll need to complete the back-end optimization of the authentication system first, so it's dependent on that.\n\nAlice: Understood. Lastly, we also need to update our user documentation to reflect all these changes. It's a low-priority task but still important.\n\nCarol: I can take that on once the front-end changes for the authentication system are done. So, it would be dependent on that.\n\nAlice: Sounds like a plan. Let's get these tasks modeled out and get started."
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "ActionItems"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "ActionItems",
        "description": "Correctly resolved set of action items from the given transcript",
        "parameters": {
          "$defs": {
            "PriorityEnum": {
              "enum": [
                "High",
                "Medium",
                "Low"
              ],
              "title": "PriorityEnum",
              "type": "string"
            },
            "Subtask": {
              "description": "Correctly resolved subtask from the given transcript",
              "properties": {
                "id": {
                  "description": "Unique identifier for the subtask",
                  "title": "Id",
                  "type": "integer"
                },
                "name": {
                  "description": "Informative title of the subtask",
                  "title": "Name",
                  "type": "string"
                }
              },
              "required": [
                "id",
                "name"
              ],
              "title": "Subtask",
              "type": "object"
            },
            "Ticket": {
              "description": "Correctly resolved ticket from the given transcript",
              "properties": {
                "id": {
                  "description": "Unique identifier for the ticket",
                  "title": "Id",
                  "type": "integer"
                },
                "name": {
                  "description": "Title of the task",
                  "title": "Name",
                  "type": "string"
                },
                "description": {
                  "description": "Detailed description of the task",
                  "title": "Description",
                  "type": "string"
                },
                "priority": {
                  "allOf": [
                    {
                      "$ref": "#/$defs/PriorityEnum"
                    }
                  ],
                  "description": "Priority level"
                },
                "assignees": {
                  "description": "List of users assigned to the task",
                  "items": {
                    "type": "string"
                  },
                  "title": "Assignees",
                  "type": "array"
                },
                "subtasks": {
                  "anyOf": [
                    {
                      "items": {
                        "$ref": "#/$defs/Subtask"
                      },
                      "type": "array"
                    },
                    {
                      "type": "null"
                    }
                  ],
                  "default": null,
                  "description": "List of subtasks associated with the main task",
                  "title": "Subtasks"
                },
                "dependencies": {
                  "anyOf": [
                    {
                      "items": {
                        "type": "integer"
                      },
                      "type": "array"
                    },
                    {
                      "type": "null"
                    }
                  ],
                  "default": null,
                  "description": "List of ticket IDs that this ticket depends on",
                  "title": "Dependencies"
                }
              },
              "required": [
                "id",
                "name",
                "description",
                "priority",
                "assignees"
              ],
              "title": "Ticket",
              "type": "object"
            }
          },
          "properties": {
            "items": {
              "items": {
                "$ref": "#/$defs/Ticket"
              },
              "title": "Items",
              "type": "array"
            }
          },
          "required": [
            "items"
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
              "arguments": "{\"items\":[{\"id\":1,\"name\":\"Improve the Authentication System\",\"description\":\"The task involves improving the authentication system, with a focus on both front-end revamp and back-end optimization.\",\"priority\":\"high\",\"assignees\":[\"Bob\",\"Carol\"],\"subtasks\":[{\"id\":1,\"name\":\"Front-end Revamp\"},{\"id\":2,\"name\":\"Back-end Optimization\"}]},{\"id\":2,\"name\":\"Integrate Authentication System with Billing System\",\"description\":\"After improving the authentication system, integrate it with the new billing system. This task is dependent on the new billing system being in place.\",\"priority\":\"medium\",\"assignees\":[\"Bob\"],\"dependencies\":[3]},{\"id\":3,\"name\":\"Develop New Billing System\",\"description\":\"Develop a new billing system to be integrated with the improved authentication system. This task is dependent on completing the back-end optimization of the authentication system.\",\"priority\":\"medium\",\"assignees\":[\"Bob\"],\"dependencies\":[1]},{\"id\":4,\"name\":\"Update User Documentation\",\"description\":\"Update the user documentation to reflect changes made to the authentication system and the integration with the billing system. It's dependent on the completion of the front-end revamp of the authentication system.\",\"priority\":\"low\",\"assignees\":[\"Carol\"],\"dependencies\":[1]}]}",
              "name": "ActionItems"
            },
            "id": "call_IpYVPbpn9iukbFvsRpa8SAjQ",
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
      "content": "The following is a transcript of a meeting between a manager and their team. The manager is assigning tasks to their team members and creating action items for them to complete."
    },
    {
      "role": "user",
      "content": "Create the action items for the following transcript: \nAlice: Hey team, we have several critical tasks we need to tackle for the upcoming release. First, we need to work on improving the authentication system. It's a top priority.\n\nBob: Got it, Alice. I can take the lead on the authentication improvements. Are there any specific areas you want me to focus on?\n\nAlice: Good question, Bob. We need both a front-end revamp and back-end optimization. So basically, two sub-tasks.\n\nCarol: I can help with the front-end part of the authentication system.\n\nBob: Great, Carol. I'll handle the back-end optimization then.\n\nAlice: Perfect. Now, after the authentication system is improved, we have to integrate it with our new billing system. That's a medium priority task.\n\nCarol: Is the new billing system already in place?\n\nAlice: No, it's actually another task. So it's a dependency for the integration task. Bob, can you also handle the billing system?\n\nBob: Sure, but I'll need to complete the back-end optimization of the authentication system first, so it's dependent on that.\n\nAlice: Understood. Lastly, we also need to update our user documentation to reflect all these changes. It's a low-priority task but still important.\n\nCarol: I can take that on once the front-end changes for the authentication system are done. So, it would be dependent on that.\n\nAlice: Sounds like a plan. Let's get these tasks modeled out and get started."
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_IpYVPbpn9iukbFvsRpa8SAjQ",
          "function": {
            "arguments": "{\"items\":[{\"id\":1,\"name\":\"Improve the Authentication System\",\"description\":\"The task involves improving the authentication system, with a focus on both front-end revamp and back-end optimization.\",\"priority\":\"high\",\"assignees\":[\"Bob\",\"Carol\"],\"subtasks\":[{\"id\":1,\"name\":\"Front-end Revamp\"},{\"id\":2,\"name\":\"Back-end Optimization\"}]},{\"id\":2,\"name\":\"Integrate Authentication System with Billing System\",\"description\":\"After improving the authentication system, integrate it with the new billing system. This task is dependent on the new billing system being in place.\",\"priority\":\"medium\",\"assignees\":[\"Bob\"],\"dependencies\":[3]},{\"id\":3,\"name\":\"Develop New Billing System\",\"description\":\"Develop a new billing system to be integrated with the improved authentication system. This task is dependent on completing the back-end optimization of the authentication system.\",\"priority\":\"medium\",\"assignees\":[\"Bob\"],\"dependencies\":[1]},{\"id\":4,\"name\":\"Update User Documentation\",\"description\":\"Update the user documentation to reflect changes made to the authentication system and the integration with the billing system. It's dependent on the completion of the front-end revamp of the authentication system.\",\"priority\":\"low\",\"assignees\":[\"Carol\"],\"dependencies\":[1]}]}",
            "name": "ActionItems"
          },
          "type": "function"
        }
      ]
    },
    {
      "role": "tool",
      "tool_call_id": "call_IpYVPbpn9iukbFvsRpa8SAjQ",
      "name": "ActionItems",
      "content": "Validation Error found:\n4 validation errors for ActionItems\nitems.0.priority\n  Input should be 'High', 'Medium' or 'Low' [type=enum, input_value='high', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nitems.1.priority\n  Input should be 'High', 'Medium' or 'Low' [type=enum, input_value='medium', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nitems.2.priority\n  Input should be 'High', 'Medium' or 'Low' [type=enum, input_value='medium', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nitems.3.priority\n  Input should be 'High', 'Medium' or 'Low' [type=enum, input_value='low', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.7/v/enum\nRecall the function correctly, fix the errors"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "ActionItems"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "ActionItems",
        "description": "Correctly resolved set of action items from the given transcript",
        "parameters": {
          "$defs": {
            "PriorityEnum": {
              "enum": [
                "High",
                "Medium",
                "Low"
              ],
              "title": "PriorityEnum",
              "type": "string"
            },
            "Subtask": {
              "description": "Correctly resolved subtask from the given transcript",
              "properties": {
                "id": {
                  "description": "Unique identifier for the subtask",
                  "title": "Id",
                  "type": "integer"
                },
                "name": {
                  "description": "Informative title of the subtask",
                  "title": "Name",
                  "type": "string"
                }
              },
              "required": [
                "id",
                "name"
              ],
              "title": "Subtask",
              "type": "object"
            },
            "Ticket": {
              "description": "Correctly resolved ticket from the given transcript",
              "properties": {
                "id": {
                  "description": "Unique identifier for the ticket",
                  "title": "Id",
                  "type": "integer"
                },
                "name": {
                  "description": "Title of the task",
                  "title": "Name",
                  "type": "string"
                },
                "description": {
                  "description": "Detailed description of the task",
                  "title": "Description",
                  "type": "string"
                },
                "priority": {
                  "allOf": [
                    {
                      "$ref": "#/$defs/PriorityEnum"
                    }
                  ],
                  "description": "Priority level"
                },
                "assignees": {
                  "description": "List of users assigned to the task",
                  "items": {
                    "type": "string"
                  },
                  "title": "Assignees",
                  "type": "array"
                },
                "subtasks": {
                  "anyOf": [
                    {
                      "items": {
                        "$ref": "#/$defs/Subtask"
                      },
                      "type": "array"
                    },
                    {
                      "type": "null"
                    }
                  ],
                  "default": null,
                  "description": "List of subtasks associated with the main task",
                  "title": "Subtasks"
                },
                "dependencies": {
                  "anyOf": [
                    {
                      "items": {
                        "type": "integer"
                      },
                      "type": "array"
                    },
                    {
                      "type": "null"
                    }
                  ],
                  "default": null,
                  "description": "List of ticket IDs that this ticket depends on",
                  "title": "Dependencies"
                }
              },
              "required": [
                "id",
                "name",
                "description",
                "priority",
                "assignees"
              ],
              "title": "Ticket",
              "type": "object"
            }
          },
          "properties": {
            "items": {
              "items": {
                "$ref": "#/$defs/Ticket"
              },
              "title": "Items",
              "type": "array"
            }
          },
          "required": [
            "items"
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
              "arguments": "{\"items\":[{\"id\":1,\"name\":\"Improve the Authentication System\",\"description\":\"The task involves improving the authentication system, with a focus on both front-end revamp and back-end optimization.\",\"priority\":\"High\",\"assignees\":[\"Bob\",\"Carol\"],\"subtasks\":[{\"id\":1,\"name\":\"Front-end Revamp\"},{\"id\":2,\"name\":\"Back-end Optimization\"}]},{\"id\":2,\"name\":\"Integrate Authentication System with Billing System\",\"description\":\"After improving the authentication system, integrate it with the new billing system. This task is dependent on the new billing system being in place.\",\"priority\":\"Medium\",\"assignees\":[\"Bob\"],\"dependencies\":[3]},{\"id\":3,\"name\":\"Develop New Billing System\",\"description\":\"Develop a new billing system to be integrated with the improved authentication system. This task is dependent on completing the back-end optimization of the authentication system.\",\"priority\":\"Medium\",\"assignees\":[\"Bob\"],\"dependencies\":[1]},{\"id\":4,\"name\":\"Update User Documentation\",\"description\":\"Update the user documentation to reflect changes made to the authentication system and the integration with the billing system. It's dependent on the completion of the front-end revamp of the authentication system.\",\"priority\":\"Low\",\"assignees\":[\"Carol\"],\"dependencies\":[1]}]}",
              "name": "ActionItems"
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
  "items": [
    {
      "id": 1,
      "name": "Improve the Authentication System",
      "description": "The task involves improving the authentication system, with a focus on both front-end revamp and back-end optimization.",
      "priority": "High",
      "assignees": [
        "Bob",
        "Carol"
      ],
      "subtasks": [
        {
          "id": 1,
          "name": "Front-end Revamp"
        },
        {
          "id": 2,
          "name": "Back-end Optimization"
        }
      ],
      "dependencies": null
    },
    {
      "id": 2,
      "name": "Integrate Authentication System with Billing System",
      "description": "After improving the authentication system, integrate it with the new billing system. This task is dependent on the new billing system being in place.",
      "priority": "Medium",
      "assignees": [
        "Bob"
      ],
      "subtasks": null,
      "dependencies": [
        3
      ]
    },
    {
      "id": 3,
      "name": "Develop New Billing System",
      "description": "Develop a new billing system to be integrated with the improved authentication system. This task is dependent on completing the back-end optimization of the authentication system.",
      "priority": "Medium",
      "assignees": [
        "Bob"
      ],
      "subtasks": null,
      "dependencies": [
        1
      ]
    },
    {
      "id": 4,
      "name": "Update User Documentation",
      "description": "Update the user documentation to reflect changes made to the authentication system and the integration with the billing system. It's dependent on the completion of the front-end revamp of the authentication system.",
      "priority": "Low",
      "assignees": [
        "Carol"
      ],
      "subtasks": null,
      "dependencies": [
        1
      ]
    }
  ]
}

