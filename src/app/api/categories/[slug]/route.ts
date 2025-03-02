import { NextRequest, NextResponse } from "next/server";
import { fakeERPCategories } from "@/constants/fake-erp-categories";
import { getPathSegment } from "@/lib/utils";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;
	const searchParams = request.nextUrl.searchParams;
	const chatId = searchParams.get("chatId");

	const category = fakeERPCategories.find(
		(category) => category.id === slug || getPathSegment(category.url) === slug
	);

	if (!category) {
		return new NextResponse(
			JSON.stringify({
				message: `Category with ID or URL: ${slug} doesn't exist.`
			}),
			{ status: 404 }
		);
	}

	if (chatId) {
		const chat = category.chats.find((chat) => chat.id === chatId);

		if (!chat) {
			return new NextResponse(
				JSON.stringify({
					message: `Chat with ID: ${chatId} doesn't exist within category: ${category.id}.`
				}),
				{ status: 404 }
			);
		}

		return new NextResponse(JSON.stringify(chat), { status: 200 });
	}

	return new NextResponse(JSON.stringify(category), { status: 200 });
}
