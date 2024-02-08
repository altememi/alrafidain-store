import { getCurrentUser } from '@/action/GetCurrentUser';
import prisma from '@/lib/prismaDB'
import { NextResponse } from "next/server";

export async function POST (req: Request) {

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return NextResponse.error();
    }

    const body = await req.json();
    const { name, description, price, brand, category, inStock, images } = body;

    const product = await prisma.product.create( { 
        data: {
            name,
            description,
            price: parseFloat(price),
            brand,
            category,
            inStock,
            images,

    },
});
return NextResponse.json(product);
}