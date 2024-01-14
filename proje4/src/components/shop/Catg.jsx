import React from 'react'

function Catg() {
    //Burada küçük bir veri dosyası oluşturuldu.
    const data = [
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Apple",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Samasung",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Oppo",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Vivo",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Redimi",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Sony",
        },
    ]
    return (
        //Yukarıdaki verileri burada çekme işlemi yapıldı.
        //Web sayfasında markalar başlığı altında küçük bir kart oluşturuldu.
        <>
            <div className='category'>
                <div className='chead d_flex'>
                    <h1>Markalar </h1>
                    <h1>Shops </h1>
                </div>
                {data.map((value, index) => {
                    return (
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='' />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
                <div className='box box2'>
                    <button>Tüm Markalar</button>
                </div>
            </div>
        </>
    )
}

export default Catg