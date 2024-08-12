import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Documents",
}


const Docs = () => {
    return (
        <div>
            <h2>Document List</h2>
            <h3> <Link href='/docs/1'>Document 1</Link> </h3>
            <h3> <Link href='/docs/2'>Document 2</Link> </h3>
            <h3> <Link href='/docs/3'>Document 3</Link> </h3>
            <h3> <Link href='/docs/4'>Document 4</Link> </h3>
            <h3> <Link href='/docs/5' replace>Document 5</Link> </h3>

        </div>
    )
}

export default Docs