import React from 'react'
import '../styles/bootstrap.min.css'


function MainBerita(judulBerita, isiBerita, lastUpdated) {
    return (

        // using card for main content
        <div className='row mb-4'>
            <div class="card">
                <img class="card-img-top" src={require("../images/image1.jpeg")}/>
                <div class="card-body">
                    {/* title */}
                    <h3 class="card-title font-weight-bold">{judulBerita}</h3>
                    {/* content */}
                    <p class="card-text">{isiBerita}</p>
                    {/* last updated */}
                    <span className='font-smaller text-muted' style={{fontSize:'0.8em'}}>{lastUpdated}</span>
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

let lstBerita = [
    {
        judul : 'judul1',
        isi : 'isi1',
        updated : 'updated1'
    },
    {
        judul : 'judul2',
        isi : 'isi2',
        updated : 'updated2'
    },
    {
        judul : 'judul3',
        isi : 'isi3',
        updated : 'updated3'
    },
]

const CallBerita = lstBerita.map((obj) =>(
    MainBerita(obj.judul,obj.isi,obj.updated)
))

class RenderMainBerita extends React.Component {
    render() {
        return (
            <div>{CallBerita}</div>
        )
    }
}

export default RenderMainBerita;