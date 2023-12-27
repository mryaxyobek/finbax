import React from 'react';

// image
import img from '../assets/images/other/aboutpage-bg-image.jpg';

const AboutPageMainContent = () => {
    return (
        <section className='about-page-main-section pt-120 pb-9'>
            <div className="container">
                <div className="max-w-1163">
                    <h2 className="text-28 tracking-1 font-feature-off font-gilroy-semibold font-semibold mb-15 after:inline-block after:content-[''] after:w-full after:h-0.5 after:bg-primary-blue-600 after:mt-15">Sagittis iaculis volutpat vivamus tortor eget elementum nisi erat aliquam. Platea sed ullamcorper pretium pulvinar aenean imperdiet sed integer.</h2>

                    <p className="font-feature-off tracking-1 text-2xl leading-normal mb-8">Molestie orci ultrices augue suscipit ut massa habitant convallis volutpat. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper viverra senectus scelerisque elit scelerisque hendrerit a aliquam. Odio sit donec quisque urna cursus turpis.</p>

                    <p className="paragraph-normal">There is something to be said about a truly disastrous meal, a meal forever indelible in your memory because it’s so uniquely bad, it can only be deemed an achievement. The sort of meal where everyone involved was definitely trying to do something; it’s just not entirely clear what.</p>

                    <img width={1091} height={560} src={img} alt="" aria-hidden='true' className="max-w-[1091px] h-[560px] w-full object-cover bg-center mb-15" />

                    <p className="paragraph-normal">Molestie orci ultrices augue suscipit ut massa habitant convallis volutpat. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper viverra senectus scelerisque elit scelerisque hendrerit a aliquam. Odio sit donec quisque urna cursus turpis.</p>

                    <p className="flex font-gilroy-medium font-medium text-2xl leading-normal mb-15 before:inline-block before:content-[''] before:min-h-full before:min-w-[3px] before:mr-8 before:bg-primary-blue-600">There is something to be said about a truly disastrous meal, a meal forever indelible in your memory because it’s so uniquely bad, it can only be deemed an achievement. </p>

                    <p className="paragraph-normal mb-0">There is something to be said about a truly disastrous meal, a meal forever indelible in your memory because it’s so uniquely bad, it can only be deemed an achievement. The sort of meal where everyone involved was definitely trying to do something; it’s just not entirely clear what.</p>
                </div>
            </div>
        </section>
    )
};

export default AboutPageMainContent;