import React from 'react'
import '../styles/bootstrap.min.css'
import Search from './Search'


class MainBerita extends React.Component {
    render() {
        return (
            <div className='row'>
                <div class="card">
                    <img class="card-img-top" src={require("../images/image1.jpeg")}/>
                    <div class="card-body">
                        <h3 class="card-title font-weight-bold">Special News lallala</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ratione dolorem necessitatibus, ducimus optio, voluptatum deserunt esse reprehenderit earum culpa tempora quaerat numquam ipsa explicabo eum iure dolorum nostrum qui?</p>
                        <span className='font-smaller text-muted' style={{fontSize:'0.8em'}}>Last updated 3 mins ago</span>
                    </div>
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
}

export default MainBerita;