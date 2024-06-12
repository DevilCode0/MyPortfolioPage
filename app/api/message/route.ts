import {conict} from "@/dbconfig/config";
import message from "@/dbconfig/models/message";
import { NextRequest,NextResponse } from "next/server";

conict()

export async function POST(request: NextRequest) {
  console.log("run");
  try {
    const { name,email,subject,body } = await request.json();

    const newMessage = new message({
        name,
        email,
        subject,
        body,
    });

    const savedMessage = await newMessage.save();
    console.log(savedMessage);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}