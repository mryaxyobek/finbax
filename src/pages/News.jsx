import React from 'react';
import img from '../assets/images/other/aboutpage-bg-image.jpg';

const News = () => {
    return (
        <div className='container py-11 max-w-[1220px]'>
            <ul className="space-y-12 news-list">
                <li className="news-list-item item space-y-5">
                    <h3 className="item-title">Sagittis iaculis volutpat</h3>
                    <div className="hr"></div>
                    <p className="item-description">Molestie orci ultrices augue suscipit ut massa habitant convallis volutpat. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper.Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper</p>
                    <img src={img} width={1045} height={480} alt="" className="item-img" />
                </li>
                <li className="news-list-item item space-y-5">
                    <h3 className="item-title">Sagittis iaculis volutpat</h3>
                    <div className="hr"></div>
                    <p className="item-description">Molestie orci ultrices augue suscipit ut massa habitant convallis volutpat. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper.Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper</p>
                    <img src={img} width={1045} height={480} alt="" className="item-img" />
                </li>
                <li className="news-list-item item space-y-5">
                    <h3 className="item-title">Sagittis iaculis volutpat</h3>
                    <div className="hr"></div>
                    <p className="item-description">Molestie orci ultrices augue suscipit ut massa habitant convallis volutpat. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper. Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper.Mi, arcu urna, risus et. Sed cras cras sodales consectetur dolor risus aenean arcu. Ullamcorper</p>
                    <img src={img} width={1045} height={480} alt="" className="item-img" />
                </li>
            </ul>
        </div>
    )
};

export default News;