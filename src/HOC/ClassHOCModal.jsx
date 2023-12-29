import React,{Component} from 'react'

export default function ClassHOCModal(title,ComponentParam) {
 
return class ABC extends Component {
    render () {
        return (
            <div>
                <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalTitleId">
                                    {title}
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <ComponentParam />
                            </div>

                        </div>
                    </div>
                </div>
                {/* Optional: Place to the bottom of scripts */}
            </div>
        )
    }
  }
}
