import { NextRequest, NextResponse } from "next/server";

export default function SignUp(req: NextRequest, res: NextResponse) {
  console.log(req.body);
}
