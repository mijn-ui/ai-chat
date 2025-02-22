import { NextResponse } from "next/server";
import { fakeERPCategories } from "@/constants/fake-erp-categories";

export async function GET() {
	return new NextResponse(JSON.stringify(fakeERPCategories), {
		status: 200
	});
}
