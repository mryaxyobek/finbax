import React from 'react';

// images
import doneIcon from '../assets/images/other/done-icon.png';

const FaqSection = () => {
    return (
        <section className="faq-section pt-75 pb-28">
            <div className="container max-w-1290">
                {/* title */}
                <h2 className="restangle-shape before:mb-8 mb-12">
                    <span>
                        <span className="font-gilroy-medium font-medium">Nega aynan</span>
                        <span>Finbax?</span>
                    </span>
                </h2>

                {/* list */}
                <ol className="list">
                    <li className="list-item">
                        <div className="item-number-wrapper">
                            <span className="item-number">01</span>
                            <img src={doneIcon} alt="this is done icon image" className="done-icon" />
                        </div>
                        <p className="list-item-text">Mauris mattis semper cursus egestas sapien. <b>Praesent bibendum</b> donec purus faucibus morbi.</p>
                    </li>
                    <li className="list-item">
                        <div className="item-number-wrapper">
                            <span className="item-number">02</span>
                            <img src={doneIcon} alt="this is done icon image" className="done-icon" />
                        </div>
                        <p className="list-item-text">Mauris mattis semper cursus egestas sapien. <b>Praesent bibendum</b> donec purus faucibus morbi.</p>
                    </li>
                    <li className="list-item">
                        <div className="item-number-wrapper">
                            <span className="item-number">03</span>
                            <img src={doneIcon} alt="this is done icon image" className="done-icon" />
                        </div>
                        <p className="list-item-text">Mauris mattis semper cursus egestas sapien. <b>Praesent bibendum</b> donec purus faucibus morbi.</p>
                    </li>
                    <li className="list-item">
                        <div className="item-number-wrapper">
                            <span className="item-number">04</span>
                            <img src={doneIcon} alt="this is done icon image" className="done-icon" />
                        </div>
                        <p className="list-item-text">Mauris mattis semper cursus egestas sapien. <b>Praesent bibendum</b> donec purus faucibus morbi.</p>
                    </li>
                    <li className="list-item">
                        <div className="item-number-wrapper">
                            <span className="item-number">05</span>
                            <img src={doneIcon} alt="this is done icon image" className="done-icon" />
                        </div>
                        <p className="list-item-text">Mauris mattis semper cursus egestas sapien. <b>Praesent bibendum</b> donec purus faucibus morbi.</p>
                    </li>
                </ol>
            </div>
        </section>
    )
};

export default FaqSection;