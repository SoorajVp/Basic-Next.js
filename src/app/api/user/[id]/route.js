import { users } from "@/app/data/user";
import { redirect } from "next/navigation";



export async function GET(req, {params}) {

    if (parseInt(params.id) > users.length) {
        redirect("/api/user");
    }
    const user = users.find(user => user.id === parseInt(params.id))
    return new Response(JSON.stringify(user));
}

export async function PATCH(req, { params }) {
    const { name, color, price } = await req.json()
    const index = users.findIndex(user => user.id === parseInt(params.id))
    users[index].name = name;
    users[index].color = color;
    users[index].price = price;
    return new Response(JSON.stringify(users));
}

export async function DELETE(req, { params }) {

    const index = users.findIndex(user => user.id === parseInt(params.id))
    const deletedUsers = users[index];
    users.splice(index, 1);
    return new Response(JSON.stringify(deletedUsers));
}

