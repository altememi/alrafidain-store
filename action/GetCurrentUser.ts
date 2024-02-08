import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from '@/lib/prismaDB';


export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try {

        const session = await getSession();
        if (!session?.user?.email)
            return null;

        const currrentUser = await prisma.user.findUnique({
            where: { email: session?.user?.email },
        });
        if (!currrentUser) return null;
        return { ...currrentUser, createdAt: currrentUser.createdAt.toISOString(),
                updateAt: currrentUser.updateAt.toISOString(),
                emailVerified: currrentUser.emailVerified?.toString() || null}

    } catch (error: any) {
        return null;
    }
}