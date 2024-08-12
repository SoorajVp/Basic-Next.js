import React from 'react'

const LearnDocsDetails = ({ params }) => {
    return (
        <>
            <h1>LearnDocsDetails {params?.slug?.[0] + " " + params?.slug?.[1]}</h1>
            {
                params?.slug?.length === 1 ?
                    <div>
                        <h2>Feature 1</h2>
                        <h2>Feature 2</h2>
                        <h2>Feature 3</h2>
                        <h2>Feature 4</h2>
                        <h2>Feature 5</h2>
                    </div> :
                    <p>
                        orem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

                        It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

                        It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

                        Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

                        When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.
                    </p>
            }
        </>
    )
}

export default LearnDocsDetails