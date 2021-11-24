import React from 'react';

const About = () => {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h6 className="mt-bottom">
                        <strong>ABOUT ME</strong>
                    </h6>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
                    </p>
                </div>
                <div className="card-action">
                    <h6>
                        <strong>PERSONAL INFO</strong>
                    </h6>
                    <div className="row mt">
                        <div className="col xl6 l6 m6 s12">
                            <p>
                                <strong>Address:</strong> 123 Lorem
                            </p>
                            <p>
                                <strong>Email:</strong> "fuad221@gmail.com"
                            </p>
                            <p>
                                <strong>Mobil</strong> 0157********
                            </p>
                        </div>
                        <div className="col xl6 l6 m6 s12">
                            <p>
                                <strong> Language</strong> - English
                            </p>
                            <p>
                                <strong>Second Language</strong> - Germany
                            </p>
                            <p>
                                <strong>Third Language</strong> - Russian
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
