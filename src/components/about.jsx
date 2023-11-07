import React from 'react'

function about() {
    return (
        <div className="card my-4" id='about'>
            <div className="card-header">
                <h3>
                    About Us
                </h3>
            </div>
            <div className="card-body">
                <p className="card-text">TextConverter is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextConverter offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextConverter is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.</p>
                <ul class="list-group pt-3">
                    <li className="list-group-item fw-bold" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Analyze Your Text</li>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        It is a Simple Text Analyzer , which mutilates your text, but in a tender way
                        </div>
                    </div>
                    <li className="list-group-item fw-bold" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Free to use</li>
                    <div className="collapse" id="collapseExample2">
                        <div className="card card-body">
                        It is completely free to use. No credit cards required. Use as much as you want!!
                        </div>
                    </div>

                    <li className="list-group-item fw-bold" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">Browser Compatible</li>
                    <div className="collapse" id="collapseExample3">
                        <div className="card card-body">
                        It is compatible with all of your favorite browsers.
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default about