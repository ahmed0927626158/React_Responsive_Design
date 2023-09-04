import React from 'react'
import styles from "./find.module.css"
import {Navigation,Pagination,Scrollbar,A11y} from "swiper/modules"
import  {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import Card from './Card'
function Find() {
  return (
    <div className={styles.find}>
        <div className={styles.heading}>
            <h1>Find Your Drive</h1>
            <p><span>Explor the worled's largest car sharing market place</span></p>

        </div>
        <div className={styles.swiper}>
            <Swiper 
            modules={[Navigation,Pagination,Scrollbar,A11y]}
            breakpoints={{
                340:{
                    width:200,
                    slidesPerView:1
                },
                768:{
                    width:768,
                    slidesPerView:4
                },
                1040:{
                    width:1040,
                    slidesPerView:5
                }
            }}
            spaceBetween={10}
            navigation
            slidesPerView={3}>
                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" make="Audi"
                    ></Card>
                </SwiperSlide>


                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  make="Audi"
                    ></Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    make="Audi"
                     ></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1537984822441-cff330075342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  make="Audi"
                    ></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1542228262-3d663b306a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  make="Audi"
                    ></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" make="Audi"
                    ></Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                     make="Audi"
                    ></Card>
                </SwiperSlide>

            </Swiper>
            

        </div>
    </div>
  )
}

export default Find