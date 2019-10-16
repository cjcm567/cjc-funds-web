/** @format */

import React from "react"
import {LazyImage} from "react-lazy-images"
import imagePreloader from "../images/preloader.gif"
import imageArrowTop from "../images/funds/arrow-top.png"
import imageArrowBottom from "../images/funds/arrow-bottom.png"
export default function Flow() {
    const cardStyle = {
        minHeight: "30vh",
    }
    return (
        <>
            <section className="section position-relative pb-xl-200-lg-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h5 className="section-title-sm">我们倾向于投资易于理解和管理的证券</h5>
                            <h2 className="section-title section-title-border mb-xl-150-lg-100">投资流程</h2>
                        </div>
                        {/* process step1 */}
                        <div className="col-lg-4 col-sm-6 mb-md-50">
                            <div
                                className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative"
                                style={cardStyle}>
                                <div className="process-item-number">1</div>
                                <h5 className="text-primary">研究与分析</h5>
                                <p>
                                    我们的投资经理人提出的想法是什么产品在许多可投资的产品中是我们可以投资的，以实现基金的目标之间的产品。
                                </p>
                                <p>
                                    然后，我们会对要投资的证券进行详细分析。该分析可能包括价格预测、技术分析、定量分析、行业和公司特定的研究与分析。
                                </p>
                            </div>
                        </div>
                        {/* process step2 */}
                        <div className="col-lg-4 col-sm-6 mb-md-50">
                            <div
                                className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative"
                                style={cardStyle}>
                                <div className="process-item-number">2</div>
                                <h5 className="text-primary">建设与监控</h5>
                                <p>决定要投资的证券后，我们会考虑资产分配和限额要求，将证券添加到投资组合中。</p>
                                <p>持续监控建筑组合的绩效，以使我们能够评估其绩效，并确保投资符合 SIPO 的要求。</p>
                            </div>
                        </div>
                        {/* process step3 */}
                        <div className="col-lg-4 col-sm-6 mb-md-50">
                            <div
                                className="process-item py-xl-4 pl-xl-5 pt-5 px-4 rounded border position-relative"
                                style={cardStyle}>
                                <div className="process-item-number">3</div>
                                <h5 className="text-primary">分配和平衡</h5>
                                <p>我们积极管理投资。</p>
                                <p>
                                    我们致力于调整和平衡投资组合中的成分的策略，以为我们的客户实现最佳结果并遵守资产分配限制。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <LazyImage
                    src={imageArrowTop}
                    alt="image of Arrow Top"
                    placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                    actual={({imageProps}) => <img className="arrow-top" {...imageProps} />}
                />
                <LazyImage
                    src={imageArrowBottom}
                    alt="image of Arrow Bottom"
                    placeholder={({imageProps, ref}) => <img ref={ref} src={imagePreloader} alt={imageProps.alt} />}
                    actual={({imageProps}) => <img className="arrow-bottom" {...imageProps} />}
                />
            </section>
        </>
    )
}
