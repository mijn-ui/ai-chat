import { NextResponse } from "next/server";
import { fakeERPCategories } from "@/constants/fake-erp-categories";
import { getPathSegment } from "@/lib/utils";

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;

	const category = fakeERPCategories.find(
		(category) => category.id === slug || getPathSegment(category.url) === slug
	);

	if (!category) {
		return new NextResponse(
			JSON.stringify({
				message: `Category with ID or slug: ${slug} doesn't exist.`
			}),
			{ status: 404 }
		);
	}

	return new NextResponse(JSON.stringify(category), { status: 200 });
}
