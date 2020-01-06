import React from 'react'
import '../styles/bootstrap.min.css'

// list berita yg akan ditampilkan
const berita = [
    'Gabung Alpha Tech Academy Sekarang',
    'Ada apa dengan Kobar dan Hasan?',
    'Mengenal arafat sang Master Python',
    'Belajar ReactJS itu seru. Kamu setuju?',
    'Sudahkah kamu sehat mental?'
]
// logic loop untuk tiap berita yang akan ditampilkan
const loopBerita = berita.map((value, index)=> (
    <a href="#" style={{textDecoration:'None'}}>
        <li class="list-group-item text-secondary">
            <span class="badge badge-pill badge-danger">#{index+1}</span>
            <span className='d-block'>{value}</span>
        </li>
    </a>
))

class BeritaTerkini extends React.Component {
    render() {
        return (
            // Top Article left side
            <div className='row'>
                <ul class="list-group">
                    <li class="list-group-item d-flex flex-row justify-content-between">
                        <span className='font-weight-bold text-info'>
                            BERITA TERKINI                            
                        </span>
                        <span className='font-smaller ml-lg-auto text-info'>
                            <a href="#" style={{textDecoration:'None'}}>lihat semua</a> 
                        </span>
                    </li>
                    {loopBerita}
                </ul>
            </div>
        )
    }
}

export default BeritaTerkini;