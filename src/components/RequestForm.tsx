/** @format */

import React from "react"

export default function RequestForm() {
    return (
        <>
            <div className="mb-50">
                <h4 className="mb-20">联系我们</h4>
                <form name="fundcontact" method="post" className="row">
                    <input type="hidden" name="form-name" value="fundcontact" />
                    <div className="col-lg-12">
                        <input type="text" className="form-control" name="name" id="name" placeholder="姓名" required />
                    </div>
                    <div className="col-lg-12">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="邮箱"
                            required
                        />
                    </div>
                    <div className="col-lg-12">
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="标题"
                            required
                        />
                    </div>
                    <div className="col-lg-12">
                        <textarea
                            name="question"
                            id="question"
                            className="form-control p-2"
                            placeholder="请告诉我们您的详细问题，以便我们更快地为您提供帮助。"
                            style={{height: "150px"}}></textarea>
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-primary" type="submit" value="send">
                            提交
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
