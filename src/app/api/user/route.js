import { users } from "../../data/user";

// export async function GET() {
//     return new Response(JSON.stringify({ users }));
// }


export async function POST(req) {
    const user = await req.json();
    const newUser = {
        id: users?.length+1,
        name: user?.name,
        color: user?.color,
        price: user?.price
    }
    users.push(newUser);
    return new Response(JSON.stringify({ users }));
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredUser = query ? users.filter(user => user.name.includes(query)) : users
    return new Response(JSON.stringify(filteredUser));
}
