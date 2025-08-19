import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const content = `
{
  "appclips": {
    "apps": []
  },
  "applinks": {
    "details": [
      {
        "appID": "5V5EUT3ZXJ.org.stopfires.app",
        "paths": [
          "*"
        ]
      }
    ]
  },
  "webcredentials": {
    "apps": [
      "5V5EUT3ZXJ.org.stopfires.app"
    ]
  }
}
`

  return new Response(content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
    },
  })
}
