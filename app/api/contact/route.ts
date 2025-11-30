import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Destructure phone and company from the body now
    const { name, email, phone, company, message } = body;

    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      return NextResponse.json({ error: "Database ID missing" }, { status: 500 });
    }

    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        Email: {
          email: email,
        },
        // NEW: Phone Number Property
        Phone: {
          phone_number: phone, 
        },
        // NEW: Company Property (Rich text)
        Company: {
          rich_text: [{ text: { content: company || "" } }], 
        },
        Message: {
          rich_text: [{ text: { content: message } }],
        },
      },
    });

    return NextResponse.json({ success: true, id: response.id });
  } catch (error: any) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      { error: "Failed to submit", details: error.message },
      { status: 500 }
    );
  }
}