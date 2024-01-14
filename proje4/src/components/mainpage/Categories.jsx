import React from 'react'

function Categories() {
    const data = [//Küçük bir json dosyası oluşturuldu.
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Moda",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Elektronik",
        },
        {
            cateImg: "./images/category/cat3.png",
            cateName: "Arabalar",
        },
        {
            cateImg: "./images/category/cat4.png",
            cateName: "Ev & Bahçe",
        },
        {
            cateImg: "./images/category/cat5.png",
            cateName: "Hediyelik Eşyalar",
        },
        {
            cateImg: "./images/category/cat6.png",
            cateName: "Müzik",
        },
        {
            cateImg: "./images/category/cat7.png",
            cateName: "Sağlık & Güzellik",
        },
        {
            cateImg: "./images/category/cat8.png",
            cateName: "Evcil Hayvanlar",
        },
        {
            cateImg: "./images/category/cat9.png",
            cateName: "Bebek Oyuncakları",
        },
        {
            cateImg: "./images/category/cat10.png",
            cateName: "Market",
        },
        {
            cateImg: "./images/category/cat11.png",
            cateName: "Kitaplar",
        },
    ]
    return (
        <>
            <div className='category'>
                {data.map((value, index) => {
                    return (//yukarıdaki datadan bilgileri çekerkmek  için aşağıdaki kod yazıldı.
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='' />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Categories