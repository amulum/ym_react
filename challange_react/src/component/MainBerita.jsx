import React from 'react'
import '../styles/bootstrap.min.css'


function MainBerita(imagePath,judulBerita,linkJudulBerita, isiBerita, lastUpdated) {
    return (

        // using card for main content
        <div className='row mb-4 p-0'>
            <div class="card">
                <img class="card-img-top" src={imagePath}/>
                <div class="card-body">
                    {/* title */}
                    <a href={linkJudulBerita} target='_blank'>
                        <h3 class="card-title font-weight-bold">{judulBerita}</h3>
                    </a>
                    {/* content */}
                    <p class="card-text">{isiBerita}</p>
                    {/* last updated */}
                    <span className='font-smaller text-muted' style={{fontSize:'0.8em'}}>{lastUpdated}</span>
                    <span className='font-smaller text-muted' style={{fontSize:'0.8em'}}> Credit NewsAPI</span>
                </div>
                {/* button interaction */}
                <div className="card-footer bg-light d-flex flex-row justify-content-between">
                    <div className="col-4 text-center">
                        <a href="">
                            <i class="fa fa-fw fa-heart text-danger"></i>
                        </a>
                    </div>
                    <div className='col-4 text-center'>
                        <a href="">
                            <i class="fa fa-fw fa-share-alt text-dark"></i>
                        </a>
                    </div>
                    <div className='col-4 text-center'>
                        <a href="">
                            <i class="fa fa-fw fa-thumbs-down text-info"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBerita;
