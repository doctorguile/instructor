// Request: POST openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-12-01-preview
{
  "messages": [
    {
      "role": "system",
      "content": "You are a state of the art date range parse designed to correctly extract availabilities."
    },
    {
      "role": "user",
      "content": "\n    #1\n    \n    12/8-12/24\n    9am - 5pm Monday - Saturday\n    10am - 5pm Sunday\n\n    #2\n    We are open Friday, after Thanksgiving, and then Saturdays and Sundays 9 a.m. till dusk.``\n    "
    },
    {
      "role": "user",
      "content": "To help you understand the dates, here are the next 7 days: Friday, 2024-04-19 23:14:46\nSaturday, 2024-04-20 23:14:46\nSunday, 2024-04-21 23:14:46\nMonday, 2024-04-22 23:14:46\nTuesday, 2024-04-23 23:14:46\nWednesday, 2024-04-24 23:14:46\nThursday, 2024-04-25 23:14:46"
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "IterableAvailabilityResponse"
    }
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "IterableAvailabilityResponse",
        "description": "Correct segmentation of `AvailabilityResponse` tasks",
        "parameters": {
          "$defs": {
            "AvailabilityResponse": {
              "properties": {
                "availability": {
                  "items": {
                    "$ref": "#/$defs/DateRange"
                  },
                  "title": "Availability",
                  "type": "array"
                }
              },
              "required": [
                "availability"
              ],
              "title": "AvailabilityResponse",
              "type": "object"
            },
            "DateRange": {
              "properties": {
                "explain": {
                  "description": "Explain the date range in the context of the text before generating the date range and the repeat pattern.",
                  "title": "Explain",
                  "type": "string"
                },
                "repeats": {
                  "default": null,
                  "description": "If the date range repeats, and how often, this way we can generalize the date range to the future., if its special, then we can assume it is a one time event.",
                  "enum": [
                    "daily",
                    "weekly",
                    "monthly",
                    null
                  ],
                  "title": "Repeats"
                },
                "days_of_week": {
                  "description": "If the date range repeats, which days of the week does it repeat on.",
                  "items": {
                    "enum": [
                      "monday",
                      "tuesday",
                      "wednesday",
                      "thursday",
                      "friday",
                      "saturday",
                      "sunday",
                      null
                    ]
                  },
                  "title": "Days Of Week",
                  "type": "array"
                },
                "time_start": {
                  "description": "The start of the first time range in the day.",
                  "format": "date-time",
                  "title": "Time Start",
                  "type": "string"
                },
                "time_end": {
                  "description": "The end of the first time range in the day.",
                  "format": "date-time",
                  "title": "Time End",
                  "type": "string"
                }
              },
              "required": [
                "explain",
                "days_of_week",
                "time_start",
                "time_end"
              ],
              "title": "DateRange",
              "type": "object"
            }
          },
          "properties": {
            "tasks": {
              "description": "Correctly segmented list of `AvailabilityResponse` tasks",
              "items": {
                "$ref": "#/$defs/AvailabilityResponse"
              },
              "title": "Tasks",
              "type": "array"
            }
          },
          "type": "object",
          "required": [
            "tasks"
          ]
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
              "arguments": "{\"tasks\":[{\"availability\":[{\"explain\":\"This is a one-time event happening from December 8th to December 24th with varying operating hours on weekdays and weekends. Monday through Saturday, the operation hours are from 9 am to 5 pm, whereas on Sunday, it's from 10 am to 5 pm.\",\"repeats\":null,\"days_of_week\":[\"monday\",\"tuesday\",\"wednesday\",\"thursday\",\"friday\",\"saturday\"],\"time_start\":\"2023-12-08T09:00:00\",\"time_end\":\"2023-12-24T17:00:00\"},{\"explain\":\"This is a one-time event happening from December 8th to December 24th with varying operating hours on weekdays and weekends. Monday through Saturday, the operation hours are from 9 am to 5 pm, whereas on Sunday, it's from 10 am to 5 pm.\",\"repeats\":null,\"days_of_week\":[\"sunday\"],\"time_start\":\"2023-12-08T10:00:00\",\"time_end\":\"2023-12-24T17:00:00\"}]},{\"availability\":[{\"explain\":\"The establishment is open the Friday after Thanksgiving, and then Saturdays and Sundays from 9 a.m. until dusk. We need to determine the date for the Friday after Thanksgiving for this year, assuming Thanksgiving is on the fourth Thursday of November, which falls on November 23, 2024. Thus, the Friday after would be November 24, 2024. The opening hours are from 9 a.m. till dusk, and this pattern repeats weekly on Friday, Saturday, and Sunday.\",\"repeats\":\"weekly\",\"days_of_week\":[\"friday\",\"saturday\",\"sunday\"],\"time_start\":\"2024-11-24T09:00:00\",\"time_end\":\"2025-11-30T00:00:00\"}]}]}",
              "name": "IterableAvailabilityResponse"
            },
            "id": "call_DpInpX8UrGS4piG7iIs1IjD1",
            "type": "function"
          }
        ]
      }
    }
  ]
}
{
  "availability": [
    {
      "explain": "This is a one-time event happening from December 8th to December 24th with varying operating hours on weekdays and weekends. Monday through Saturday, the operation hours are from 9 am to 5 pm, whereas on Sunday, it's from 10 am to 5 pm.",
      "repeats": null,
      "days_of_week": [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      ],
      "time_start": "2023-12-08T09:00:00",
      "time_end": "2023-12-24T17:00:00"
    },
    {
      "explain": "This is a one-time event happening from December 8th to December 24th with varying operating hours on weekdays and weekends. Monday through Saturday, the operation hours are from 9 am to 5 pm, whereas on Sunday, it's from 10 am to 5 pm.",
      "repeats": null,
      "days_of_week": [
        "sunday"
      ],
      "time_start": "2023-12-08T10:00:00",
      "time_end": "2023-12-24T17:00:00"
    }
  ]
}
{
  "availability": [
    {
      "explain": "The establishment is open the Friday after Thanksgiving, and then Saturdays and Sundays from 9 a.m. until dusk. We need to determine the date for the Friday after Thanksgiving for this year, assuming Thanksgiving is on the fourth Thursday of November, which falls on November 23, 2024. Thus, the Friday after would be November 24, 2024. The opening hours are from 9 a.m. till dusk, and this pattern repeats weekly on Friday, Saturday, and Sunday.",
      "repeats": "weekly",
      "days_of_week": [
        "friday",
        "saturday",
        "sunday"
      ],
      "time_start": "2024-11-24T09:00:00",
      "time_end": "2025-11-30T00:00:00"
    }
  ]
}


